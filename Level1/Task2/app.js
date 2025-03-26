let btn = document.querySelector("button")

    btn.addEventListener("click",function(){

        let randomColor = getRandomColor();
        btn.style.backgroundColor = randomColor;
       
    })

function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

// calculator
function calculate() { 
    var number_one = parseFloat(document.getElementById('number_one').value); 
    var number_two = parseFloat(document.getElementById('number_two').value); 
    var operation = document.getElementById('operation').value; 
    var result; 
    switch (operation) { 
        case 'add': 
        result = number_one + number_two; 
        break; 
        case 'subtract': result = number_one - number_two; 
        break; 
        case 'multiply': result = number_one * number_two; 
        break; 
        case 'divide': result = number_one / number_two; 
        break; 
        default: result = 'Invalid operation'; 
    } 
        document.getElementById('result').innerText = 'Result: ' + result; 
    }

// greeting message based on the current time
function getCurrentHour(){
    const date = new Date();
    return date.getHours();
    // console.log(date.getFullYear())
}

 getGreetMsg =() =>{
    const currentHour = getCurrentHour();
    let greeting;

     if(currentHour < 12){
        greeting = "Good morning";
     }
     else if(currentHour < 18){
        greeting = "Good afternoon";
     }
     else{
        greeting = "Good evening";
     }
     alert(greeting);
}

const greetingBtn = document.getElementById('greeting-btn');  

// Add an event listener to the button  
greetingBtn.addEventListener('click', getGreetMsg); 


