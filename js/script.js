console.log("JS ok!");

const imagesArray = ['01','02','03','04','05'];
let activeIndex = 0;

const container = document.querySelector('.carousel-container');

// Image display logic
for(let i = 0; i < imagesArray.length; i++){
    const image = imagesArray[i];
    const imageClassSelector = i === activeIndex ? 'item active' : 'item';
    console.log(container)
    container.innerHTML += `<img class="${imageClassSelector}" src="img/${image}.jpg"/>`;
}

// Button Logic
const nextButton = document.getElementById('next');

// Next
nextButton.addEventListener('click', function(){
    console.log('next');
    if (activeIndex < imagesArray.length -1){
        activeIndex++;
    }
    else{
        activeIndex = 0;
    }
    container.innerHTML = '';
    for(let i = 0; i < imagesArray.length; i++){
        const image = imagesArray[i];
        const imageClassSelector = i === activeIndex ? 'item active' : 'item';
        console.log(container)
        container.innerHTML += `<img class="${imageClassSelector}" src="img/${image}.jpg"/>`;
    }
    console.log(activeIndex);

})

//Previous
const previousButton = document.getElementById('previous');

previousButton.addEventListener('click', function(){
    console.log('previous');
    if (activeIndex < imagesArray.length && activeIndex > 0){
        activeIndex--;
    }
    else{
        activeIndex = 4;
    }
    container.innerHTML = '';
    for(let i = 0; i < imagesArray.length; i++){
        const image = imagesArray[i];
        const imageClassSelector = i === activeIndex ? 'item active' : 'item';
        console.log(container)
        container.innerHTML += `<img class="${imageClassSelector}" src="img/${image}.jpg"/>`;
    }
    console.log(activeIndex);

})


