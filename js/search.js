var search_icon = document.getElementsByClassName("search-icon")[0];
var search = document.getElementsByClassName("search")[0];
search_icon.addEventListener("click",function(){
  search.classList.toggle("active-search");
});
