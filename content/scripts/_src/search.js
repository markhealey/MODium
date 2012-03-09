function initEngine() {
    updateSearchBar(localStorage["EngineToLoad"])
}
function youtube_search() {
    trackSearch("youtube");
    if (localStorage["FavOrLast"] == "last") {
        localStorage["EngineToLoad"] = "youtube"
    }
    var a = document.getElementById("searchInput").value;
    if (getLang() == "fr") {
        if (a.length == 0) {
            window.location.replace("http://www.youtube.fr")
        } else {
            a = replace(a, replaceList[0], replaceList[1]);
            window.location.replace("http://www.youtube.fr/results?search_query=" + a)
        }
    } else {
        if (a.length == 0) {
            window.location.replace("http://www.youtube.com")
        } else {
            a = replace(a, replaceList[0], replaceList[1]);
            window.location.replace("http://www.youtube.com/results?search_query=" + a)
        }
    }
}
function yahoo_search() {
    trackSearch("yahoo");
    if (localStorage["FavOrLast"] == "last") {
        localStorage["EngineToLoad"] = "yahoo"
    }
    var a = document.getElementById("searchInput").value;
    if (getLang() == "fr") {
        if (a.length == 0) {
            window.location.replace("http://fr.yahoo.com")
        } else {
            a = replace(a, replaceList[0], replaceList[1]);
            window.location.replace("http://fr.search.yahoo.com/search?p=" + a)
        }
    } else {
        if (a.length == 0) {
            window.location.replace("http://yahoo.com")
        } else {
            a = replace(a, replaceList[0], replaceList[1]);
            window.location.replace("http://search.yahoo.com/search?p=" + a)
        }
    }
}
function wikipedia_search() {
    trackSearch("wikipedia");
    if (localStorage["FavOrLast"] == "last") {
        localStorage["EngineToLoad"] = "wikipedia"
    }
    var a = document.getElementById("searchInput").value;
    if (getLang() == "fr") {
        if (a.length == 0) {
            window.location.replace("http://www.wikipedia.fr/")
        } else {
            a = replace(a, replaceList[0], replaceList[1]);
            window.location.replace("http://fr.wikipedia.org/w/index.php?title=Special:Search&search=" + a)
        }
    } else {
        if (a.length == 0) {
            window.location.replace("http://www.wikipedia.com/")
        } else {
            a = replace(a, replaceList[0], replaceList[1]);
            window.location.replace("http://en.wikipedia.org/w/index.php?title=Special:Search&search=" + a)
        }
    }
}
function twitter_search() {
    trackSearch("twitter");
    if (localStorage["FavOrLast"] == "last") {
        localStorage["EngineToLoad"] = "twitter"
    }
    var a = document.getElementById("searchInput").value;
    if (a.length == 0) {
        window.location.replace("http://www.twitter.com/")
    } else {
        a = replace(a, replaceList[0], replaceList[2]);
        window.location.replace("http://twitter.com/#!/search/" + a)
    }
}
function picasa_search() {
    trackSearch("picasa");
    if (localStorage["FavOrLast"] == "last") {
        localStorage["EngineToLoad"] = "picasa"
    }
    var a = document.getElementById("searchInput").value;
    if (a.length == 0) {
        window.location.replace("http://www.picasaweb.google.com/")
    } else {
        a = replace(a, replaceList[0], replaceList[1]);
        window.location.replace("http://picasaweb.google.com/lh/view?q=" + a + "&psc=G&filter=1#")
    }
}
function myspace_search() {
    trackSearch("myspace");
    if (localStorage["FavOrLast"] == "last") {
        localStorage["EngineToLoad"] = "myspace"
    }
    var a = document.getElementById("searchInput").value;
    if (a.length == 0) {
        window.location.replace("http://www.myspace.com/")
    } else {
        a = replace(a, replaceList[0], replaceList[1]);
        window.location.replace("http://www.myspace.com/search/people?q=" + a)
    }
}
function ign_search() {
    trackSearch("ign");
    if (localStorage["FavOrLast"] == "last") {
        localStorage["EngineToLoad"] = "ign"
    }
    var a = document.getElementById("searchInput").value;
    if (getLang() == "fr") {
        if (a.length == 0) {
            window.location.replace("http://www.ign.com")
        } else {
            a = replace(a, replaceList[0], replaceList[1]);
            window.location.replace("http://uk.search.ign.com/product?query=" + a)
        }
    } else {
        if (a.length == 0) {
            window.location.replace("http://www.ign.com")
        } else {
            a = replace(a, replaceList[0], replaceList[1]);
            window.location.replace("http://uk.search.ign.com/product?query=" + a)
        }
    }
}
function google_search() {
    trackSearch("google");
    if (localStorage["FavOrLast"] == "last") {
        localStorage["EngineToLoad"] = "google"
    }
    var a = document.getElementById("searchInput").value;
    if (getLang() == "fr") {
        if (a.length == 0) {
            window.location.replace("http://www.google.fr")
        } else {
            a = replace(a, replaceList[0], replaceList[1]);
            window.location.replace("http://www.google.fr/search?q=" + a)
        }
    } else {
        if (a.length == 0) {
            window.location.replace("http://www.google.com")
        } else {
            a = replace(a, replaceList[0], replaceList[1]);
            window.location.replace("http://www.google.com/search?q=" + a)
        }
    }
}
function gamespot_search() {
    trackSearch("gamespot");
    if (localStorage["FavOrLast"] == "last") {
        localStorage["EngineToLoad"] = "gamespot"
    }
    var a = document.getElementById("searchInput").value;
    if (a.length == 0) {
        window.location.replace("http://www.gamespot.com")
    } else {
        a = replace(a, replaceList[0], replaceList[1]);
        window.location.replace("http://uk.gamespot.com/search.html?om_act=convert&om_clk=search&qs=" + a)
    }
}
function flickr_search() {
    trackSearch("flickr");
    if (localStorage["FavOrLast"] == "last") {
        localStorage["EngineToLoad"] = "flickr"
    }
    var a = document.getElementById("searchInput").value;
    if (a.length == 0) {
        window.location.replace("http://www.flickr.com/")
    } else {
        a = replace(a, replaceList[0], replaceList[1]);
        window.location.replace("http://www.flickr.com/search/?q=" + a)
    }
}
function facebook_search() {
    trackSearch("facebook");
    if (localStorage["FavOrLast"] == "last") {
        localStorage["EngineToLoad"] = "facebook"
    }
    var a = document.getElementById("searchInput").value;
    if (a.length == 0) {
        window.location.replace("http://www.facebook.com")
    } else {
        a = replace(a, replaceList[0], replaceList[2]);
        window.location.replace("http://www.facebook.com/search/?q=" + a)
    }
}
function eurogamer_search() {
    trackSearch("eurogamer");
    if (localStorage["FavOrLast"] == "last") {
        localStorage["EngineToLoad"] = "eurogamer"
    }
    var a = document.getElementById("searchInput").value;
    if (getLang() == "fr") {
        if (a.length == 0) {
            window.location.replace("http://www.eurogamer.fr")
        } else {
            a = replace(a, replaceList[0], replaceList[1]);
            window.location.replace("http://www.eurogamer.fr/search.php?q=" + a)
        }
    } else {
        if (a.length == 0) {
            window.location.replace("http://www.eurogamer.net")
        } else {
            a = replace(a, replaceList[0], replaceList[1]);
            window.location.replace("http://www.eurogamer.net/search.php?q=" + a)
        }
    }
}
function ebay_search() {
    trackSearch("ebay");
    if (localStorage["FavOrLast"] == "last") {
        localStorage["EngineToLoad"] = "ebay"
    }
    var a = document.getElementById("searchInput").value;
    if (getLang() == "fr") {
        if (a.length == 0) {
            window.location.replace("http://www.ebay.fr")
        } else {
            a = replace(a, replaceList[0], replaceList[1]);
            window.location.replace("http://annonces.ebay.fr/allitems?_from=R40&fl1=500001&_trksid=m38&_nkw=" + a)
        }
    } else {
        if (a.length == 0) {
            window.location.replace("http://www.ebay.com")
        } else {
            a = replace(a, replaceList[0], replaceList[1]);
            window.location.replace("http://shop.ebay.com/?_from=R40&_trksid=p3907.m570.l1313&_sacat=See-All-Categories&_nkw=" + a)
        }
    }
}
function digg_search() {
    trackSearch("digg");
    if (localStorage["FavOrLast"] == "last") {
        localStorage["EngineToLoad"] = "digg"
    }
    var a = document.getElementById("searchInput").value;
    if (a.length == 0) {
        window.location.replace("http://digg.com/")
    } else {
        a = replace(a, replaceList[0], replaceList[1]);
        window.location.replace("http://digg.com/search?q=" + a + "&submit=")
    }
}
function deviantart_search() {
    trackSearch("deviantart");
    if (localStorage["FavOrLast"] == "last") {
        localStorage["EngineToLoad"] = "deviantart"
    }
    var a = document.getElementById("searchInput").value;
    if (a.length == 0) {
        window.location.replace("http://www.deviantart.com/")
    } else {
        a = replace(a, replaceList[0], replaceList[1]);
        window.location.replace("http://browse.deviantart.com/?qh=&section=&q=" + a)
    }
}
function deezer_search() {
    trackSearch("deezer");
    if (getLang() == "fr") {
        var a = "fr"
    } else {
        var a = "en"
    }
    if (localStorage["FavOrLast"] == "last") {
        localStorage["EngineToLoad"] = "deezer"
    }
    var b = document.getElementById("searchInput").value;
    if (b.length == 0) {
        window.location.replace("http://www.deezer.com/" + a + "/")
    } else {
        window.location.replace("http://www.deezer.com/" + a + "/#music/result/all/" + b)
    }
}
function dailymotion_search() {
    trackSearch("dailymotion");
    if (localStorage["FavOrLast"] == "last") {
        localStorage["EngineToLoad"] = "dailymotion"
    }
    var a = document.getElementById("searchInput").value;
    if (getLang() == "fr") {
        if (a.length == 0) {
            window.location.replace("http://www.dailymotion.com/")
        } else {
            a = replace(a, replaceList[0], replaceList[1]);
            window.location.replace("http://www.dailymotion.com/relevance/search/" + a)
        }
    } else {
        if (a.length == 0) {
            window.location.replace("http://www.dailymotion.com/")
        } else {
            a = replace(a, replaceList[0], replaceList[1]);
            window.location.replace("http://www.dailymotion.com/relevance/search/" + a)
        }
    }
}
function bing_search() {
    trackSearch("bing");
    if (localStorage["FavOrLast"] == "last") {
        localStorage["EngineToLoad"] = "bing"
    }
    var a = document.getElementById("searchInput").value;
    if (a.length == 0) {
        window.location.replace("http://www.bing.com/")
    } else {
        a = replace(a, replaceList[0], replaceList[1]);
        window.location.replace("http://www.bing.com/search?q=" + a)
    }
}
function baidu_search() {
    trackSearch("baidu");
    if (localStorage["FavOrLast"] == "last") {
        localStorage["EngineToLoad"] = "baidu"
    }
    var a = document.getElementById("searchInput").value;
    if (a.length == 0) {
        window.location.replace("http://www.baidu.com")
    } else {
        a = replace(a, replaceList[0], replaceList[1]);
        window.location.replace("http://www.baidu.com/s?wd=" + a)
    }
}
function ask_search() {
    trackSearch("ask");
    if (localStorage["FavOrLast"] == "last") {
        localStorage["EngineToLoad"] = "ask"
    }
    var a = document.getElementById("searchInput").value;
    if (getLang() == "fr") {
        if (a.length == 0) {
            window.location.replace("http://fr.ask.com/")
        } else {
            a = replace(a, replaceList[0], replaceList[1]);
            window.location.replace("http://fr.ask.com/web?q=" + a + "&qsrc=0&o=312&l=dir")
        }
    } else {
        if (a.length == 0) {
            window.location.replace("http://en.ask.com/")
        } else {
            a = replace(a, replaceList[0], replaceList[1]);
            window.location.replace("http://ask.com/web?q=" + a + "&qsrc=0&o=312&l=dir")
        }
    }
}
function amazon_search() {
    trackSearch("amazon");
    if (localStorage["FavOrLast"] == "last") {
        localStorage["EngineToLoad"] = "amazon"
    }
    var a = document.getElementById("searchInput").value;
    if (getLang() == "fr") {
        if (a.length == 0) {
            window.location.replace("http://www.amazon.fr/")
        } else {
            a = replace(a, replaceList[0], replaceList[1]);
            window.location.replace("http://www.amazon.fr/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=" + a + "&x=0&y=0")
        }
    } else {
        if (a.length == 0) {
            window.location.replace("http://www.amazon.com/")
        } else {
            a = replace(a, replaceList[0], replaceList[1]);
            window.location.replace("http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=" + a + "&x=0&y=0")
        }
    }
}
function updateSearchBar(a) {
    if (a == undefined) a = "google";
    if (a == "eurogamer") $("#search_engine_logo").attr("href", "http://www.eurogamer.net");
    else $("#search_engine_logo").attr("href", "http://www." + a + ".com");
    $("#searchBar").attr("action", "javascript:" + a + "_search()");
    localStorage["nameSearchEngine"] = a
}
function displayEngines() {
    var a = new Array("amazon", "ask", "baidu", "bing", "dailymotion", "deezer", "deviantart", "digg", "ebay", "eurogamer", "facebook", "flickr", "gamespot", "google", "ign", "myspace", "picasa", "twitter", "wikipedia", "yahoo", "youtube");
    for (eng in a) {
        if (localStorage[a[eng]] != "false") document.getElementById("enginesList").innerHTML += '<button class="button button_' + a[eng] + '" onclick="updateSearchBar(\'' + a[eng] + "')\"><em>" + a[eng] + "<span></span></em></button>"
    }
    if (localStorage["fav_search_engine"] != undefined) {
        updateSearchBar(localStorage["fav_search_engine"])
    } else {
        updateSearchBar("google")
    }
    updateSEIconsAndLogoAnim()
}
var replaceList = [
    [" ", "&", "#"],
    ["+", "%26", "%23"],
    ["%20", "%26", "%23"]
]