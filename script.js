const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
let test = document.querySelector('.test')
let imgch = document.querySelector('.imgch')
let form = document.querySelector('.Card')



console.log("Картинки!")
let imgarr = []
imgarr[0] = "./img_FOR_SLIDES/IMG_20230117_153138.jpg"
imgarr[1] = "./img_FOR_SLIDES/IMG_20230117_153220.jpg"
imgarr[2] = "./img_FOR_SLIDES/IMG_20230117_153301.jpg"
imgarr[3] = "./img_FOR_SLIDES/IMG_20230117_153307.jpg"
imgarr[4] = "./img_FOR_SLIDES/IMG_20230117_153414.jpg"
   
let i = 0
function right(){
if (i == 4){
  i = 0
    imgch.style.backgroundImage = `url(${imgarr[0]})`
    console.log(i)
    }
else if (i < 4){
  i++
  imgch.style.backgroundImage = `url(${imgarr[i]})`
  console.log(i)
  }
}
function left(){
  if (i == 0){
    i = 4
    imgch.style.backgroundImage = `url(${imgarr[4]})`
    console.log(i)
}
  else if (i > 0){
  i--
  imgch.style.backgroundImage = `url(${imgarr[i]})`
  console.log(i)
}

}


// function copyphone(){
//   document.execCommand('+7 XXX XXX XXX');
//   console.log("СКОПИРОВАН НОМЕР ТЕЛЕФОНА");
// }
//LASAGNA
