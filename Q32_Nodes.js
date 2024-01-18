console.log(document);
let x = document.querySelector('#heading');
console.log(x);
console.log(x.parentNode);
console.log(x.childNodes[0].nodeValue);
console.log(x.previousSibling);

function addNew(){
    const para=document.createElement("p");
    const node=document.createTextNode("Subscribe to my channel to get more videos");
    para.appendChild(node);
    const elem=document.querySelector('#box1');
    elem.appendChild(para);
}