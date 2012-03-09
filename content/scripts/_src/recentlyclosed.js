function deleteObsoleteTabs() {
    chrome.windows.getAll(getInfo, function (a) {
        alert(a.length);
        var b = new Array;
        for (var c = 0; c < a.length; c++) {
            b.unshift(a[c].id);
            alert(a[c].id)
        }
        var d = localStorage["tabs"] != undefined ? JSON.parse(localStorage["tabs"]) : new Array;
        for (var c = 0; c < d.length; c++) if (!isInArray(b, d[c].id)) d.splice(c, 1)
    })
}
function addRecentlyClosed(a, b) {
    var c = localStorage["tabs"] != undefined ? JSON.parse(localStorage["tabs"]) : new Array;
    var d;
    var e;
    for (var f = 0; f < c.length; f++) {
        if (c[f].id == b && c[f].windowId == a) {
            d = c[f].url;
            e = c[f].title;
            c.splice(f, 1);
            break
        }
    }
    localStorage["tabs"] = JSON.stringify(c);
    if (d.indexOf("chrome://") == -1 && d.indexOf("chrome-extension://") == -1 && d.indexOf("chrome-devtools://") == -1) {
        var g = localStorage["closedTabs"] != undefined ? JSON.parse(localStorage["closedTabs"]) : new Array;
        if (g.length >= 10) g.pop();
        g.unshift({
            title: e,
            url: d
        });
        localStorage["closedTabs"] = JSON.stringify(g)
    }
}
function updateTab(a, b, c, d) {
    var e = localStorage["tabs"] != undefined ? JSON.parse(localStorage["tabs"]) : new Array;
    for (var f = 0; f < e.length; f++) {
        if (e[f].id == b && e[f].windowId == a) {
            e[f].url = d;
            e[f].title = c;
            break
        }
    }
    localStorage["tabs"] = JSON.stringify(e)
}
function newTab(a, b, c, d) {
    var e = localStorage["tabs"] != undefined ? JSON.parse(localStorage["tabs"]) : new Array;
    e.unshift({
        windowId: a,
        id: b,
        title: c,
        url: d
    });
    localStorage["tabs"] = JSON.stringify(e)
}
function getRecentlyClosedTabs() {
    var a = localStorage["closedTabs"] != undefined ? JSON.parse(localStorage["closedTabs"]) : new Array;
    if (a.length > 0) {
        for (var b = 0; b < a.length; b++) $("#rct-module ul").append("<li><a" + (inNewTab() ? ' target="_blank"' : "") + ' href="' + a[b].url + '">' + getFavicon(a[b].url) + formatTitle(a[b].title, 23) + "</a></li>")
    }
}