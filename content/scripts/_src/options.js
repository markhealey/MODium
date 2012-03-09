function inNewTab() {
    if (localStorage["currentTab"] == 0) return true;
    return false
}
function save_options() {
    trackSavingOptions();
    if (document.getElementById("amazonBox").checked == true) {
        localStorage["amazon"] = true
    } else {
        localStorage["amazon"] = false
    }
    if (document.getElementById("askBox").checked == true) {
        localStorage["ask"] = true
    } else {
        localStorage["ask"] = false
    }
    if (document.getElementById("bingBox").checked == true) {
        localStorage["bing"] = true
    } else {
        localStorage["bing"] = false
    }
    if (document.getElementById("baiduBox").checked == true) {
        localStorage["baidu"] = true
    } else {
        localStorage["baidu"] = false
    }
    if (document.getElementById("dailymotionBox").checked == true) {
        localStorage["dailymotion"] = true
    } else {
        localStorage["dailymotion"] = false
    }
    if (document.getElementById("deezerBox").checked == true) {
        localStorage["deezer"] = true
    } else {
        localStorage["deezer"] = false
    }
    if (document.getElementById("deviantArtBox").checked == true) {
        localStorage["deviantart"] = true
    } else {
        localStorage["deviantart"] = false
    }
    if (document.getElementById("diggBox").checked == true) {
        localStorage["digg"] = true
    } else {
        localStorage["digg"] = false
    }
    if (document.getElementById("ebayBox").checked == true) {
        localStorage["ebay"] = true
    } else {
        localStorage["ebay"] = false
    }
    if (document.getElementById("eurogamerBox").checked == true) {
        localStorage["eurogamer"] = true
    } else {
        localStorage["eurogamer"] = false
    }
    if (document.getElementById("facebookBox").checked == true) {
        localStorage["facebook"] = true
    } else {
        localStorage["facebook"] = false
    }
    if (document.getElementById("flickrBox").checked == true) {
        localStorage["flickr"] = true
    } else {
        localStorage["flickr"] = false
    }
    if (document.getElementById("gameSpotBox").checked == true) {
        localStorage["gamespot"] = true
    } else {
        localStorage["gamespot"] = false
    }
    if (document.getElementById("googleBox").checked == true) {
        localStorage["google"] = true
    } else {
        localStorage["google"] = false
    }
    if (document.getElementById("ignBox").checked == true) {
        localStorage["ign"] = true
    } else {
        localStorage["ign"] = false
    }
    if (document.getElementById("myspaceBox").checked == true) {
        localStorage["myspace"] = true
    } else {
        localStorage["myspace"] = false
    }
    if (document.getElementById("picasaBox").checked == true) {
        localStorage["picasa"] = true
    } else {
        localStorage["picasa"] = false
    }
    if (document.getElementById("twitterBox").checked == true) {
        localStorage["twitter"] = true
    } else {
        localStorage["twitter"] = false
    }
    if (document.getElementById("wikipediaBox").checked == true) {
        localStorage["wikipedia"] = true
    } else {
        localStorage["wikipedia"] = false
    }
    if (document.getElementById("yahooBox").checked == true) {
        localStorage["yahoo"] = true
    } else {
        localStorage["yahoo"] = false
    }
    if (document.getElementById("youtubeBox").checked == true) {
        localStorage["youtube"] = true
    } else {
        localStorage["youtube"] = false
    }
    if (document.getElementById("favEngineRadio").checked) {
        localStorage["EngineToLoad"] = document.getElementById("favEngine").value;
        localStorage["FavOrLast"] = "fav"
    } else {
        localStorage["FavOrLast"] = "last"
    }
    if (document.getElementById("newTab").checked) localStorage["currentTab"] = 0;
    else localStorage["currentTab"] = 1;
    if (document.getElementById("faviconDisplayed").checked) {
        $(".favicon").show("slow");
        localStorage["faviconDisplayed"] = 1;
        localStorage["faviconNotDisplayed"] = 0
    } else {
        $(".favicon").hide("slow");
        localStorage["faviconDisplayed"] = 0;
        localStorage["faviconNotDisplayed"] = 1
    }
    if (document.getElementById("whiteBar").checked) localStorage["mvsDisplayStyle"] = "whiteBar";
    else localStorage["mvsDisplayStyle"] = "dropDownList";
    location.reload()
}
function initOptions() {
    if (localStorage["amazon"] != "false") {
        document.getElementById("amazonBox").checked = true
    }
    if (localStorage["ask"] != "false") {
        document.getElementById("askBox").checked = true
    }
    if (localStorage["bing"] != "false") {
        document.getElementById("bingBox").checked = true
    }
    if (localStorage["baidu"] != "false") {
        document.getElementById("baiduBox").checked = true
    }
    if (localStorage["dailymotion"] != "false") {
        document.getElementById("dailymotionBox").checked = true
    }
    if (localStorage["deezer"] != "false") {
        document.getElementById("deezerBox").checked = true
    }
    if (localStorage["deviantart"] != "false") {
        document.getElementById("deviantArtBox").checked = true
    }
    if (localStorage["digg"] != "false") {
        document.getElementById("diggBox").checked = true
    }
    if (localStorage["ebay"] != "false") {
        document.getElementById("ebayBox").checked = true
    }
    if (localStorage["eurogamer"] != "false") {
        document.getElementById("eurogamerBox").checked = true
    }
    if (localStorage["facebook"] != "false") {
        document.getElementById("facebookBox").checked = true
    }
    if (localStorage["flickr"] != "false") {
        document.getElementById("flickrBox").checked = true
    }
    if (localStorage["gamespot"] != "false") {
        document.getElementById("gameSpotBox").checked = true
    }
    if (localStorage["google"] != "false") {
        document.getElementById("googleBox").checked = true
    }
    if (localStorage["ign"] != "false") {
        document.getElementById("ignBox").checked = true
    }
    if (localStorage["myspace"] != "false") {
        document.getElementById("myspaceBox").checked = true
    }
    if (localStorage["picasa"] != "false") {
        document.getElementById("picasaBox").checked = true
    }
    if (localStorage["twitter"] != "false") {
        document.getElementById("twitterBox").checked = true
    }
    if (localStorage["wikipedia"] != "false") {
        document.getElementById("wikipediaBox").checked = true
    }
    if (localStorage["yahoo"] != "false") {
        document.getElementById("yahooBox").checked = true
    }
    if (localStorage["youtube"] != "false") {
        document.getElementById("youtubeBox").checked = true
    }
    if (localStorage["FavOrLast"] == "last") {
        document.getElementById("lastEngineRadio").checked = true
    } else {
        document.getElementById("favEngineRadio").checked = true;
        if (localStorage["EngineToLoad"] != undefined) {
            document.all.favEngine.value = localStorage["EngineToLoad"]
        } else {
            document.all.favEngine.value = "google"
        }
    }
    if (localStorage["faviconDisplayed"] == 0) document.getElementById("faviconNotDisplayed").checked = true;
    else document.getElementById("faviconDisplayed").checked = true;
    if (localStorage["currentTab"] == 0) document.getElementById("newTab").checked = true;
    else document.getElementById("currentTab").checked = true;
    if (localStorage["mvsDisplayStyle"] == "whiteBar") {
        document.getElementById("whiteBar").checked = true;
        $("#mvs-module").append('<div class="title"><span class="arrow"></span></div><div id="content"></div>');
        $("#mvs-module").attr("class", "whiteBar")
    } else {
        localStorage["mvsDisplayStyle"] = "dropDownList";
        document.getElementById("dropDownList").checked = true;
        $("#header-module").append('<span id="showHideMVSModule" class="showHideMVSModule headerButton">' + chrome.i18n.getMessage("showHideMVSModule") + "</span>");
        $("#mvs-module").append('<div class="blackTriangle"></div><ul></ul>');
        $("#mvs-module").attr("class", "dropDownList")
    }
    $("#EngineByDefaultChoiceLabel").html(chrome.i18n.getMessage("EngineByDefaultChoiceLabel"));
    $("#EnginesListChoiceLabel").html(chrome.i18n.getMessage("EnginesListChoiceLabel"));
    $("#LastEngineLabel").html(chrome.i18n.getMessage("LastEngineLabel"));
    $("#FavEngineLabel").html(chrome.i18n.getMessage("FavEngineLabel"));
    $("#options_save_button").html(chrome.i18n.getMessage("options_save_button"));
    $("#faviconLabel").html(chrome.i18n.getMessage("faviconLabel"));
    $("#faviconDisplayedLabel").html(chrome.i18n.getMessage("faviconDisplayedLabel"));
    $("#faviconNotDisplayedLabel").html(chrome.i18n.getMessage("faviconNotDisplayedLabel"));
    $("#tabLabel").html(chrome.i18n.getMessage("tabLabel"));
    $("#newTabLabel").html(chrome.i18n.getMessage("newTabLabel"));
    $("#currentTabLabel").html(chrome.i18n.getMessage("currentTabLabel"));
    $("#mvsDisplayStyleLabel").html(chrome.i18n.getMessage("mvsDisplayStyleLabel"));
    $("#whiteBarLabel").html(chrome.i18n.getMessage("whiteBarLabel"));
    $("#dropDownListLabel").html(chrome.i18n.getMessage("dropDownListLabel"));
    $(".showBookmarksModule").html(chrome.i18n.getMessage("showBookmarksModule"));
    $(".showApplicationsModule").html(chrome.i18n.getMessage("showApplicationsModule"));
    $(".showHideRCTModule").html(chrome.i18n.getMessage("showHideRCTModule"))
}