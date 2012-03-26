
function log(){
	console.log(arguments);
};

modiumjs = function(){

	this.isConnected = navigator.onLine;

};

modiumjs.prototype.init = function(){
	var self = this;

	this.bookmarksBar = this.getBookmarksBar();

	//NAV
	this.storeNavBarItems(this.getNavBarItems());
	this.buildNavBarItems();

	//DATA
	this.checkLanConnection();
	this.renderBookmarksBarList();
	//this.getTicketsIOwn();

	//EVENTS
	$(".navbar .edit").popover({
		placement:"left",
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
	//log(list,this.getNavBarItems())
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

modiumjs.prototype.checkLanConnection = function(){
	var self = this;
	$.ajax({
		url: "https://dev2.dev.local/wiki_api/todays_launches.asp",
		dataType: "jsonp",
		timeout:1000,
		cache:true,
		context:this
	}).done(function(jqxhr) {
			log("LAN connection test successful; ", jqxhr);
			log("Today's launches: ",jqxhr.results[0].rows);
			this.drawLaunches(jqxhr);
	}).fail(function(jqxhr,txt){
		log(txt,arguments)
		jqxhr.abort();
		log("Abort attempted")
		$("#contentBody").prepend(
			self.drawAlert(
				self._ALERT_TYPES.error,
				"Network Error!",
				"It appears you are not connected to the MOD corporate network (or Dev2 is down).")
		);
	});
}

modiumjs.prototype.drawLaunches = function(json){
	var $ol = $("<ul class='' />");
	try{
		var rows = json.results[0]["rows"];
		for (var i=0;i<rows.length;i++){
			var el = rows[i];
			var $li = $("<li />").append('<a target="_blank" href="https://sbm.wsod.local/tmtrack/tmtrack.dll?IssuePage&RecordId='+el.id+'&Template=view&TableId=1029">'+el.TITLE+'</a><br><small>'+el.CLIENT_REL+' <span style="color:#666">('+el.CONTACT_USER+')</span></small>');	
			$ol.append($li);
		}
		if (rows.length < 1){
			$ol.append('<li>There are no scheduled launches today. <a target="_blank" href="//sbm.wsod.local/tmtrack/tmtrack.dll?ReportPage&Template=reports%2Flistframe&ReportId=6880">View all upcoming launches in SBM</a>.</li>');	
		}
	}catch(e){
		$ol.append("<li>No data available ("+e+")</li>");	
	}
	$("#launches").append($ol);
};

modiumjs.prototype.getTicketsIOwn = function(){
	$.ajax({
		url:"https://sbm.wsod.local/tmtrack/tmtrack.dll?sid=pxxqmrvv&ReportPage&Template=reports%2Fjsonscript.htm&ReportId=32000&ReportType=1&QueryType=1&TableId=1015&ProjectId=487",
		dataType:"json"
	}).done(function(jqxhr){
		log(jqxhr)
	});
};

modiumjs.prototype._ALERT_TYPES = {success:"success",error:"error",info:"info"};

modiumjs.prototype.drawAlert = function(type,label,text){
	type = type || this._ALERT_TYPES.info; //see http://twitter.github.com/bootstrap/components.html#alerts
	label = label || "Warning";
	text = text || "Something happened that shouldn't have. Try again."
	return ['<div class="alert alert-block"><a class="close" data-dismiss="alert">&times;</a><b class="alert-heading">',label,'</b> ',text,'</div>'].join("");
};

MODium = new modiumjs();


if (typeof chrome == "undefined"){
	window.chrome = {
		bookmarks:{
			getTree:function(){ $.noop(); }
		}
	}
}

MODium.init();




