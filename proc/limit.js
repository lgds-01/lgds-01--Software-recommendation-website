var system = {};
var p = navigator.platform;
system.win = (p.indexOf("Win") == 0);
system.mac = (p.indexOf("Mac") == 0);
system.x11 = (p == "X11" || p.indexOf("Liunx") == 0);
if (!system.win && !system.mac && !system.x11) { window.location.href = "../htmls/error.html" };