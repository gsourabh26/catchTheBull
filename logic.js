var a = false;
var l = undefined;
var u = undefined;
var f = {};

function B() {
    var n = document.getElementById("table");
    n.style.width = 4 * 110 + "px";
    n.style.height = 5 * 110 + "px";
    n.style.background = "yellow";
    for (var e = 0; e < 5; e++)
        for (var i = 0; i < 4; i++) {
            var r = document.createElement("div");
            r.id = "cell" + e + i;
            r.style.width = 108 + "px";
            r.style.height = 108 + "px";
            r.style.background = "#66CCFF";
            r.style.border = "1px solid black";
            r.style.float = "left";
            r.setAttribute("onclick", "I(" + e + "," + i + ")");
            if (e < 2) {
                var t = document.createElement("img");
                t.id = "img" + e + i;
                t.src = "bull.gif";
                t.style.width = 100 + "px";
                t.style.height = 100 + "px";
                r.appendChild(t)
            }
            if (e == 4 && i > 0 && i < 3) {
                var t = document.createElement("img");
                t.id = "img" + e + i;
                t.src = "tiger.gif";
                t.style.width = 100 + "px";
                t.style.height = 100 + "px";
                f["img" + e + i] = {
                    i: e,
                    j: i
                };
                r.appendChild(t)
            }
            n.appendChild(r)
        }
    n.style.display = "inherit"
}

function I(i, r) {
    var n = document.getElementById("cell" + i + r);
    var t = n.firstChild;
    if (t && t.nodeName == "IMG" && t.getAttribute("src") == "tiger.gif" && (l == undefined || l == i)) {
        if (a) {
            n.style.background = "#66CCFF";
            u = undefined;
            l = undefined;
            a = false
        } else {
            n.style.background = "#0066FF";
            l = i;
            u = r;
            a = true
        }
    } else if (!t && a) {
        if ((l === i - 1 || l === i + 1) && u === r || (u === r - 1 || u === r + 1) && l === i) {
            h(i, r)
        }
    } else if (a && t && t.nodeName == "IMG" && t.getAttribute("src") == "bull.gif") {
        if (l === i - 2 && u === r) {
            if (!e(i - 1, r)) {
                o(i, r)
            }
        }
        if (l === i + 2 && u === r) {
            if (!e(i + 1, r)) {
                o(i, r)
            }
        }
        if (l === i && u === r - 2) {
            if (!e(i, r - 1)) {
                o(i, r)
            }
        }
        if (l === i && u === r + 2) {
            if (!e(i, r + 1)) {
                o(i, r)
            }
        }
    }
}

function o(i, r) {
    var t = document.getElementById("cell" + l + u);
    var e = document.getElementById("cell" + i + r);
    var n = t.firstChild;
    var d = e.firstChild;
    id = n.getAttribute("id");
    t.style.background = "#66CCFF";
    e.removeChild(d);
    e.appendChild(n);
    u = undefined;
    l = undefined;
    f[id].i = i;
    f[id].j = r;
    a = false;
    var c = b();
    if (!c) {
        g();
        j()
    }
}

function h(e, i) {
    var r = document.getElementById("cell" + l + u);
    var n = document.getElementById("cell" + e + i);
    var t = r.firstChild;
    id = t.getAttribute("id");
    r.style.background = "#66CCFF";
    n.appendChild(t);
    u = undefined;
    l = undefined;
    f[id].i = e;
    f[id].j = i;
    a = false;
    g();
    j()
}

function E(e, i) {
    var r = document.getElementById("cell" + e + i);
    var t = r.firstChild;
    if (t) {
        return true
    } else {
        return false
    }
}

function p(i, r) {
    var e = false;
    if (r > 1) {
        if (!e && i > 1) {
            e = t(i - 2, r)
        }
        if (!e && i < 3) {
            e = t(i + 2, r)
        }
        if (!e) {
            e = t(i, r - 2)
        }
    } else {
        if (!e && i > 1) {
            e = t(i - 2, r)
        }
        if (!e && i < 3) {
            e = t(i + 2, r)
        }
        if (!e) {
            e = t(i, r + 2)
        }
    }
    return !e
}

function t(r, t) {
    var e = document.getElementById("cell" + r + t);
    if (e) {
        var i = e.firstChild
    }
    if (i && i.getAttribute("src") === "tiger.gif") {
        return true
    }
    return false
}

function n(r, t) {
    var e = document.getElementById("cell" + r + t);
    if (e) {
        var i = e.firstChild
    }
    if (i && i.getAttribute("src") === "bull.gif") {
        return true
    }
    return false
}

function m(e, i) {
    var r = {
        i1: e,
        j1: i
    };
    if (e > 1) {
        if (n(e - 2, i) && !n(e - 1, i) && !t(e - 1, i)) {
            r.i2 = e - 2;
            r.j2 = i;
            return r
        }
    }
    if (e < 3) {
        if (n(e + 2, i) && !n(e + 1, i) && !t(e + 1, i)) {
            r.i2 = e + 2;
            r.j2 = i;
            return r
        }
    }
    if (i > 1) {
        if (n(e, i - 2) && !n(e, i - 1) && !t(e, i - 1)) {
            r.i2 = e;
            r.j2 = i - 2;
            return r
        }
    } else {
        if (n(e, i + 2) && !n(e, i + 1) && !t(e, i + 1)) {
            r.i2 = e;
            r.j2 = i + 2;
            return r
        }
    }
    return null
}

function v(i, t) {
    var f = {};
    if (i > 0 && t > 0) {
        if (n(i - 1, t - 1)) {
            f.i1 = i - 1;
            f.j1 = t - 1;
            if (!e(i - 1, t) && !r(i - 1, t)) {
                f.j2 = t;
                f.i2 = i - 1;
                return f
            } else if (!e(i, t - 1) && !r(i, t - 1)) {
                f.j2 = t - 1;
                f.i2 = i;
                return f
            }
        }
    }
    if (i > 0 && t < 3) {
        if (n(i - 1, t + 1)) {
            f.i1 = i - 1;
            f.j1 = t + 1;
            if (!e(i, t + 1) && !r(i, t + 1)) {
                f.j2 = t + 1;
                f.i2 = i;
                return f
            } else if (!e(i - 1, t) && !r(i - 1, t)) {
                f.j2 = t;
                f.i2 = i - 1;
                return f
            }
        }
    }
    if (i < 4 && t > 0) {
        if (n(i + 1, t - 1)) {
            f.i1 = i + 1;
            f.j1 = t - 1;
            if (!e(i + 1, t) && !r(i + 1, t)) {
                f.j2 = t;
                f.i2 = i + 1;
                return f
            } else if (!e(i, t - 1) && !r(i, t - 1)) {
                f.j2 = t - 1;
                f.i2 = i;
                return f
            }
        }
    }
    if (i < 4 && t < 4) {
        if (n(i + 1, t + 1)) {
            f.i1 = i + 1;
            f.j1 = t + 1;
            if (!e(i + 1, t) && !r(i + 1, t)) {
                f.j2 = t;
                f.i2 = i + 1;
                return f
            } else if (!e(i, t + 1) && !r(i, t + 1)) {
                f.j2 = t + 1;
                f.i2 = i;
                return f
            }
        }
    }
    return null
}

function d(i, r, t, n) {
    var e = document.getElementById("cell" + i + r);
    var f = document.getElementById("cell" + t + n);
    var l = e.firstChild;
    e.style.background = "#66CCFF";
    f.appendChild(l)
}

function c(i, t) {
    if (!e(i + 1, t) && !r(i + 1, t)) {
        if (i + 1 < 5) return {
            i: i + 1,
            j: t
        }
    }
    if (!e(i - 1, t) && !r(i - 1, t)) {
        if (i - 1 > 0) return {
            i: i - 1,
            j: t
        }
    }
    if (!e(i, t - 1) && !r(i, t - 1)) {
        if (t - 1 > 0) return {
            i: i,
            j: t - 1
        }
    }
    if (!e(i, t + 1) && !r(i, t + 1)) {
        if (t + 1 < 4) return {
            i: i,
            j: t + 1
        }
    }
    return null
}

function s(n, a, f, i) {
    var l, u, t;
    if (n == f) {
        if (a > i) {
            l = e(n, i + 1);
            if (!l) {
                u = r(n, i + 1);
                if (!u) {
                    d(n, i, n, i + 1);
                    return true
                } else {
                    t = c(n, i);
                    if (t != null) {
                        d(n, i, t.i, t.j);
                        return true
                    }
                }
            }
        } else {
            l = e(n, i - 1);
            if (!l) {
                u = r(n, i - 1);
                if (!u) {
                    d(n, i, n, i - 1);
                    return true
                } else {
                    t = c(n, i);
                    if (t != null) {
                        d(n, i, t.i, t.j);
                        return true
                    }
                }
            }
        }
    }
    if (a == i) {
        if (n > f) {
            l = e(f + 1, i);
            if (!l) {
                u = r(f + 1, i);
                if (!u) {
                    d(f, i, f + 1, i);
                    return true
                } else {
                    t = c(f, i);
                    if (t != null) {
                        d(f, i, t.i, t.j);
                        return true
                    }
                }
            }
        } else {
            l = e(f - 1, i);
            if (!l) {
                u = r(f - 1, i);
                if (!u) {
                    d(f, i, f - 1, i);
                    return true
                } else {
                    t = c(f, i);
                    if (t != null) {
                        d(f, i, t.i, t.j);
                        return true
                    }
                }
            }
        }
    }
    return false
}

function r(e, i) {
    return t(e + 2, i) && (!t(e + 1, i) || !n(e + 1, i)) || t(e - 2, i) && (!t(e - 1, i) || !n(e - 1, i)) || t(e, i - 2) && (!t(e, i - 1) || !n(e, i - 1)) || t(e, i + 2) && (!t(e, i + 1) || !n(e, i + 1))
}

function e(e, i) {
    return t(e, i) || n(e, i) || y(e, i)
}

function y(e, i) {
    return document.getElementById("cell" + e + i) === null
}

function C() {
    var n = {};
    var f = [];
    var i, t;
    do {
        do {
            i = Math.floor(Math.random() * 5);
            t = Math.floor(Math.random() * 4)
        } while (f.indexOf(i + "," + t) > -1);
        f.push(i + "," + t);
        n.i1 = i;
        n.j1 = t;
        var u = document.getElementById("cell" + i + t);
        var l = u.firstChild;
        if (l && l.getAttribute("src") === "bull.gif") {
            if (t > 0) {
                flag = r(i, t - 1) || e(i, t - 1);
                if (!flag) {
                    n.i2 = i;
                    n.j2 = t - 1;
                    return n
                }
            }
            if (t < 3) {
                flag = r(i, t + 1) || e(i, t + 1);
                if (!flag) {
                    n.i2 = i;
                    n.j2 = t + 1;
                    return n
                }
            }
            if (i < 4) {
                flag = r(i + 1, t) || e(i + 1, t);
                if (!flag) {
                    n.i2 = i + 1;
                    n.j2 = t;
                    return n
                }
            }
            if (i > 0) {
                flag = r(i - 1, t) || e(i - 1, t);
                if (!flag) {
                    n.i2 = i - 1;
                    n.j2 = t;
                    return n
                }
            }
        }
    } while (f.length < 20);
    return null
}

function g() {
    var e = null;
    var i = Object.keys(f);
    e = m(f[i[0]].i, f[i[0]].j);
    if (e !== null) {
        var r = s(e.i1, e.j1, e.i2, e.j2);
        if (r) {
            return
        }
    }
    e = m(f[i[1]].i, f[i[1]].j);
    if (e !== null) {
        var r = s(e.i1, e.j1, e.i2, e.j2);
        if (r) {
            return
        }
    }
    e = v(f[i[0]].i, f[i[0]].j);
    if (e !== null) {
        d(e.i1, e.j1, e.i2, e.j2);
        return
    }
    e = v(f[i[1]].i, f[i[1]].j);
    if (e !== null) {
        d(e.i1, e.j1, e.i2, e.j2);
        return
    }
    e = C();
    if (e !== null) {
        d(e.i1, e.j1, e.i2, e.j2);
        return
    }
}

function b() {
    count = 0;
    for (var e = 0; e < 5; e++)
        for (var i = 0; i < 4; i++) {
            if (n(e, i)) {
                count++
            }
        }
    if (count === 2) {
        alert("congo! You Win.....");
        return true
    }
    return false
}

function j() {
    var n = Object.keys(f);
    var l = true;
    for (i = 0; i < n.length; i++) {
        var r = f[n[i]].i;
        var t = f[n[i]].j;
        l = e(r + 1, t) && e(r, t - 1) && e(r, t + 1) && e(r - 1, t) && l
    }
    if (l) {
        alert("sorry!... Tiger's its your bad day");
        return true
    }
    return false
}
