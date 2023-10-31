let Click=document.getElementById("click");
let count=0
function increment()
{
    count=count+1
    Click.innerText=count
}
let saveEl=document.getElementById("pervious")
function save()
{
    let contstr=count+" - "
    saveEl.textContent+=contstr
    Click.textContent=0
    count=0
}