console.log('test');

let buttons = document.querySelectorAll('.animalFilter');
let images = document.querySelectorAll('.imageFilter');

// console.log(buttons);
// console.log(images);

buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener('click',function(event){
        // console.log(event.target);
        let clickedItem = event.target;
        let animal = clickedItem.getAttribute('animal');
        console.log(animal);
        images.forEach(function(image){
            // console.log(image);
            //Hide everything
            image.parentElement.classList.add('hide');
            if(image.classList.contains(animal) || animal == 'all'){
                //show current image
                // console.log(image);
                if(image.parentElement.classList.contains('hide')){
                    image.parentElement.classList.remove('hide');
                }
            }
        });
    });
});