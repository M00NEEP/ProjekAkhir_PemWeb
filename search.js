function search() {
    var searchQuery = document.querySelector(".search-data").value.toLowerCase();
    var makananItems = document.getElementsByClassName("makanan-item");
  
    for (var i = 0; i < makananItems.length; i++) {
      var itemName = makananItems[i].querySelector("h3").textContent.toLowerCase();
      if (itemName.includes(searchQuery)) {
        makananItems[i].style.display = "block";
      } else {
        makananItems[i].style.display = "none";
      }
    }
  }
