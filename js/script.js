console.log("JS ok!");

const imagesArray = ['01','02','03','04','05'];
let activeIndex = 0;

const container = document.querySelector('.carousel-container');

for(let i = 0; i < imagesArray.length; i++){
    const image = imagesArray[i];
    const imageClassSelector = i === activeIndex ? 'item active' : 'item';
    console.log(container)
    container.innerHTML += `<img class="${imageClassSelector}" src="img/${image}.jpg"/>`;
}