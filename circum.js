let radius;
let circumference;
const PI=3.141;
document.getElementById("Submit").onclick=function()
{
    radius=document.getElementById("myText").value;
    radius=Number(radius);
    circumference=2 * PI * radius;
    document.getElementById("output").textContent=circumference + "cm";

}