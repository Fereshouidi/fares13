export function ul_control() {
    var ul = document.getElementById("menuList");
    var a = document.getElementsByClassName("a");
    var li = document.getElementsByClassName("li");
    if( ul.style.height != "2.5em" ){
      ul.style.height = "2.5em";
      for(var i = 0 ; i < a.length ; i++){
        a[i].style.opacity = "1";
        li[i].style.borderTop = "0.5px solid #1581DD";
      }
      ul.style.borderTop = "1px solid #1581DD";
    }else{
      ul.style.height = "0em";
      for(var i = 0 ; i < a.length ; i++){
        a[i].style.opacity = "0";
        li[i].style.border = "none";
      }
      ul.style.border = "none";
    }
    console.log("clicked !");
  } window.ul_control = ul_control ;