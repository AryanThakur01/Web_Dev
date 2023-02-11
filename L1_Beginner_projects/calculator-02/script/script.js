let string = ""
let buttons = document.body.querySelectorAll('button');
let mem;

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e, err) => {
        try {
            if (e.target.innerHTML == '=') {
                string = eval(string);
                document.querySelector('input').value = string;

            }
            else if (e.target.innerHTML == 'C') {
                document.querySelector('input').value = ""
                string = ""
            }
            else if (e.target.innerHTML == '⊲') {
                string = string.slice(0, -1);
                document.querySelector('input').value = string;
            }
            else if (e.target.innerHTML == 'M+') {
                mem = string
                document.querySelector('input').value = 'stored';
            }
            else if (e.target.innerHTML == 'M-') {
                mem = ''
            }
            else if (e.target.innerHTML == 'M') {
                document.querySelector('input').value = mem
                string = mem;
            }
            else {
                console.log(e.target.innerHTML);
                string += e.target.innerHTML
                document.querySelector('input').value = string;
            }
        } catch (err) {
            document.querySelector('input').value = 'Error!'
        }
    })
})