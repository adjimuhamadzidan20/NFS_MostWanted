// drop down link
function dropLink() {
    document.getElementById("dropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.more')) {
        var dropdowns = document.getElementsByClassName("dropdown-link");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// memanggil icon gambar
let iconHamb = document.getElementById('hamburger');
iconHamb.onclick = function() {

    // memanggil list navigasi mobile
    let navbar = document.getElementsByClassName('link-mobile')[0];

    // jika icon ditekan (menampilkan link nav)
    if(navbar.style.display === "none") {
        navbar.style.display = "block";
    } 

    // jika icon ditekan lagi (menyembunyikan link nav)
    else {
        navbar.style.display = "none";
    }
}