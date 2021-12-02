let buttons = document.querySelectorAll('.animalFilter');
let images = document.querySelectorAll('.imageFilter');
let textSearchInput = document.querySelector('.textSearchInput');

// console.log(buttons);
// console.log(images);
// console.log(textSearchInput);
let searchString;
let animal = 'all';

buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener('click',function(event){
        let clickedElement = document.querySelector('.clicked');
        if(clickedElement){
            clickedElement.classList.remove('clicked');
        }
        event.target.classList.add('clicked');
        // console.log(event.target);
        let clickedItem = event.target;
        animal = clickedItem.getAttribute('animal');
        // console.log(animal);
        showHideImages();
    });
});

textSearchInput.addEventListener('keyup',function(event){
    searchString = event.target.value;
    // console.log(event);
    // console.log(searchString);
    showHideImages();
});

function showHideImages(){
    images.forEach(function(image){
        // console.log(image);
        //Hide everything
        let captionElement = image.parentElement;
        let caption = captionElement.textContent.trim();
        image.parentElement.classList.add('hide');
        if(image.classList.contains(animal) || animal == 'all'){
            //show current image
            console.log(searchString);
            if(caption.indexOf(searchString) !== -1 || caption == ""){
                if(image.parentElement.classList.contains('hide')){
                    image.parentElement.classList.remove('hide');
                }
            }
        }
    });
}
