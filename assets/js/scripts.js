function loadContent(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        callback(xhr.responseText);
      }
    };
    xhr.send();
  }

  document.addEventListener("DOMContentLoaded", function () {
    loadContent("/includes/header.html", function (content) {
      document.getElementById("header").innerHTML = content;
    });

    loadContent("/includes/footer.html", function (content) {
      document.getElementById("footer").innerHTML = content;
    });
  });

  window.onscroll = function() { myFunction() };

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }