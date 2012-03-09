function updateSEIconsAndLogoAnim() {
    $(".button").prepend('<span class="hover"></span>').each(function () {
        var a = $("span.hover", this).css("opacity", 0);
        $(this).hover(function () {
            a.stop().fadeTo(300, 1)
        }, function () {
            a.stop().fadeTo(300, 0)
        })
    });
    $(".button").click(function () {
        var a = $(this);
        $("#search_engine_logo img").animate({
            opacity: "0"
        }, 200, function () {
            $(this).attr("src", "Images/SearchEngines/" + localStorage["nameSearchEngine"] + ".png");
            $(this).animate({
                opacity: "1"
            }, 200)
        })
    });
    $(".hover").hover(function () {
        $(this).next("em").stop(true, true).animate({
            opacity: "show",
            top: "-45"
        }, 300)
    }, function () {
        $(this).next("em").stop(true, true).animate({
            opacity: "hide",
            top: "-35"
        }, "fast")
    })
}
$(document).ready(function () {
    $(document).bind("1", function () {
        console.log("engines");
        console.log($("#search-module .button_" + localStorage["EngineToLoad"]).position().top + 25);
        console.log($("#search-module .button_" + localStorage["EngineToLoad"]).position().left + 2);
        console.log($("#search-module .button_" + localStorage["EngineToLoad"]).css("top") + 25);
        console.log($("#search-module .button_" + localStorage["EngineToLoad"]).css("left") + 2)
    });
    $(document).bind("bookmarksloaded", function () {
        masonry();
        $("#options-module").animate({
            top: "-500px"
        }, 500);
        $("#options_button").animate({
            top: "8px"
        }, 500);
        $("#header-module").animate({
            opacity: 1
        }, 200);
        $("#search-module").animate({
            opacity: 1
        }, 200);
        $("#bookmarks-module").animate({
            opacity: 1
        }, 200);
        $("#applications-module").animate({
            opacity: 1
        }, 200);
        $("#mvs-module").animate({
            opacity: 1
        }, 200)
    });
    initOptions();
    displayEngines();
    initEngine();
    if (localStorage["mvsDisplayStyle"] == "whiteBar") buildTypedUrlList();
    bookmarks();
    displayApps();
    trackLaunchingBookolio();
    if (localStorage["EngineToLoad"] == undefined) {
        $("#search_engine_logo img").attr("src", "Images/SearchEngines/google.png")
    } else $("#search_engine_logo img").attr("src", "Images/SearchEngines/" + localStorage["EngineToLoad"] + ".png");
    $(".buttonSearch").prepend('<span class="hover"></span>').each(function () {
        var a = $("span.hover", this).css("opacity", 0);
        $(this).hover(function () {
            a.stop().fadeTo(300, 1)
        }, function () {
            a.stop().fadeTo(300, 0)
        })
    });
    var a = false;
    $("#options_button").click(function () {
        if (a == false) {
            trackOpeningOptions();
            $("#options-module, #options_button").animate({
                top: "+=500"
            }, 500);
            a = true
        } else {
            $("#options-module, #options_button").animate({
                top: "-=500"
            }, 500);
            a = false
        }
    });
    $("#options_save_button").click(function () {
        $("#options-module, #options_button").animate({
            top: "-=500"
        }, 500);
        a = false
    });
    $(".button").click(function () {
        $("#search_engine_logo img").animate({
            opacity: "0"
        }, 200, function () {
            $(this).attr("src", "Images/SearchEngines/" + localStorage["nameSearchEngine"] + ".png");
            $(this).animate({
                opacity: "1"
            }, 200)
        })
    });
    $("#bookmarks-module .cont li", this).live("mouseenter", function () {
        $(this).parents("ul").children(".indicator").stop().animate({
            top: $(this).position().top
        }, 200)
    });
    $(".showBookmarksModule").click(function () {
        if ($("#bookmarks-module").css("display") == "none") {
            $("#applications-module").animate({
                opacity: 0
            }, 200, function () {
                $("#applications-module").css({
                    display: "none"
                });
                $("#bookmarks-module").css({
                    display: "block"
                });
                $("#bookmarks-module").masonry("reload");
                $("#bookmarks-module").animate({
                    opacity: 1
                }, 200)
            })
        }
    });
    $(".showApplicationsModule").click(function () {
        if ($("#applications-module").css("display") == "none") {
            $("#bookmarks-module").animate({
                opacity: 0
            }, 200, function () {
                $("#applications-module").css({
                    display: "block"
                });
                $("#bookmarks-module").css({
                    display: "none"
                });
                $("#applications-module").animate({
                    opacity: 1
                }, 200)
            })
        }
    });
    var b = $("#rct-module");
    var c = false;
    var d = false;
    var e = false;
    $(".showHideRCTModule").click(function () {
        if (b.css("display") == "none") {
            if (e == false) {
                getRecentlyClosedTabs();
                e = true;
                $("#rct-module").css({
                    left: $(".showHideRCTModule").offset().left
                })
            }
            b.css({
                display: "block"
            });
            b.animate({
                opacity: 1,
                top: "45px"
            }, 250)
        } else {
            b.animate({
                opacity: 0,
                top: "35px"
            }, 250, function () {
                b.css({
                    display: "none"
                })
            })
        }
    }).bind("mouseleave", function () {
        d = true
    }).bind("mouseenter", function () {
        d = false
    });
    b.bind("mouseenter", function () {
        c = false
    }).bind("mouseleave", function () {
        c = true
    });
    if (localStorage["mvsDisplayStyle"] == "dropDownList") {
        var f = $("#mvs-module");
        var g = false;
        var h = false;
        var i = false;
        $(".showHideMVSModule").click(function () {
            if (f.css("display") == "none") {
                if (i == false) {
                    buildTypedUrlList();
                    i = true;
                    $("#mvs-module").css({
                        left: $(".showHideMVSModule").offset().left
                    })
                }
                f.css({
                    display: "block"
                });
                f.animate({
                    opacity: 1,
                    top: "45px"
                }, 250)
            } else {
                f.animate({
                    opacity: 0,
                    top: "35px"
                }, 250, function () {
                    f.css({
                        display: "none"
                    })
                })
            }
        }).bind("mouseleave", function () {
            h = true
        }).bind("mouseenter", function () {
            h = false
        });
        f.bind("mouseenter", function () {
            g = false
        }).bind("mouseleave", function () {
            g = true
        })
    }
    $(document).click(function () {
        if (b.css("display") == "block" && (c || d)) {
            b.animate({
                opacity: 0,
                top: "35px"
            }, 250, function () {
                b.css({
                    display: "none"
                });
                c = false
            })
        }
        if (localStorage["mvsDisplayStyle"] == "dropDownList" && f.css("display") == "block" && (g || h)) {
            f.animate({
                opacity: 0,
                top: "35px"
            }, 250, function () {
                f.css({
                    display: "none"
                });
                g = false
            })
        }
    })
})