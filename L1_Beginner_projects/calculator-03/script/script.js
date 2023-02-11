let string = ''
const buttons = document.getElementsByClassName('button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (b, error) => {
        try {
            if (b.target.innerHTML == '=') {
                document.body.querySelector('input').value = eval(string);
                string = eval(string);
            }
            else if (b.target.innerHTML == 'C') {
                document.body.querySelector('input').value = '';
                string = '';
            }
            else if (b.target.innerHTML == '⊲') {
                string = string.slice(0, -1);
                document.body.querySelector('input').value = string;

            }
            else {
                const str = b.target.innerHTML;
                string += str;
                document.querySelector('input').value = string;
            }
        }
        catch (error) {
            document.querySelector('input').value = "Error!";
        }
    })
})
