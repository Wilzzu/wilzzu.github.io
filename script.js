window.onload = function () {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://api.ipify.org?format=jsonp&callback=ShowIP";
    document.getElementsByTagName("head")[0].appendChild(script);
};
function ShowIP(response) {
    document.getElementById("ipaddress").innerHTML = "Current IP Address is " + response.ip;
} 