function getDomain(a) {
    if (a == undefined || a == "") return "";
    if (a.indexOf("http://") != -1) a = a.substring(7, a.length);
    if (a.indexOf("https://") != -1) a = a.substring(8, a.length);
    if (a.indexOf("/") != -1) a = a.substring(0, a.indexOf("/"));
    if (a.indexOf("www.") != -1) a = a.substring(4, a.length);
    return a
}
function isInArray(a, b) {
    for (var c in b) {
        if (b[c] == a) {
            return true
        }
    }
    return false
}
function buildTypedUrlList(a) {
    if (localStorage["periodMostVisitedSites"] == "month") var b = 1e3 * 60 * 60 * 24 * 7 * 31;
    else if (localStorage["periodMostVisitedSites"] == "day") var b = 1e3 * 60 * 60 * 24;
    else var b = 1e3 * 60 * 60 * 24 * 7;
    var c = (new Date).getTime() - b;
    var d = 0;
    chrome.history.search({
        text: "",
        startTime: c
    }, function (a) {
        for (var b = 0; b < a.length; ++b) {
            var c = a[b].url;
            var e = function (a) {
                    return function (b) {
                        f(a, b)
                    }
                };
            chrome.history.getVisits({
                url: c
            }, e(c));
            d++
        }
        if (!d) {
            g()
        }
    });
    var e = {};
    var f = function (a, b) {
            for (var c = 0, f = b.length; c < f; ++c) {
                if (!e[a]) {
                    e[a] = 0
                }
                e[a]++
            }
            if (!--d) {
                g()
            }
        };
    var g = function () {
            urlArray = [];
            for (var b in e) {
                urlArray.push(b)
            }
            urlArray.sort(function (a, b) {
                return e[b] - e[a]
            });
            var c = false;
            var d = 0;
            var f = new Array;
            var g = new Array;
            while (c == false) {
                if (!isInArray(getDomain(urlArray[d]), f)) {
                    g.push(urlArray[d]);
                    f.push(getDomain(urlArray[d]))
                }
                c = g.length > 9;
                d++
            }
            buildPopupDom(a, g)
        }
}
function buildPopupDom(a, b) {
    if (b != null) {
        if (localStorage["mvsDisplayStyle"] == "whiteBar") {
            $("#mvs-module .title").prepend(chrome.i18n.getMessage("mvsTitle"));
            for (var c = 0, d = b.length; c < d; ++c) $("#mvs-module #content").append('<a onClick="trackUsingMVS();" href="' + b[c] + '">' + getFavicon(b[c]) + site_name(b[c]) + "</a>")
        } else if (localStorage["mvsDisplayStyle"] == "dropDownList") {
            for (var c = 0, d = b.length; c < d; ++c) $("#mvs-module ul").append('<li><a onClick="trackUsingMVS();" ' + (inNewTab() ? 'target="_blank"' : "") + ' href="' + b[c] + '">' + getFavicon(b[c]) + formatTitle(site_name(b[c]), 25) + "</a></li>")
        }
    } else {
        if (localStorage["mvsDisplayStyle"] == "whiteBar") {
            $("#mvs-module .title").prepend(chrome.i18n.getMessage("mvsTitle"));
            $("#mvs-module #content").append('<div class="noLinks">' + chrome.i18n.getMessage("mvsNoLinks") + "</div>")
        } else if (localStorage["mvsDisplayStyle"] == "dropDownList") $("#mvs-module ul").append('<li class="noLinks">' + chrome.i18n.getMessage("mvsNoLinks") + "</div>")
    }
}
function onAnchorClick(a) {
    chrome.tabs.create({
        selected: true,
        url: a.srcElement.href
    });
    return false
}