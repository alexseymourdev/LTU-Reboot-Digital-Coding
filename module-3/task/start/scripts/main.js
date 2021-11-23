function getAverage(arrNumberData){
    //create validation of the argument passed
    let blnValidation = true;
    if(!typeof Array.isArray(arrNumberData)){
        blnValidation = false;
    }
    //if validation is passed 
    if(blnValidation){
        //declare variables to build up when the array values are able to be used as a number
        let sum = 0;
        let dataCounter = 0;
        //loop through each item in the array
        for(counter=0;counter < arrNumberData.length; counter++){
            //set a variable to equal the current item in the array
            let currentData = arrNumberData[counter];
            //test that the current item is a number
            if(!isNaN(currentData)){
                //add the number to the sum variable using Number() to convert strings into numbers
                sum = sum + Number(currentData);
                //Add one to the data counter so that we can use this number to divide the total
                dataCounter++;
            }
        }
        //check the total sum
        // console.log(sum);
        //check the total amount of numbers used
        // console.log(dataCounter);
        //finding the average is total sum / total number of numbers used
        let average = sum / dataCounter;
        //checking the average
        // console.log(average);
        //return the average
        return average;
    }
    // isNaN(data)
}

let arrData = [3,7,'df','3',7,8,'df',23,6,2,67,'g','34',12,34,5];

// let averageNumber = getAverage(arrData);
// console.log(averageNumber);

// let elementToUpdate = document.querySelector('.outputNumberHere');
// console.log(elementToUpdate);
// elementToUpdate.innerHTML = averageNumber;

let button = document.querySelector('.runFunction');
// console.log(button);
button.addEventListener('click',function(event){
    // console.log(event);
    let averageNumber = getAverage(arrData);
    let elementToUpdate = document.querySelector('.outputNumberHere');
    // console.log(elementToUpdate);
    elementToUpdate.innerHTML = averageNumber;
})
// The answer should be 16.2307692

/* 

With a very simple frontend that displays the items in a box with an interactive element to 
activate the calculation and display it below, when clicked the number will appear below. 
The frontendshould just have HTML and some CSS generated from SCSS and the 
javascript should be vanilla(no libraries).Colours that should be included:
* Brand1 – #00585E
* Brand2 - #009494
* Brand3 - #F5F2DC
* Brand4 - #454445
* Brand5 - #FF5729
Detail is important, so it's a small task, but the detail could be 
enhanced with additional code forensuring the stability of parts of the system.
It doesn't need to look particularly good (design) as it's more about the 
coding standards andmaintainability.Fork this repo to your own GitHub account 
and submit a **pull request** with your sollution.

*/