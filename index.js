// <⚠️ DONT DELETE THIS ⚠️>

const CHANGING_COLOR = "changingColor";
const ORIGINAL_COLOR = "original";
const CHANGED_COLOR = "changedColor";
const color = document.getElementById('title');

function handlerResize(event){

  const size = window.innerWidth;

  if(size > 1140){
    color.classList.add(CHANGED_COLOR);
    color.classList.remove(CHANGING_COLOR); 
  }
  else if(size<=1140&&size>=800){
    color.classList.add(CHANGING_COLOR);
    color.classList.remove(CHANGED_COLOR, ORIGINAL_COLOR);
  }
  else{
    color.classList.add(ORIGINAL_COLOR);
    color.classList.remove(CHANGING_COLOR);
  }
}

window.addEventListener("resize", handlerResize);
// <⚠️ /DONT DELETE THIS ⚠️>