function closeHandWrite() { document.getElementById("handWrite").style.display = "none", document.getElementById("hnwBtn").className = "hand-write" }

function insertQuery(t) { document.getElementById("translateContent").value += t }

function vistaCallback(t) { pullContent.setVistaContentBuffer(t[pullContent.getCurrentDate()]), pullContent.isFirstTime() ? pullContent.insertVistaContent() : pullContent.insertVistaContent(6) }

function discountCallback(t) { pullContent.setDiscountContentBuffer(t.data), pullContent.isFirstTime() ? pullContent.insertDiscountContent() : pullContent.insertDiscountContent(6) }

function courseIELTSCallback(t) { pullContent.setCourseContentBuffer(t.result, "IELTS"), pullContent.isFirstTime() ? pullContent.insertCourseContent(6, "IELTS") : pullContent.insertCourseContent(6, "IELTS") }

function courseCETCallback(t) { pullContent.setCourseContentBuffer(t.result, "CET"), pullContent.isFirstTimeCourse() ? pullContent.insertCourseContent(6, "CET") : pullContent.insertCourseContent(6, "CET") }

function courseKaoyanSCallback(t) { pullContent.setCourseContentBuffer(t.result, "Kaoyan"), pullContent.isFirstTimeCourse() ? pullContent.insertCourseContent(6, "Kaoyan") : pullContent.insertCourseContent(6, "Kaoyan") }

function courseGRECallback(t) { pullContent.setCourseContentBuffer(t.result, "GRE"), pullContent.isFirstTimeCourse() ? pullContent.insertCourseContent(6, "GRE") : pullContent.insertCourseContent(6) }

function coursePracticalCallback(t) { pullContent.setCourseContentBuffer(t.result, "Practical"), pullContent.isFirstTimeCourse() ? pullContent.insertCourseContent(6, "Practical") : pullContent.insertCourseContent(6) }

function sideCourseCallback(t) { pullContent.insertSideCourseContent(t.data) }! function() { youdaos && youdaos.events.listen(window, "load", function() { form = new youdaos.Autocomplete("translateContent", "form", "", "", "", "", "translateType"), form.setSearchServer("./w/"), form.setSugServer("https://dsuggest.ydstatic.com"), form.submitForm("form"), form.setKeyFrom("dict2.index"), form.setOffset(-10, 15.5) }) }(),
function() { var t = $("#form"),
        e = $("#translateContent"),
        n = $("#translateType");
    t.submit(function(t) { return t.preventDefault(), "" == e.val() ? void location.reload() : void(window.location = "/w/" + n.val() + "/" + encodeURIComponent(e.val()) + "/#keyfrom=dict2.index") }) }(),
function() { var t = $("#nav ul li.scholar"),
        e = new Date;
    e.setFullYear(e.getFullYear() + 1), t.click(function(n) { n.preventDefault(), document.cookie = "firstTime=true; expires=" + e.toGMTString(), window.location = t.find("a").attr("href") }); var n = document.cookie.split("; "),
        o = {}; for (var i in n) o[n[i].split("=")[0]] = n[i].split("=")[1]; "true" === o.firstTime && t.removeClass("scholar") }(),
function() { var t = $("#more"),
        e = $("#more div:first-child"),
        n = t.find(".menu"),
        o = t.find(".menu li");
    t.hover(function() { n.show(), _rlog.push(["_trackEvent", "tab.more"]), e.addClass("active"), o.show() }, function() { n.hide(), e.removeClass("active") }) }(),
function() { var t = $("#selectType"),
        e = $("#typeList"),
        n = $("#type"),
        o = $("#translateType"),
        i = t.find(".arrow"),
        a = { "中英": "eng", "中法": "fr", "中韩": "ko", "中日": "jap", "中葡": "pt", "中德": "de", "中西": "es", "中俄": "ru" };
    o.val("eng"), t.click(function(t) { if ("LI" != t.target.tagName) e.toggle(), i.toggleClass("arrow-up");
        else { var s = $(t.target);
            n.text(s.html()), o.val(a[s.html()]), e.hide(), i.removeClass("arrow-up") } t.stopPropagation() }), $(document).click(function(t) { e.hide(), i.removeClass("arrow-up") }) }(),
function() {
    function t(n) { var r = a.scrollTop();
        r > s && (o.addClass("settop"), i.fadeIn(), a.scroll(e), a.unbind("scroll", t)) }

    function e(n) { var r = a.scrollTop();
        r < s && (o.removeClass("settop"), i.hide(), a.scroll(t), a.unbind("scroll", e)) } var n = $("#search"),
        o = n.find(".wrap"),
        i = n.find(".logo"),
        a = $(window),
        s = n.offset().top - 20;
    n.css("height", n.height() + "px"), a.scroll(t) }(),
function() {
    function t(n) { var s = a.scrollTop();
        s > i && (o.addClass("attach"), a.scroll(e), a.unbind("scroll", t)) }

    function e(n) { var s = a.scrollTop();
        s < i && (o.removeClass("attach"), a.scroll(t), a.unbind("scroll", e)) } var n = $("#doc2 .fr"),
        o = $("#doc2 .fr .popout"),
        i = n.offset().top - 135,
        a = $(window);
    a.scroll(t) }(),
function() { var t = $("#backToTop");
    $(window).scroll(function() { var e = $(window).scrollTop();
        e > 700 ? t.show() : t.hide() }), t.click(function() { $(window).scrollTop(0) }) }(),
function() {
    function t(n) { var s = $(window).scrollTop(),
            r = s - a;
        r < 0 && s > i && (o.addClass("attach"), o.slideDown(), $(window).scroll(e), $(window).unbind("scroll", t)), a = s }

    function e(n) { var s = $(window).scrollTop(),
            r = s - a;
        r > 0 && s > i ? (o.removeClass("attach"), $(window).scroll(t), $(window).unbind("scroll", e)) : r < 0 && s < i && (o.removeClass("attach"), o.show(), $(window).scroll(t), $(window).unbind("scroll", e)), a = s } var n = $("#doc2 .fl .channel"),
        o = $("#doc2 .fl .popout"),
        i = n.offset().top - 80,
        a = 0;
    n.height(o.height()), $(window).scroll(t) }(), $("input, textarea").placeholder(), $("#translateContent").focus(), $.fn.extend({ hasMenu: function(t, e, n, o) { var i = $(t),
                a = $(e),
                s = this; return $("body").click(function() { a.hide() }), this.click(function() { var e = $(this).offset(); return a.each(function() { "#" + $(this).attr("id") != t && $(this).hide() }), $(this).blur(), i.css({ left: e.left + n, top: e.top + o }).toggle(), !1 }),
                function(e) { $(window).unbind("resize.resetPos" + t), $(window).on("resize.resetPos" + t, function() { if ($(t).size() > 0 && e) { var o = e.offset();
                            o && $(t).css({ left: o.left + n }) } }) }(s), this } }),
    function() { $(function() { t() }); var t = function() { $("body").click(function() { $("#hnwBtn").removeClass("hnw_btn_on") }), $(".mn").click(function() { $("#hnwBtn").removeClass("hnw_btn_on") }), $("#hnwBtn").click(function() { $(this).toggleClass("hnw_btn_on") }), $("#hnwBtn").hasMenu("#handWrite", ".pm", -8, 31), $(window).resize(function() { $("#handWrite").css("left", $("#hnwBtn").offset().left + -8) }) } }(),
    function() { var t = $(".ugc-link"); if (t.length > 0 && !t.hasClass("clicked")) { var e = new Date;
            e.setFullYear(e.getFullYear() + 1), t.find("a").click(function(n) { n.preventDefault(), document.cookie = "UgcFirstTime=true; expires=" + e.toGMTString(), window.location = t.find("a").attr("href") }); var n = document.cookie.split("; "),
                o = {}; for (var i in n) o[n[i].split("=")[0]] = n[i].split("=")[1]; "true" === o.UgcFirstTime && t.addClass("clicked") } }(), document.getElementById("wljb").setAttribute("href", "http://www.12377.cn/");
var tempPosition = -40;
window.setInterval(function() { var t = document.getElementById("wljb");
    t.style.cssText = "background-position: 0px " + tempPosition + "px", tempPosition == -40 ? t.setAttribute("href", "http://www.12377.cn/node_548470.htm") : tempPosition == -80 ? t.setAttribute("href", "http://gov.163.com/special/jiazhiguan/") : t.setAttribute("href", "http://www.12377.cn/"), tempPosition -= 40, tempPosition == -160 && (tempPosition = 0) }, 4e3);
var pullContent = window.pullContent || {};
pullContent.global = this, $(".popout iframe").eq(0).attr("src", location.protocol + "//c.youdao.com/www/banner.html"),
    function(t) { var e, n, o, a, s = $('<div class="news"><a href="" target="_blank"><img src="" alt=""></a><div class="news-detail"><h3><a href="" class="title" target="_blank"></a></h3><p class="summary"></p><div class="note1"><span class="icon_comment"></span><span class="comment"></span><span class="icon_like"></span><span class="like"></span></div><div class="note2"><span class="type"></span><span class="date"></span></div></div></div>'),
            r = $('<div class="course"><a href="" target="_blank"><img src="" alt=""><div class="time"></div></a><h3><a href="" target="_blank"></a></h3><div class="price"><span>￥</span></div><div class="name"></div></div>'),
            l = $('<div class="goods"><a href="" target="_blank"><img src="" alt=""></a><div class="goods-detail"><h3><a href="" target="_blank"><span></span></a></h3><p></p></div></div>'),
            c = $("#footer"),
            u = $("#vista"),
            d = $("#course"),
            p = $("#discount"),
            f = $("#doc2 .fl .popout span"),
            h = $("#doc2 .hint"),
            C = $("#doc2 .icon_arrow"),
            m = "insertVistaContent",
            w = !0,
            v = !0,
            g = "CET",
            k = {},
            b = { deal: "http://www.huihui.cn/deals/", shared_article: "http://www.huihui.cn/share/", goods_list: "http://www.huihui.cn/qingdan/" },
            y = $("#doc2 .fl .channel"),
            x = { insertVistaContent: !0, insertCourseContent: !0, insertDiscountContent: !0 },
            T = location.protocol + "//dict.youdao.com/infoline/web?mode=publish&client=web&keyfrom=dict2.index&startDate=",
            D = "",
            _ = "",
            E = new Date;
        t.getCurrentDate = function() { return D }, t.isFirstTime = function() { return w }, t.isFirstTimeCourse = function() { return v }, t.createVistaDOMElement = function(t) { var e = s.clone(),
                n = e.find("img"),
                o = e.find(".like"),
                i = e.find(".type"),
                a = e.find(".date"),
                r = "";
            r = t.url.indexOf("?") == -1 ? t.url + "?keyfrom=dict2.index" : t.url + "&keyfrom=dict2.index", e.find("a").attr("href", r); var l = t["image-mobile2"];
            l.indexOf("http") > -1 && l.indexOf("https") == -1 && (l = l.replace(/http/i, "https")), n.attr("src", l), e.find("h3 a").text(t.title), e.find("p").text(t.summary), e.find(".comment").text(t.comment), o.text(t.like), i.text(t.type); var c = t.time,
                u = parseInt(c / 1e6 % 100),
                d = parseInt(c / 1e4 % 100); return a.text(u + "-" + d), e }, t.createCourseDOMElement = function(t) { var e = r.clone(),
                n = e.find("img");
            e.find("a").attr("href", "https://ke.youdao.com/course/detail/" + t.id + "?vendor=youdaoshouye_cof_bibeikecheng"), n.attr("src", t.image), n.attr("alt", t.title), e.find(".time").text(t.time), e.find("h3 a").text(t.title), 0 === t.price ? (e.find(".price").addClass("free"), e.find(".price").text("免费")) : e.find(".price").append(t.price); var o = []; for (i in t.teacher) o.push(t.teacher[i].name); return e.find(".name").text(o.join(",")), e }, t.createDiscountDOMElement = function(t, e, n, o, i, a) { var s = l.clone(),
                r = s.find("img"),
                c = b[i] + a,
                u = "";
            u = c.indexOf("?") == -1 ? c + "?keyfrom=dict2.index" : c + "&keyfrom=dict2.index", s.find("a").attr("href", u); var d = t; return d.indexOf("http") > -1 && d.indexOf("https") == -1 && (d = d.replace(/http/i, "https")), r.attr("src", d), r.attr("alt", e + n), s.find(".goods-detail h3 a").prepend(e.replace(/<\/?[^>]*>/g, "")), s.find(".goods-detail h3 span").text(n), s.find(".goods-detail p").prepend(String.prototype.replace.call(String.prototype.slice.call(o, 0, 60), /<\/?[^>]*>/g, "") + "..."), s }, t.calculateDate = function(t) { var e = t || 0;
            E.setDate(E.getDate() + e); var n = E.getFullYear(),
                o = E.getMonth() + 1;
            o < 10 && (o = "0" + o); var i = E.getDate();
            i < 10 && (i = "0" + i), D = n + "-" + o + "-" + i }, t.insertVistaContent = function(e) { if ("insertVistaContent" === m && (h.text("加载中..."), C.show()), o) { var n, i = document.createDocumentFragment(),
                    a = {},
                    s = e || 2; for (n = 0; n < s; n++) { do a = o.shift(); while (a && "adv" === a.style.slice(0, 3)); if (!a) return t.calculateDate(-1), void t.excuteCall(T + D + "&callback=vistaCallback");
                    $(i).append(t.createVistaDOMElement(a)) } u.append(i), "insertVistaContent" === m && (h.text("下滑加载更多"), C.show()), x.insertVistaContent = !0 } }, t.insertCourseContent = function(e, n) { "insertCourseContent" === m && (h.text("加载中..."), C.show()); var o, i = document.createDocumentFragment(),
                a = {}; for (o = 0; o < e; o++) { if (a = k[n].shift(), !a) return $("#" + n).append(i), h.text("已到底"), C.hide(), void(x.insertCourseContent = !0);
                $(i).append(t.createCourseDOMElement(a)) } $("#" + n).append(i), "insertCourseContent" === m && (h.text("下滑加载更多"), C.show()), x.insertCourseContent = !0 }, t.insertDiscountContent = function(e) { if ("insertDiscountContent" === m && (h.text("加载中..."), C.show()), a) { var n, o = document.createDocumentFragment(),
                    i = {},
                    s = e || 2; for (n = 0; n < s; n++) { if (i = a.shift(), !i) return void t.excuteCall(location.protocol + "//www.huihui.cn/deals/channel.json?callback=discountCallback&max_time=" + Date.parse(_));
                    i.pub_time && (_ = i.pub_time), $(o).append(t.createDiscountDOMElement(i.image_url, i.title, i.sub_title, i.comment, i.channel, i.content_id)) } p.append(o), "insertDiscountContent" === m && (h.text("下滑加载更多"), C.show()), x.insertDiscountContent = !0 } }, t.excuteCall = function(t) { var e = $("<script type='text/javascript' src='" + t + "' charset='utf-8'></script>");
            $("#callback").append(e[0]) }, t.scrollhandler = function(e) { var n = $(window);
            x[m] && $(document).height() - n.height() - n.scrollTop() < 200 && (x[m] = !1, t[m](6, g)) }, t.wheelhandler = function(e) { if (e.deltaY > 0) return void(c.hasClass("set-bottom") && c.removeClass("set-bottom")); if (e.deltaY || 40 == e.which || 34 == e.which) return c.addClass("set-bottom"), w ? (w = !1, $("#course .cate").removeClass("start"), $("#discount").removeClass("start"), $(window).scroll(t.scrollhandler), x.insertVistaContent = !1, t.insertVistaContent(6, g), x.insertCourseContent = !1, t.insertCourseContent(6, g), x.insertDiscountContent = !1, void t.insertDiscountContent(6, g)) : void(x[m] && $(window).height() + $(window).scrollTop() == $(document).height() && (x[m] = !1, t[m](6, g))) }, t.setVistaContentBuffer = function(t) { o = t }, t.setDiscountContentBuffer = function(t) { a = t }, t.setCourseContentBuffer = function(t, e) { k[e] = t }, $("#doc2 .fl .container span:first-child").click(function(t) { var e = y.offset().top - 90,
                n = $(document).scrollTop();
            e = Math.min(e, n), u.show(), d.hide(), p.hide(), f.removeClass("active"), $(t.target).addClass("active"), m = "insertVistaContent", $(window).scrollTop(e), h.text("下滑加载更多"), C.show(), _rlog.push(["_trackEvent", "tab.vista"]) }), $("#doc2 .fl .container span:nth-child(2)").click(function(e) { var n = y.offset().top - 90,
                o = $(document).scrollTop();
            n = Math.min(n, o), u.hide(), d.show(), p.hide(), f.removeClass("active"), $(e.target).addClass("active"), m = "insertCourseContent", $(window).scrollTop(n), h.text("下滑加载更多"), C.show(), v && (v = !1, t.insertCourseContent(6, "Kaoyan"), t.insertCourseContent(6, "CET"), t.insertCourseContent(6, "Practical")), _rlog.push(["_trackEvent", "tab.course"]) }), $("#doc2 .fl .container span:last-child").click(function(t) { var e = y.offset().top - 90,
                n = $(document).scrollTop();
            e = Math.min(e, n), u.hide(), d.hide(), p.show(), f.removeClass("active"), $(t.target).addClass("active"), m = "insertDiscountContent", $(window).scrollTop(e), h.text("下滑加载更多"), C.show(), _rlog.push(["_trackEvent", "tab.huihui"]) }), $("#course .category").click(function(t) { t.stopPropagation(); var e = ["CET", "Kaoyan", "Practical"],
                n = $("#course .category span").index(t.target);
            n != -1 && ($("#course .category span").removeClass("active"), $(t.target).addClass("active"), $("#course .cate").hide(), $("#" + e[n]).show(), g = e[n]), h.text("下滑加载更多"), C.show(), _rlog.push(["_trackEvent", "tab.course." + e[n]]) }), t.calculateDate(), t.excuteCall(T + D + "&callback=vistaCallback"), t.excuteCall(location.protocol + "//www.huihui.cn/deals/channel.json?callback=discountCallback"), t.excuteCall(location.protocol + "//ke.youdao.com/api/course/list/1/1.jsonp?callback=courseCETCallback"), t.excuteCall(location.protocol + "//ke.youdao.com/api/course/list/7/1.jsonp?callback=courseKaoyanSCallback"), t.excuteCall(location.protocol + "//ke.youdao.com/api/course/list/3/1.jsonp?callback=coursePracticalCallback"), $(window).mousewheel(t.wheelhandler), $(window).keydown(t.wheelhandler), $(window).bind("touchstart", function(t) { e = t.originalEvent.changedTouches[0].clientY }), $(window).bind("touchmove", function(t) { if (n = t.originalEvent.changedTouches[0].clientY, n < e - 100) { var o = $.Event("keydown");
                o.which = 40, $("input").trigger(o) } }) }(pullContent),
    function(t) { var e = $('<div class="commodity"><a href="" target="_blank"><img src="" alt=""></a><div class="commodity-detail"><a target="_blank" href=""><h3></h3></a><p class="userNum"></p><p class="price"><span>￥</span></p></div></div>'),
            n = $("#doc2 .fr .bd");
        document.createDocumentFragment();
        t.createSideCourseDOMElement = function(t) { var n = e.clone(),
                o = n.find("img"); return "course" === t.type ? (n.find("a").attr("href", "https://ke.youdao.com/course/detail/" + t.courseId + "?vendor=youdaoshouye_cof_youbianlan"), o.attr("src", t.courseImgUrl), o.attr("alt", t.courseTitle), n.find("h3").text(t.courseTitle), t.hideRegNum || n.find(".userNum").text("已报名：" + t.userNum + "人"), n.find(".price").append(t.courseSalePrice)) : "tuiguang" === t.type && (n.find("a").attr("href", t.link.split("?")[0] + "?vendor=youdaoshouye_cof_youbianlan"), o.attr("src", t.img), o.attr("alt", t.title), n.find("h3").text(t.title), n.find(".userNum").text(""), n.find(".price").text("")), n }, t.insertSideCourseContent = function(e) { var o, i = document.createDocumentFragment(),
                a = {}; for (o = 0; o < 3; o++) a = e.shift(), a && $(i).append(t.createSideCourseDOMElement(a));
            n.append(i) }, t.excuteCall(location.protocol + "//ke.youdao.com/api/course/recommend.jsonp?type=youdaoweb&callback=sideCourseCallback") }(pullContent);