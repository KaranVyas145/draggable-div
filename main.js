const wrapper=document.querySelector('.wrapper');
const header=wrapper.querySelector('header');

function onDrag(e){
    let getStyle=window.getComputedStyle(wrapper);
    let left=parseInt(getStyle.left);
    let top=parseInt(getStyle.top);
    console.log(left,top);
}

header.addEventListener("mousedown",()=>{
    header.addEventListener("mousedown",onDrag);
})