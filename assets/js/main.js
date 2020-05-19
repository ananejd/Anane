
function toggleNavigation() {
  const links = document.getElementById("mobile-nav-toggle");
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
}
