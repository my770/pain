if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/painApp/sw.js").then(
      function (registration) {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      },
      function (error) {
        console.log("Service Worker registration failed:", error);
      }
    );
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var coll = document.getElementsByClassName("collapsible");

  function closeAllCollapsibles() {
    for (var i = 0; i < coll.length; i++) {
      coll[i].classList.remove("active");
      var content = coll[i].nextElementSibling;
      content.style.display = "none";
    }
  }

  for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      var isActive = this.classList.contains("active");
      closeAllCollapsibles();
      if (!isActive) {
        this.classList.add("active");
        var content = this.nextElementSibling;
        content.style.display = "block";
      }
    });
  }
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("header").classList.add("shifted");
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("header").classList.remove("shifted");
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  // Hide all tab content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove active class from all tab links
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Hide the About section
  document.getElementById("landingPage").style.display = "none";

  // Show the selected tab content
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

  // Close the sidenav after selecting a link (to make it mobile-friendly)
  closeNav();  // This will automatically close the sidenav
}

document.getElementById("title").addEventListener("click", function() {
  // Hide all tab content
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Show the landing page
  document.getElementById("landingPage").style.display = "block";

  // Remove active class from tab links (if necessary)
  var tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
});
