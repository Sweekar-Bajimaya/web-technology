document.getElementsByClassName("p1")[0].innerHTML="Hello this is week 10";
document.getElementsByClassName("p1")[0].style.cssText="background-color:gold; color:blue; font-size:30px";
document.getElementsByTagName("h1")[1].innerHTML="Get elements by tag name";

var select = document.getElementsByClassName("p1");
for( var i =0; i<=select.length;i++){
    select[i].style.cssText="background-color:gold; color:blue; font-size: 30px";
}
