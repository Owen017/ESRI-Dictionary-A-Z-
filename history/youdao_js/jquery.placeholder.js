! function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof module && module.exports ? require("jquery") : jQuery) }(function(e) {
    function t(t) { var a = {},
            l = /^jQuery\d+$/; return e.each(t.attributes, function(e, t) { t.specified && !l.test(t.name) && (a[t.name] = t.value) }), a }

    function a(t, a) { var l = this,
            o = e(this); if (l.value === o.attr(c ? "placeholder-x" : "placeholder") && o.hasClass(h.customClass))
            if (l.value = "", o.removeClass(h.customClass), o.data("placeholder-password")) { if (o = o.hide().nextAll('input[type="password"]:first').show().attr("id", o.removeAttr("id").data("placeholder-id")), t === !0) return o[0].value = a, a;
                o.focus() } else l == r() && l.select() }

    function l(l) { var r, o = this,
            d = e(this),
            s = o.id; if (!l || "blur" !== l.type || !d.hasClass(h.customClass))
            if ("" === o.value) { if ("password" === o.type) { if (!d.data("placeholder-textinput")) { try { r = d.clone().prop({ type: "text" }) } catch (n) { r = e("<input>").attr(e.extend(t(this), { type: "text" })) } r.removeAttr("name").data({ "placeholder-enabled": !0, "placeholder-password": d, "placeholder-id": s }).bind("focus.placeholder", a), d.data({ "placeholder-textinput": r, "placeholder-id": s }).before(r) } o.value = "", d = d.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", d.data("placeholder-id")).show() } else { var i = d.data("placeholder-password");
                    i && (i[0].value = "", d.attr("id", d.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id")) } d.addClass(h.customClass), d[0].value = d.attr(c ? "placeholder-x" : "placeholder") } else d.removeClass(h.customClass) }

    function r() { try { return document.activeElement } catch (e) {} } var o, d, c = !1,
        s = "[object OperaMini]" === Object.prototype.toString.call(window.operamini),
        n = "placeholder" in document.createElement("input") && !s && !c,
        i = "placeholder" in document.createElement("textarea") && !s && !c,
        u = e.valHooks,
        p = e.propHooks,
        h = {};
    n && i ? (d = e.fn.placeholder = function() { return this }, d.input = !0, d.textarea = !0) : (d = e.fn.placeholder = function(t) { var r = { customClass: "placeholder" }; return h = e.extend({}, r, t), this.filter((n ? "textarea" : ":input") + "[" + (c ? "placeholder-x" : "placeholder") + "]").not("." + h.customClass).not(":radio, :checkbox, [type=hidden]").bind({ "focus.placeholder": a, "blur.placeholder": l }).data("placeholder-enabled", !0).trigger("blur.placeholder") }, d.input = n, d.textarea = i, o = { get: function(t) { var a = e(t),
                l = a.data("placeholder-password"); return l ? l[0].value : a.data("placeholder-enabled") && a.hasClass(h.customClass) ? "" : t.value }, set: function(t, o) { var d, c, s = e(t); return "" !== o && (d = s.data("placeholder-textinput"), c = s.data("placeholder-password"), d ? (a.call(d[0], !0, o) || (t.value = o), d[0].value = o) : c && (a.call(t, !0, o) || (c[0].value = o), t.value = o)), s.data("placeholder-enabled") ? ("" === o ? (t.value = o, t != r() && l.call(t)) : (s.hasClass(h.customClass) && a.call(t), t.value = o), s) : (t.value = o, s) } }, n || (u.input = o, p.value = o), i || (u.textarea = o, p.value = o), e(function() { e(document).delegate("form", "submit.placeholder", function() { var t = e("." + h.customClass, this).each(function() { a.call(this, !0, "") });
            setTimeout(function() { t.each(l) }, 10) }) }), e(window).bind("beforeunload.placeholder", function() { var t = !0; try { "javascript:void(0)" === document.activeElement.toString() && (t = !1) } catch (a) {} t && e("." + h.customClass).each(function() { this.value = "" }) })) });