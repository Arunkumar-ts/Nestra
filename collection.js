var sidenav = document.querySelector(".side-navbar");

function showsidenavbar() {
    sidenav.style.left = "0%";
}

function closesidenavbar() {
    sidenav.style.left = "-60%";
}

var getin = "";
var products = document.querySelector(".products");
var pelement = products.querySelectorAll("div");
function search(event) {
    getin = event.target.value.toUpperCase();
    for (var i = 0; i < pelement.length; i++) {
        var proname = pelement[i].querySelector("p").textContent
        if (proname.toUpperCase().indexOf(getin) < 0) {
            pelement[i].style.display = "none";
        }
        else {
            pelement[i].style.display = "block";
        }
    }
}
