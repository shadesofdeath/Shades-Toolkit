window.onload = function() {
  document.getElementById("changelog-popup").style.display = "none";
  document.getElementById("about-popup").style.display = "none";
}

function openChangelogPopup() {
  document.getElementById("changelog-popup").style.display = "block";
}

function closeChangelogPopup() {
  document.getElementById("changelog-popup").style.display = "none";
}

function openAboutPopup() {
  document.getElementById("about-popup").style.display = "block";
}

function closeAboutPopup() {
  document.getElementById("about-popup").style.display = "none";
}
