let buttons = document.querySelectorAll('button');
// console.log(buttons);
let string = "";
let mem = "0"

Array.from(buttons).forEach((button) => {
    // console.log(button.innerHTML);
    button.addEventListener('click', (e, err) => {
        // console.log(e);
        try {
            let btn_value = e.target.innerHTML;
            if (btn_value == '=') {
                string = eval(string);
                document.querySelector('input').value = string;
            }
            else if (btn_value == 'C') {
                string = ''
                document.querySelector('input').value = string;
            }
            else if (btn_value == '⊲') {
                string = string.slice(0, -1);
                document.querySelector('input').value = string;
            }
            else if (btn_value == 'M+') {
                mem = string;
            }
            else if (btn_value == 'M-') {
                mem = '0';
            }
            else if (btn_value == 'M') {
                string = mem;
                document.querySelector('input').value = mem;
            }
            else {
                string += e.target.innerHTML
                document.querySelector('input').value = string;
            }
        }
        catch (err) {
            console.log(err);
            document.querySelector('input').value = 'Error!';
        }
    })
})
