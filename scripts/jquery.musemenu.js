(function (c) { "function" === typeof define && define.amd && define.amd.jQuery ? define(["jquery", "museutils"], c) : c(jQuery) })(function (c) {
    c.fn.museMenu = function () {
        return this.each(function () {
            var b = this.id, d = c(this), a = d.closest(".breakpoint"), f = "absolute", h, g, j, l, k, i; if (!d.data("initialized")) {
                d.data("initialized", !0); var m = function (a) { return a.hasClass("scroll_effect") === !0 }, n = function () {
                    if (d.css("position") == "fixed") {
                        f = "fixed"; i = d; var a = Muse.Utils.getStyleSheetRulesById(Muse.Utils.getPageStyleSheets(), b);
                        h = a ? Muse.Utils.getRuleProperty(a, "top") : d.css("top"); g = a ? Muse.Utils.getRuleProperty(a, "left") : d.css("left"); j = a ? Muse.Utils.getRuleProperty(a, "right") : d.css("right"); l = a ? Muse.Utils.getRuleProperty(a, "bottom") : d.css("bottom"); k = parseInt(d.css("margin-left"))
                    } else for (a = d.parent(); !a.is(document) && a.length > 0 && a.attr("id") != "page";) {
                        if (a.css("position") == "fixed") {
                            f = "fixed"; i = a; var c = a.offset(), m = d.offset(), n = Muse.Utils.getStyleSheetRulesById(Muse.Utils.getPageStyleSheets(), a.attr("id")), o = n ? Muse.Utils.getRuleProperty(n,
                                "top") : a.css("top"), p = n ? Muse.Utils.getRuleProperty(n, "left") : a.css("left"), q = n ? Muse.Utils.getRuleProperty(n, "right") : a.css("right"), n = n ? Muse.Utils.getRuleProperty(n, "bottom") : a.css("bottom"); h = o && o != "auto" ? parseInt(o) + (m.top - c.top) : o; g = p && p != "auto" && p.indexOf("%") == -1 ? parseInt(p) + (m.left - c.left) : p; j = q && q != "auto" && q.indexOf("%") == -1 ? parseInt(q) + (c.left + a.width()) - (m.left + d.width()) : q; l = n && n != "auto" ? parseInt(n) + (c.top + a.height()) - (m.top + d.height()) : n; k = parseInt(a.css("margin-left")) + (p && p.indexOf("%") !=
                                    -1 ? m.left - c.left : 0); break
                        } a = a.parent()
                    }
                }, q = function (b, d) { a.is(b) && t.each(function () { var a = c(this).data("offsetContainerRaw"); a && (d.swapPlaceholderNodesRecursively(a), d.activateIDs(a)) }) }; c("body").on("muse_bp_activate", function (a, b, c, d) { q(c, d); n() }); n(); var p = c(), o = !1, r = d.find(".MenuItemContainer"), t = d.find(".MenuItem"), w = d.find(".SubMenu").add(t), x; w.on("mouseover", function () { o = !0 }); w.on("mouseleave", function () {
                    o = !1; setTimeout(function () {
                        o === !1 && (r.each(function () { c(this).data("hideSubmenu")() }),
                            p = c())
                    }, 300)
                }); r.on("mouseleave", function (a) { var b = c(a.target), d = b.closest(".SubMenu"); x && clearTimeout(x); d.length > 0 && (x = setTimeout(function () { d.find(".MenuItemContainer").each(function () { c(this).data("hideSubmenu")() }); p = b.closest(".MenuItemContainer").data("$parentMenuItemContainer") }, 300)) }); r.on("mouseenter", function () { clearTimeout(x) }); t.each(function () {
                    var a = c(this), b = a.siblings(".SubMenu"), n = a.closest(".MenuItemContainer"), o = n.parentsUntil(".MenuBar").filter(".MenuItemContainer").length ===
                        0, q; if (o && b.length > 0) a.data("offsetContainerRaw", c("<div style='position:" + f + "' class='MenuBar popup_element'></div>").hide().appendTo("body")), b.show(), q = b.position().top, b.hide(); var t = function (a) { a = c(a.target); c(".MenuItem", a.closest(".MenuItemContainer")).length > 1 || r.each(function () { c(this).data("hideSubmenu")() }) }; n.data("$parentMenuItemContainer", n.parent().closest(".MenuItemContainer")).data("showSubmenuOnly", function () {
                            if (o && b.length > 0) {
                                var p = a.data("offsetContainer"), p = p || a.data("offsetContainerRaw");
                                if (!m(p)) if (f != "fixed") { var r = n.offset(); p.css({ left: r.left, top: r.top, width: a.width() }) } else {
                                    var r = n.position(), D = 0, w = 0; j && j != "auto" && (D = d.outerWidth() - r.left - a.width()); l && l != "auto" && (w = q); k = parseInt(i.css("margin-left")); if (i != d) { var x = Muse.Utils.getStyleSheetRulesById(Muse.Utils.getPageStyleSheets(), i.attr("id")); (x = x ? Muse.Utils.getRuleProperty(x, "left") : i.css("left")) && x.indexOf("%") != -1 && (k += d.offset().left - i.offset().left) } p.css({
                                        left: g, top: h, right: j, bottom: l, marginLeft: k + r.left, marginRight: D,
                                        marginTop: r.top, marginBottom: w, width: a.width()
                                    })
                                } p.append(b).show(); c(".MenuItem", p).on("click", t); a.data("offsetContainer", p); i && m(i) && p && !m(p) && p.cloneScrollEffectsFrom(i)
                            } b.show(); b.find(".SubMenu").hide()
                        }).data("hideSubmenu", function () { var d = a.data("offsetContainer"); d && m(d) && d.clearScrollEffects(); b.hide(); d && c(".MenuItem", d).off("click", t) }).data("isDescendentOf", function (a) { for (var b = n.data("$parentMenuItemContainer"); b.length > 0;) { if (a.index(b) >= 0) return !0; b = b.data("$parentMenuItemContainer") } return !1 });
                    var D = function () { var a = p; a.length == 0 ? n.data("showSubmenuOnly")() : n.data("$parentMenuItemContainer").index(a) >= 0 ? n.data("showSubmenuOnly")() : n.siblings().index(a) >= 0 ? (a.data("hideSubmenu")(), n.data("showSubmenuOnly")()) : a.data("isDescendentOf")(n) ? n.data("showSubmenuOnly")() : a.data("isDescendentOf")(n.siblings(".MenuItemContainer")) ? (n.siblings(".MenuItemContainer").each(function () { c(this).data("hideSubmenu")() }), n.data("showSubmenuOnly")()) : a.get(0) == n.get(0) && n.data("showSubmenuOnly")(); p = n }, w = null;
                    a.on("mouseenter", function () { a.data("mouseEntered", !0); w = setTimeout(function () { D() }, 200); a.one("mouseleave", function () { clearTimeout(w); a.data("mouseEntered", !1) }) }); b.length && (a.attr("aria-haspopup", !0), Muse.Browser.Features.Touch && (a.click(function () { return b.is(":visible") }), c(document.documentElement).on(Muse.Browser.Features.Touch.End, Muse.Browser.Features.Touch.Listener(function (d) {
                        !b.is(":visible") && c(d.target).closest(n).length > 0 ? (d.stopPropagation(), Muse.Utils.redirectCancelled = !0, setTimeout(function () {
                            Muse.Utils.redirectCancelled =
                            !1
                        }, 16), a.data("mouseEntered") && setTimeout(function () { n.data("showSubmenuOnly")() }, 200)) : b.is(":visible") && c(d.target).closest(b).length == 0 && c(d.target).closest(n).length == 0 && n.data("hideSubmenu")()
                    }))))
                }); t.filter(".MuseMenuActive").each(function () { for (var a = c(this).closest(".MenuItemContainer").data("$parentMenuItemContainer"); a && a.length > 0;)a.children(".MenuItem").addClass("MuseMenuActive"), a = a.data("$parentMenuItemContainer") })
            }
        })
    }
});
; (function () { if (!("undefined" == typeof Muse || "undefined" == typeof Muse.assets)) { var c = function (a, b) { for (var c = 0, d = a.length; c < d; c++)if (a[c] == b) return c; return -1 }(Muse.assets.required, "jquery.musemenu.js"); if (-1 != c) { Muse.assets.required.splice(c, 1); for (var c = document.getElementsByTagName("meta"), b = 0, d = c.length; b < d; b++) { var a = c[b]; if ("generator" == a.getAttribute("name")) { "2018.1.1.386" != a.getAttribute("content") && Muse.assets.outOfDate.push("jquery.musemenu.js"); break } } } } })();
