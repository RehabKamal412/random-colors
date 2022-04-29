var div = document.getElementsByTagName("div")[0];


div.addEventListener("click",function()
{
    var randomColor = "#"+Math.random().toString(16).slice(2,8).toUpperCase();
var newDiv=document.createElement("div");
newDiv.style.backgroundColor=randomColor;
newDiv.style.padding="30 px";
newDiv.style.display=" inline-block";
newDiv.style.height="150 px"
document.body.append(newDiv);
});