function scroll(){
    var local = document.getElementById('intro');
    local.scrollIntoView({behavior:"smooth"});
    console.log(local);
}

document.getElementById("button-intro").addEventListener("click", scroll); 

const content = document.querySelectorAll('.section');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

console.log(content);

var index = 0;

prev.addEventListener('click', () => {
  if (index < 1) return;
  index--;
  content.forEach((section, i) => {
    if (i === index) {
      section.scrollIntoView({behavior: "smooth"});
    }
  });
})

next.addEventListener('click', () => {
  if (index > 3) return;
  index++;
  content.forEach((section, i) => {
    if (i === index) {
      section.scrollIntoView({behavior: "smooth"});
    }
  })
})


