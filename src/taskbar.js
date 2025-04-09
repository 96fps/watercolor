function reflowTaskbar() {
  HTMLCollection.prototype.forEach = Array.prototype.forEach;
  // var more = document.getElementById("taskbar_overflow_container");
  document.getElementById("taskbar_overflow_items").innerHTML = "";
  var overflow_items_count;
  overflow_items_count = 0;
  var overflow_list = document.getElementById("taskbar_overflow_items");
  var overflow_label = document.getElementById("taskbar_overflow_label");
  var tool_vis = document.getElementById("taskbar_container").children;
  tool_vis.forEach(function (item) {
    if (item.tagName == "A") {
      item.style.display = "";
      if (item.offsetTop > 0) {
        overflow_list.appendChild(item.cloneNode(true));
        item.style.display = "none";
        overflow_items_count++;
      }
    }
  });
  if (overflow_items_count > 0 ){
        overflow_label.style.display = "";

  }else{
        overflow_label.style.display = "none";

  }
}
