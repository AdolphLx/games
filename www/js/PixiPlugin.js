/*!
 * VERSION: 0.1.2
 * DATE: 2017-06-29
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * PixiPlugin is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var a, b, c, d = /(\d|\.)+/g, e = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, f = {
        aqua: [0, 255, 255],
        lime: [0, 255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, 255],
        navy: [0, 0, 128],
        white: [255, 255, 255],
        fuchsia: [255, 0, 255],
        olive: [128, 128, 0],
        yellow: [255, 255, 0],
        orange: [255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [255, 0, 0],
        pink: [255, 192, 203],
        cyan: [0, 255, 255],
        transparent: [255, 255, 255, 0]
    }, g = function(a, b, c) {
        return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a,
        255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0
    }, h = function(a, b) {
        var c, h, i, j, k, l, m, n, o, p, q, r = "hsl" === b;
        if (a)
            if ("number" == typeof a)
                c = [a >> 16, a >> 8 & 255, 255 & a];
            else {
                if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)),
                f[a])
                    c = f[a];
                else if ("#" === a.charAt(0))
                    4 === a.length && (h = a.charAt(1),
                    i = a.charAt(2),
                    j = a.charAt(3),
                    a = "#" + h + h + i + i + j + j),
                    a = parseInt(a.substr(1), 16),
                    c = [a >> 16, a >> 8 & 255, 255 & a];
                else if ("hsl" === a.substr(0, 3))
                    if (c = q = a.match(d),
                    r) {
                        if (-1 !== a.indexOf("="))
                            return a.match(e)
                    } else
                        k = Number(c[0]) % 360 / 360,
                        l = Number(c[1]) / 100,
                        m = Number(c[2]) / 100,
                        i = .5 >= m ? m * (l + 1) : m + l - m * l,
                        h = 2 * m - i,
                        c.length > 3 && (c[3] = Number(a[3])),
                        c[0] = g(k + 1 / 3, h, i),
                        c[1] = g(k, h, i),
                        c[2] = g(k - 1 / 3, h, i);
                else
                    c = a.match(d) || f.transparent;
                c[0] = Number(c[0]),
                c[1] = Number(c[1]),
                c[2] = Number(c[2]),
                c.length > 3 && (c[3] = Number(c[3]))
            }
        else
            c = f.black;
        return r && !q && (h = c[0] / 255,
        i = c[1] / 255,
        j = c[2] / 255,
        n = Math.max(h, i, j),
        o = Math.min(h, i, j),
        m = (n + o) / 2,
        n === o ? k = l = 0 : (p = n - o,
        l = m > .5 ? p / (2 - n - o) : p / (n + o),
        k = n === h ? (i - j) / p + (j > i ? 6 : 0) : n === i ? (j - h) / p + 2 : (h - i) / p + 4,
        k *= 60),
        c[0] = k + .5 | 0,
        c[1] = 100 * l + .5 | 0,
        c[2] = 100 * m + .5 | 0),
        "number" === b ? c[0] << 16 | c[1] << 8 | c[2] : c
    }, i = function(a, b) {
        var c, d, e, f = (a + "").match(k) || [], g = 0, i = "";
        if (!f.length)
            return a;
        for (c = 0; c < f.length; c++)
            d = f[c],
            e = a.substr(g, a.indexOf(d, g) - g),
            g += e.length + d.length,
            d = h(d, b ? "hsl" : "rgb"),
            3 === d.length && d.push(1),
            i += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
        return i + a.substr(g)
    }, j = (_gsScope.GreenSockGlobals || _gsScope).TweenLite, k = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b", l = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], m = .212671, n = .71516, o = .072169, p = function(a, b) {
        var c, d, e = [], f = 0, g = 0;
        for (c = 0; 4 > c; c++) {
            for (d = 0; 5 > d; d++)
                g = 4 === d ? a[f + 4] : 0,
                e[f + d] = a[f] * b[d] + a[f + 1] * b[d + 5] + a[f + 2] * b[d + 10] + a[f + 3] * b[d + 15] + g;
            f += 5
        }
        return e
    }, q = function(a, b) {
        var c = 1 - b
          , d = c * m
          , e = c * n
          , f = c * o;
        return p([d + b, e, f, 0, 0, d, e + b, f, 0, 0, d, e, f + b, 0, 0, 0, 0, 0, 1, 0], a)
    }, r = function(a, b, c) {
        var d = h(b)
          , e = d[0] / 255
          , f = d[1] / 255
          , g = d[2] / 255
          , i = 1 - c;
        return p([i + c * e * m, c * e * n, c * e * o, 0, 0, c * f * m, i + c * f * n, c * f * o, 0, 0, c * g * m, c * g * n, i + c * g * o, 0, 0, 0, 0, 0, 1, 0], a)
    }, s = function(a, b) {
        b *= Math.PI / 180;
        var c = Math.cos(b)
          , d = Math.sin(b);
        return p([m + c * (1 - m) + d * -m, n + c * -n + d * -n, o + c * -o + d * (1 - o), 0, 0, m + c * -m + .143 * d, n + c * (1 - n) + .14 * d, o + c * -o + d * -.283, 0, 0, m + c * -m + d * -(1 - m), n + c * -n + d * n, o + c * (1 - o) + d * o, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], a)
    }, t = function(a, b) {
        return p([b, 0, 0, 0, .5 * (1 - b), 0, b, 0, 0, .5 * (1 - b), 0, 0, b, 0, .5 * (1 - b), 0, 0, 0, 1, 0], a)
    }, u = function(a, b) {
        var c, d = _gsScope.PIXI.filters[b], e = a.filters || [], f = e.length;
        if (!d)
            throw "PixiPlugin error: " + b + " isn't present.";
        for (; --f > -1; )
            if (e[f]instanceof d)
                return e[f];
        return c = new d,
        "BlurFilter" === b && (c.blur = 0),
        e.push(c),
        a.filters = e,
        c
    }, v = function(a, b, c, d) {
        b._addTween(c, a, c[a], d[a], a),
        b._overwriteProps.push(a)
    }, w = function(a, b) {
        var c = new _gsScope.PIXI.filters.ColorMatrixFilter;
        return c.matrix = b,
        c.brightness(a, !0),
        c.matrix
    }, x = {
        contrast: 1,
        saturation: 1,
        colorizeAmount: 0,
        colorize: "rgb(255,255,255)",
        hue: 0,
        brightness: 1
    }, y = function(a, b, c) {
        var d, e, f, g = u(a, "ColorMatrixFilter"), h = a._gsColorMatrixFilter = a._gsColorMatrixFilter || {
            contrast: 1,
            saturation: 1,
            colorizeAmount: 0,
            colorize: "rgb(255,255,255)",
            hue: 0,
            brightness: 1
        }, i = b.combineCMF && !("colorMatrixFilter"in b && !b.colorMatrixFilter);
        f = g.matrix,
        b.matrix && b.matrix.length === f.length ? (e = b.matrix,
        1 !== h.contrast && v("contrast", c, h, x),
        h.hue && v("hue", c, h, x),
        1 !== h.brightness && v("brightness", c, h, x),
        h.colorizeAmount && (v("colorize", c, h, x),
        v("colorizeAmount", c, h, x)),
        1 !== h.saturation && v("saturation", c, h, x)) : (e = l.slice(),
        null != b.contrast ? (e = t(e, Number(b.contrast)),
        v("contrast", c, h, b)) : 1 !== h.contrast && (i ? e = t(e, h.contrast) : v("contrast", c, h, x)),
        null != b.hue ? (e = s(e, Number(b.hue)),
        v("hue", c, h, b)) : h.hue && (i ? e = s(e, h.hue) : v("hue", c, h, x)),
        null != b.brightness ? (e = w(Number(b.brightness), e),
        v("brightness", c, h, b)) : 1 !== h.brightness && (i ? e = w(h.brightness, e) : v("brightness", c, h, x)),
        null != b.colorize ? (b.colorizeAmount = "colorizeAmount"in b ? Number(b.colorizeAmount) : 1,
        e = r(e, b.colorize, b.colorizeAmount),
        v("colorize", c, h, b),
        v("colorizeAmount", c, h, b)) : h.colorizeAmount && (i ? e = r(e, h.colorize, h.colorizeAmount) : (v("colorize", c, h, x),
        v("colorizeAmount", c, h, x))),
        null != b.saturation ? (e = q(e, Number(b.saturation)),
        v("saturation", c, h, b)) : 1 !== h.saturation && (i ? e = q(e, h.saturation) : v("saturation", c, h, x))),
        d = e.length;
        for (; --d > -1; )
            e[d] !== f[d] && c._addTween(f, d, f[d], e[d], "colorMatrixFilter");
        c._overwriteProps.push("colorMatrixFilter")
    }, z = function(b, c, d, e, f) {
        var g = e._firstPT = {
            _next: e._firstPT,
            t: b,
            p: c,
            proxy: {},
            f: "function" == typeof b[c]
        };
        g.proxy[c] = "rgb(" + h(g.f ? b[c.indexOf("set") || "function" != typeof b["get" + c.substr(3)] ? c : "get" + c.substr(3)]() : b[c]).join(",") + ")",
        f._addTween(g.proxy, c, "get", "number" == typeof d ? "rgb(" + h(d, !1).join(",") + ")" : d, c, null, null, a)
    }, A = function(a, b) {
        var c = b.setRatio
          , d = function(a) {
            var e, f = d._firstPT;
            for (c.call(b, a); f; )
                e = h(f.proxy[f.p], "number"),
                f.f ? f.t[f.p](e) : f.t[f.p] = e,
                f = f._next;
            d.graphics && (d.graphics.dirty++,
            d.graphics.clearDirty++)
        };
        return b.setRatio = d,
        d
    }, B = {
        tint: 1,
        lineColor: 1,
        fillColor: 1
    }, C = "position,scale,skew,pivot,anchor,tilePosition,tileScale".split(","), D = {
        x: "position",
        y: "position",
        tileX: "tilePosition",
        tileY: "tilePosition"
    }, E = {
        colorMatrixFilter: 1,
        saturation: 1,
        contrast: 1,
        hue: 1,
        colorize: 1,
        colorizeAmount: 1,
        brightness: 1,
        combineCMF: 1
    }, F = Math.PI / 180, G = function(a) {
        return "string" == typeof a && "=" === a.charAt(1) ? a.substr(0, 2) + parseFloat(a.substr(2)) * F : a * F
    };
    for (b = 0; b < C.length; b++)
        c = C[b],
        D[c + "X"] = c,
        D[c + "Y"] = c;
    for (c in f)
        k += "|" + c + "\\b";
    k = new RegExp(k + ")","gi"),
    a = function(a) {
        var b, c = a[0] + " " + a[1];
        k.lastIndex = 0,
        k.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("),
        a[0] = i(a[0], b),
        a[1] = i(a[1], b))
    }
    ,
    j.defaultStringFilter || (j.defaultStringFilter = a);
    var H = _gsScope._gsDefine.plugin({
        propName: "pixi",
        priority: 0,
        API: 2,
        global: !0,
        version: "0.1.2",
        init: function(a, b, c, d) {
            if (!a instanceof _gsScope.PIXI.DisplayObject)
                return !1;
            var e, f, g, h, i, j, k, l, m, n;
            for (j in b) {
                if (e = D[j],
                g = b[j],
                "function" == typeof g && (g = g(d || 0, a)),
                e)
                    f = -1 !== j.charAt(j.length - 1).toLowerCase().indexOf("x") ? "x" : "y",
                    this._addTween(a[e], f, a[e][f], "skew" === e ? G(g) : g, j);
                else if ("scale" === j || "anchor" === j || "pivot" === j || "tileScale" === j)
                    this._addTween(a[j], "x", a[j].x, g, j + "X"),
                    this._addTween(a[j], "y", a[j].y, g, j + "Y");
                else if ("rotation" === j)
                    this._addTween(a, j, a.rotation, G(g), j);
                else if (E[j])
                    h || (y(a, b.colorMatrixFilter || b, this),
                    h = !0);
                else if ("blur" === j || "blurX" === j || "blurY" === j || "blurPadding" === j) {
                    if (i = u(a, "BlurFilter"),
                    this._addTween(i, j, i[j], g, j),
                    0 !== b.blurPadding)
                        for (k = b.blurPadding || 2 * Math.max(i[j], g),
                        m = a.filters.length; --m > -1; )
                            a.filters[m].padding = Math.max(a.filters[m].padding, k)
                } else if (B[j])
                    if (l || (l = A(c, this)),
                    ("lineColor" === j || "fillColor" === j) && a instanceof _gsScope.PIXI.Graphics) {
                        for (n = a.graphicsData,
                        m = n.length; --m > -1; )
                            z(n[m], j, g, l, this);
                        l.graphics = a
                    } else
                        z(a, j, g, l, this);
                else
                    this._addTween(a, j, a[j], g, j);
                this._overwriteProps.push(j)
            }
            return !0
        }
    });
    H.colorProps = B,
    H.parseColor = h,
    H.formatColors = i,
    H.colorStringFilter = a
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(a) {
    "use strict";
    var b = function() {
        return (_gsScope.GreenSockGlobals || _gsScope)[a]
    };
    "undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"),
    module.exports = b()) : "function" == typeof define && define.amd && define(["TweenLite"], b)
}("PixiPlugin");
