  document.addEventListener("DOMContentLoaded", function() {
    var sidebarCollapse = document.getElementById("sidebarCollapse");
    var sidebarCollapseX = document.getElementById("sidebarCollapseX");
    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementsByClassName("overlay")[0];
    
    sidebarCollapse.addEventListener("click", function() {
      sidebar.classList.add("active");
    
      if (sidebar.classList.contains("active")) {
        overlay.classList.add("visible");
        console.log("it's working!");
      }
    });
    
    sidebarCollapseX.addEventListener("click", function() {
      sidebar.classList.remove("active");
      overlay.classList.remove("visible");
    });
  });
