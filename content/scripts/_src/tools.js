function formatTitle(a, b) {
    if (a == undefined) return "";
    if (a.length > b) a = a.substring(0, b - 1) + "...";
    if (a.charAt(0) == " ") a = a.substring(1);
    return a
}
function site_name(a) {
    if (a.indexOf("http://") != -1) a = a.substring(7, a.length);
    if (a.indexOf("https://") != -1) a = a.substring(8, a.length);
    if (a.indexOf("/") != -1) a = a.substring(0, a.indexOf("/"));
    if (a.indexOf("www.") != -1) a = a.substring(4, a.length);
    a = a.substring(0, a.lastIndexOf("."));
    a = a.substring(0, 1).toUpperCase() + a.substring(1, a.length);
    P = a.indexOf(".");
    a = a.substring(0, P) + " " + a.substring(P + 1, P + 2).toUpperCase() + a.substring(P + 2, a.length);
    return a
}
function getFavicon(a) {
    if (localStorage["faviconDisplayed"] == 1 || localStorage["faviconDisplayed"] == undefined) {
        if (a == undefined) return '<img width="16" height="16" class="favicon" src="Images/Folder.png"/>';
        return '<img width="16" height="16" class="favicon" src ="chrome://favicon/' + a + '"/>'
    } else return ""
}
function getNbLink() {
    return parseInt(localStorage["nbLink"])
}
function getNbFolder() {
    return parseInt(localStorage["nbFolder"])
}
function calcNbFolder() {
    var a = function (a) {
            var b = 0;
            var c = 0;
            for (var d = 0; d != a.length; d++) {
                if (a[d].url != undefined) {
                    c++
                } else {
                    b++
                }
            }
            localStorage["nbFolder"] = b;
            localStorage["nbLink"] = c
        };
    chrome.bookmarks.getChildren("1", a)
}
function replace(a, b, c) {
    if ($.isArray(b)) {
        if ($.isArray(c)) {
            var d = 0;
            if (b.length <= c.length) d = b.length;
            else d = c.length;
            for (var e = 0; e < d; e++) {
                a = a.replace(b[e], c[e])
            }
        } else {
            for (var e = 0; e < b.length; e++) {
                a = a.replace(b[e], c)
            }
        }
        return a
    } else return a.replace(b, c)
}