let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerText == '='){
            string= eval(string);
            input.value = string;
        }
        else if (e.target.innerText=='AC'){
            string = "";
            input.value = string
        }
        else if(e.target.innerText=='DEL'){
            string = string.substring(0,string.length-1);
            input.innerHTML = string
        }
        else{
            string += e.target.innerText;
            input.value = string;
        }
    })
})
