const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

/* Price form js */
function familySub() {
  // Get the checkbox
  var checkBox = document.getElementById("familycheck");
  // Get the output text
  var label = document.getElementById("family");
  var hLabel = document.getElementById("house");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    label.style.display = "flex";
    hLabel.style.display = "none";
  } else {
    label.style.display = "none";
  }
}

function houseSub() {
  // Get the checkbox
  var checkBox = document.getElementById("housecheck");
  // Get the output text
  var label = document.getElementById("house");
  var fLabel = document.getElementById("family");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    label.style.display = "block";
    fLabel.style.display = "none";
  } else {
    label.style.display = "none";
  }
}

function personSub() {
  // Get the checkbox
  var checkBox = document.getElementById("personcheck");
  // Get the output text
  var hLabel = document.getElementById("house");
  var fLabel = document.getElementById("family");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    hLabel.style.display = "none";
    fLabel.style.display = "none";
  }
}

/* Contact tabs */

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  });
}
