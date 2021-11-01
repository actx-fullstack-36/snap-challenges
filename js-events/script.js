

// Create a simple .html file with a single button. Usingdocument.getElementById change the background color of the button on click.


// console.log("Is this thing working???")

//arrow function
const handleButtonColorChange = () => {
    let button = document.getElementById('target')
    // button.style.backgroundColor = "red"
    if(button.style.backgroundColor === 'green'){
        button.style.backgroundColor = 'red'
    } else {
        button.style.backgroundColor = 'green'
    }
}

//reserved keyword function
// function handleButtonColorChange() {
//     let button = document.getElementById('target')
//     // button.style.backgroundColor = "red"
//     if(button.style.backgroundColor === 'green'){
//         button.style.backgroundColor = 'red'
//     } else {
//         button.style.backgroundColor = 'green'
//     }
// }
