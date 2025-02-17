document.getElementById("dropdown-btn").onclick = function() {
    var dropdown = document.getElementById("dropdown-content");
    if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
    } else {
        dropdown.classList.add("show");
    }
}

  // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('#dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
        }
      }
    }
}

document.getElementById('open-about').onclick = function(event){
    event.preventDefault();
    document.getElementById('about-modal').style.display="block";
}

document.querySelector('.close-btn').onclick = function(){
    document.getElementById('about-modal').style.display="none";
}

document.getElementById('open-contact').onclick = function(event){
    event.preventDefault();
    document.getElementById('contact-modal').style.display="block";
}

document.querySelector('.contact-close-btn').onclick = function(){
    document.getElementById('contact-modal').style.display="none";
}

document.getElementById('open-help').onclick = function(event){
    event.preventDefault();
    document.getElementById('help-modal').style.display="block";
}

document.querySelector('.help-close-btn').onclick = function(){
    document.getElementById('help-modal').style.display="none";
}

// Get references to navbar and the services section
const navbarLinks = document.querySelectorAll(".menu a");
const servicesSection = document.querySelector("#services");

// Add scroll event listener
window.addEventListener("scroll", () => {
    // Get the position of the services section
    const servicesTop = servicesSection.getBoundingClientRect().top;
    const servicesBottom = servicesSection.getBoundingClientRect().bottom;

    // Check if the section is in the viewport
    if (servicesTop <= 0 && servicesBottom >= 0) {
        navbarLinks.forEach(link => link.classList.add("navbar-white"));
    } else {
        navbarLinks.forEach(link => link.classList.remove("navbar-white"));
    }
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".plant1-name-img").forEach(function(element) {
        element.onclick = function() {
            document.querySelector(".sub-plant1").style.display = "block";
        };
    });
});


document.querySelector(".sub-plant1-close").onclick = function(){
    document.querySelector(".sub-plant1").style.display="none";
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".plant2-name-img").forEach(function(element) {
        element.onclick = function() {
            document.querySelector(".sub-plant2").style.display = "block";
        };
    });
});


document.querySelector(".sub-plant2-close").onclick = function(){
    document.querySelector(".sub-plant2").style.display="none";
}

// Select all elements with the class "sub-plant-img"
const plantImages = document.querySelectorAll('.sub-plant-img');

// Loop through each image and add event listeners
plantImages.forEach((img) => {
    const overlay = img.querySelector('.hover-overlay');
    img.addEventListener('mouseenter', () => {
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
        overlay.style.opacity = '0.8';
    });

    img.addEventListener('mouseleave', () => {
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        overlay.style.opacity = '0';
    });
});

document.querySelector("#sub-plant-img1").onclick=function(){
    document.querySelector(".foilage").style.display="block";
}

document.querySelector(".folilage-close").onclick=function(){
    document.querySelector(".foilage").style.display="none";
}

document.querySelector("#sub-plant-img2").onclick=function(){
    document.querySelector(".flower1").style.display="block";
}

document.querySelector(".flower1-close").onclick=function(){
    document.querySelector(".flower1").style.display="none";
}

document.querySelector("#sub-plant-img3").onclick=function(){
    document.querySelector(".suc").style.display="block";
}

document.querySelector(".suc-close").onclick=function(){
    document.querySelector(".suc").style.display="none";
}

document.querySelector("#sub-plant-img4").onclick=function(){
    document.querySelector(".air").style.display="block";
}

document.querySelector(".air-close").onclick=function(){
    document.querySelector(".air").style.display="none";
}

document.querySelector("#sub-plant-img5").onclick=function(){
    document.querySelector(".flower2").style.display="block";
}

document.querySelector(".flower2-close").onclick=function(){
    document.querySelector(".flower2").style.display="none";
}

document.querySelector("#sub-plant-img6").onclick=function(){
    document.querySelector(".herbs").style.display="block";
}

document.querySelector(".herbs-close").onclick=function(){
    document.querySelector(".herbs").style.display="none";
}

document.querySelector("#sub-plant-img7").onclick=function(){
    document.querySelector(".orna").style.display="block";
}

document.querySelector(".orna-close").onclick=function(){
    document.querySelector(".orna").style.display="none";
}

document.querySelector("#sub-plant-img8").onclick=function(){
    document.querySelector(".herb-med").style.display="block";
}

document.querySelector(".herb-med-close").onclick=function(){
    document.querySelector(".herb-med").style.display="none";
}

document.querySelector("#sub-plant-img9").onclick=function(){
    document.querySelector(".ayur-med").style.display="block";
}

document.querySelector(".ayur-med-close").onclick=function(){
    document.querySelector(".ayur-med").style.display="none";
}

document.querySelector("#sub-plant-img10").onclick=function(){
    document.querySelector(".cereal").style.display="block";
}

document.querySelector(".cereal-close").onclick=function(){
    document.querySelector(".cereal").style.display="none";
}

document.querySelector("#sub-plant-img11").onclick=function(){
    document.querySelector(".veges").style.display="block";
}

document.querySelector(".veges-close").onclick=function(){
    document.querySelector(".veges").style.display="none";
}

document.querySelector("#sub-plant-img12").onclick=function(){
    document.querySelector(".fruit-crp").style.display="block";
}

document.querySelector(".fruit-crp-close").onclick=function(){
    document.querySelector(".fruit-crp").style.display="none";
}

document.querySelector("#sub-plant-img13").onclick=function(){
    document.querySelector(".trees").style.display="block";
}

document.querySelector(".trees-close").onclick=function(){
    document.querySelector(".trees").style.display="none";
}

document.querySelector("#sub-plant-img14").onclick=function(){
    document.querySelector(".shrubs").style.display="block";
}

document.querySelector(".shrubs-close").onclick=function(){
    document.querySelector(".shrubs").style.display="none";
}

document.querySelector("#sub-plant-img15").onclick=function(){
    document.querySelector(".grass").style.display="block";
}

document.querySelector(".grass-close").onclick=function(){
    document.querySelector(".grass").style.display="none";
}

document.querySelector("#sub-plant-img16").onclick=function(){
    document.querySelector(".ground").style.display="block";
}

document.querySelector(".ground-close").onclick=function(){
    document.querySelector(".ground").style.display="none";
}

document.querySelector("#sub-plant-img17").onclick=function(){
    document.querySelector(".aquatic").style.display="block";
}

document.querySelector(".aquatic-close").onclick=function(){
    document.querySelector(".aquatic").style.display="none";
}

document.querySelector("#sub-plant-img18").onclick=function(){
    document.querySelector(".marsh").style.display="block";
}

document.querySelector(".marsh-close").onclick=function(){
    document.querySelector(".marsh").style.display="none";
}

document.querySelector("#sub-plant-img19").onclick=function(){
    document.querySelector(".succulents").style.display="block";
}

document.querySelector(".succulents-close").onclick=function(){
    document.querySelector(".succulents").style.display="none";
}

document.querySelector("#sub-plant-img20").onclick=function(){
    document.querySelector(".xero").style.display="block";
}

document.querySelector(".xero-close").onclick=function(){
    document.querySelector(".xero").style.display="none";
}

document.querySelector("#sub-plant-img21").onclick=function(){
    document.querySelector(".alpine").style.display="block";
}

document.querySelector(".alpine-close").onclick=function(){
    document.querySelector(".alpine").style.display="none";
}

document.querySelector("#sub-plant-img22").onclick=function(){
    document.querySelector(".subalp").style.display="block";
}

document.querySelector(".subalp-close").onclick=function(){
    document.querySelector(".subalp").style.display="none";
}

document.querySelector("#sub-plant-img23").onclick=function(){
    document.querySelector(".moss").style.display="block";
}

document.querySelector(".moss-close").onclick=function(){
    document.querySelector(".moss").style.display="none";
}

document.querySelector("#sub-plant-img24").onclick=function(){
    document.querySelector(".low").style.display="block";
}

document.querySelector(".low-close").onclick=function(){
    document.querySelector(".low").style.display="none";
}
