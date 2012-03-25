
function log(){
	console.log(arguments);
}



modiumjs = function(){

	this.isConnected = navigator.onLine;



};

modiumjs.prototype.init = function(){
	var self = this;

	this.bookmarksBar = this.getBookmarksBar();

	//NAV
	this.storeNavBarItems(this.getNavBarItems());
	this.buildNavBarItems();

	//EVENTS
	$(".navbar .edit").popover({
		placement:"bottom",
		title:"Edit Navbar",
		content:"The links in the Navbar are customizable! Drag and drop to reorder them, or swap them out for different links altogether."
	}).click(function(e){
		$(this).popover('hide');
	});

	//MODAL
	$("#editnavbarModal .modal-footer .btn-primary").click(function(e){
		self.collectAndSaveNavBarItemsFromEditModal();
	});

	$("#editnavbarModal form").submit(function(e){
		e.preventDefault();
		self.addNavBarItemForm(this);
	});

	$('a[data-navbar="reset"]').click(function(e){
		e.preventDefault();
		if(confirm("Are you sure? Resetting the Nav Bar will delete any custom items you've added.")){
			self.storeNavBarItems(self.NAVBAR_DEFAULTS);
			self._navBarModalShown($('#editnavbarModal'));
			self.redrawMainNav();
		}
	});

	$('#editnavbarModal').on('shown', function () {
		var $m = $(this);
		self._navBarModalShown($m);
	});

	//this.youOnline();
	//this.getWeather();
	//this.renderBookmarksBarList();
};

modiumjs.prototype._navBarModalShown = function($m){
	var self=this;
	$m.find(".modal-body ul").empty();
	$.each(self.getNavBarItems(),function(i,el){
		var $li = $("<li class='ui-state-default'><i class='icon-align-justify'></i> <a href='"+el.url+"'>"+el.label+"</a></li>")
		$m.find(".modal-body ul").append($li)
	});
	this.setupNavBarSort();
};

modiumjs.prototype.setupNavBarSort = function(){
	$( ".modal-body ul" ).sortable({
		placeholder: "ui-state-highlight",
		forcePlaceholderSize: true,
		sort: function(e, ui){
			$(ui.helper).addClass('moving')
		},
		beforeStop:function(e, ui){
			$(ui.helper).removeClass('moving')
		},
	}).disableSelection();
};

modiumjs.prototype.addNavBarItemForm = function(form) {
	var $form = $(form);
	var label = $form.find('input[name="name"]').val();
	var url = $form.find('input[name="url"]').val();
	var $li = $("<li class='ui-state-default'><i class='icon-align-justify'></i> <a href='"+url+"'>"+label+"</a></li>");

	//add LI
	$form.parents().children().find(".modal-body ul").append($li);

	//refresh sortable
	$( ".modal-body ul" ).sortable("refresh");

	//reset form
	$form.find('input').val("").end().find("input:eq(0)").focus();	
};

modiumjs.prototype.buildNavBarItems = function(){
	
	var self = this;

	$.each(this.getNavBarItems(),function(i,el){
		var $li = $("<li><a href='"+el.url+"'>"+el.label+"</a></li>")
		$(".navbar li.edit").before($li)
	});

	$(".navbar a").each(function(i,el){
		self.navbarTabs($(el));
	});
};

modiumjs.prototype.collectAndSaveNavBarItemsFromEditModal = function(){
	var list = [];
	$('#editnavbarModal').find("ul li a").each(function(i,el){
		//log(el)
		list.push({
			url:$(el).attr("href"),
			label:$(el).text()
		});
	});
	this.storeNavBarItems(list);
	this.redrawMainNav();
	$('#editnavbarModal').modal("hide");
};

modiumjs.prototype.redrawMainNav = function(){
	$(".navbar li:not('li.edit')").remove();
	this.buildNavBarItems();
};

modiumjs.prototype.NAVBAR_DEFAULTS = [
	{label:"Site Access",url:"https://intranet.wsod.local/"},
	{label:"SBM",url:"https://sbm.wsod.local/"},
	{label:"Wiki",url:"https://wiki.wsod.local/wsodwiki/index.php/Main_Page"},
	{label:"Confluence",url:"https://confluence.markit.com/"},
	{label:"Markit Intranet",url:"http://ukintranetvm001:81/adenin/portal.asp?bo=b6portal.wo&fn=HomePage"},
];

modiumjs.prototype.storeNavBarItems = function(items){
	var list = items;
	localStorage.setItem('NavBarItems', JSON.stringify(list));
	log(list,this.getNavBarItems())
};

modiumjs.prototype.getNavBarItems = function(){
	return JSON.parse(localStorage.getItem("NavBarItems")) || this.NAVBAR_DEFAULTS;
};

modiumjs.prototype.editNavBar = function(){

};

modiumjs.prototype.youOnline = function(){
	var msg = (this.isConnected)?'You are online':'You are not online';
	$("ul.nav").append("<li><a href='#'>"+msg+"</a></li>");
};

modiumjs.prototype.navbarTabs = function($el){
	if ($el.parent().hasClass("edit")) return;
	$el.click(function(e){
		e.preventDefault();
		chrome.tabs.create({
			"url": $el.attr("href")
		});
	});
}

modiumjs.prototype.getBookmarks = function(){
	chrome.bookmarks.getTree(function(nodes){
		for (var i=0; i<nodes.length; i++){
			//log(nodes[i])
		}
	});

	
}

modiumjs.prototype.getBookmarksBar = function(){
	var self = this;
	chrome.bookmarks.getTree(function(nodes){
		self.renderBookmarksBarList(nodes[0].children[0]); //bookmarks bar object
	});
}

modiumjs.prototype.renderBookmarksBarList = function(bookmarks){

	var $bookmarksContainer = $("#bookmarks");

	$.each(bookmarks, function(i,el){
		if ("children" == i){
			$.each(el, function(j,childEl){
				if(childEl.children){
					$bookmarksContainer.append(drawChildFolder(childEl));
				}
				else {
					$bookmarksContainer.append(drawChild(childEl));
				}
			});
		}

		//$bookmarksContainer.append(drawChild())
	});

	function drawChild(childNode){
		return drawBookmarkLi(childNode);
	};

	function drawChildFolder(childNode){
		var guid = guidGenerator();
		$bookmarksContainer.append('<li class="nav-header" data-toggle="collapse" data-target="#'+guid+'"></i> '+childNode.title+'</li>');
		var $ul = $("<ul />").attr("id",guid).addClass("collapse");
		$.each(childNode.children,function(i,el){
			//log(i,el)
			
			$ul.append(drawBookmarkLi(el));
		});
		$bookmarksContainer.append($ul);
	};

	function drawBookmarkLi(childNode){
		childNode = childNode || {};
		var title = childNode.title || "", 
			uri = childNode.url || "",
			$li = $("<li />"),
			$a = $("<a />").attr("href",uri).text(title).click(function(e){
				e.preventDefault();
				chrome.tabs.create({
					"url":uri
				});
			});
		$li.append($a);
		return $li;
	};

	function guidGenerator() {
	    var S4 = function() {
	       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
	    };
	    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
	};

};

modiumjs.prototype.getWeather = function(){

	if (!this.isConnected){ return; }

	$.ajax({
		url: "http://api.wunderground.com/api/8e2ddaaa7ed03304/conditions/q/CO/Boulder.json",
		dataType: "jsonp",
		success: function(json) {
			var current = json.current_observation;
			log(json.current_observation)
			$("#weather").append(current.weather + ", " + current.temperature_string +"<img src='http://icons.wxug.com/i/c/g/" + current.icon + ".gif'>")
		}
	});

};

MODium = new modiumjs();

if (typeof chrome != "undefined"){
	MODium.init();
	//$('#editnavbarModal').modal('show')
}




