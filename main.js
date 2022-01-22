const wrapper=document.querySelector('.wrapper');
const content=wrapper.querySelector('.content');

function onDrag({movementX,movementY}){
    let getStyle=window.getComputedStyle(wrapper);
    let left=parseInt(getStyle.left);
    let top=parseInt(getStyle.top);
    wrapper.style.left=`${left+movementX}px`;
    wrapper.style.top=`${top+movementY}px`
}

content.addEventListener("mousedown",()=>{
    content.classList.add("active");
    content.addEventListener("mousemove",onDrag);
})

document.addEventListener("mouseup",()=>{
    content.classList.remove("active");
    content.removeEventListener("mousemove",onDrag);
})