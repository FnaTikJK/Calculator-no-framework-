const screen = document.querySelector(".screen p")
let isFractionNumber = false;
let firstNumber = undefined;
let secondNumber = undefined;
let operation = undefined;
let operations = new Array('/','X','-','+','%')

function ResetCalculator(){
    firstNumber = undefined;
    secondNumber = undefined;
    operation = undefined;
    screen.textContent = '0';
    isFractionNumber = false;
}

document.querySelector(".C").onclick = () => {
    ResetCalculator();
};

document.querySelector(".calculator").onclick = (event) => {
    let classes = event.target.classList;
    if (classes.contains("button")){
        if(classes.contains("number")){
            if(screen.textContent.trim() === "0")
                screen.textContent = event.target.textContent;
            else if (operations.includes(screen.textContent.trim())){
                operation = screen.textContent.trim();
                screen.textContent = event.target.textContent;
            }
            else
                screen.textContent += event.target.textContent;
        }
        else if(classes.contains("operation")){
            if (!operations.includes(screen.textContent.trim())){
                firstNumber = new Number(screen.textContent.trim());
            }
            screen.textContent = event.target.textContent;
        }
        else if(classes.contains("backspace")){
            if (screen.textContent.at(-1) === ',')
                isFractionNumber = false;
            screen.textContent = screen.textContent.substring(0,screen.textContent.length-1);
            if(screen.textContent.length === 0)
                screen.textContent = '0';
        }
        else if(classes.contains("fraction") && !isFractionNumber){
            isFractionNumber = true;
            screen.textContent += event.target.textContent;
        }
        else if(classes.contains("result")){
            if(firstNumber){
                secondNumber = new Number(screen.textContent.trim());
                switch(operation){
                    case '/':
                        firstNumber = firstNumber/secondNumber;
                        break;
                    case 'X':
                        firstNumber = firstNumber*secondNumber;
                        break;
                    case '-':
                        firstNumber = firstNumber-secondNumber;
                        break;
                    case '+':
                        firstNumber = firstNumber+secondNumber;
                        break;
                    case '%':
                        firstNumber = firstNumber/secondNumber*100;
                        break;
                }
                screen.textContent = firstNumber;
            }
        }
        else if(classes.contains("change")){
            let str = screen.textContent.trim();
            if(!operations.includes(str))
                screen.textContent = (-1)*(new Number(str));
        }
    }
};