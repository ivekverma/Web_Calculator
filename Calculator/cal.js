function hide() {
    let firsts = document.querySelectorAll('.first');
    Array.from(firsts).forEach(e => {
        e.style.display = 'none';
    })
    let seconds = document.querySelectorAll('.second');
    Array.from(seconds).forEach(e => {
        e.style.display = 'flex';
    })
    return;
}
function show() {
    let firsts = document.querySelectorAll('.first');
    Array.from(firsts).forEach(e => {
        e.style.display = 'flex';
    })
    let seconds = document.querySelectorAll('.second');
    Array.from(seconds).forEach(e => {
        e.style.display = 'none';
    })
    return;
}
let buttons = document.getElementsByClassName('btn');
let st = "";
let ans = "";

Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerHTML){
            case "AC":
                st = "";
                ans = st;
                document.querySelector('#int').value = "0";
                break;              
       
            case "C":
                let ab = st.slice(0, st.length - 1);
                console.log(ab);
                st = ab;
                ans = ab;
                document.querySelector('#int').value = st;
                break;
        
            case "x!":
                let newst = "";
                st = st + "!";
                document.querySelector('#int').value = st;
                let num = st.length;
                while (Number.parseInt(st.charAt(num - 2)) >= 0 && Number.parseInt(st.charAt(num - 2)) <= 9) {
                    newst = st.charAt(num - 2) + newst;
                    num--;
                }
                let abc = st.slice(0, num - 1);
                console.log(abc);
                let n = Number.parseInt(newst);
                console.log(typeof (n));
                let fact = 1;
                for (let i = 1; i <= n; i++) {
                    fact = fact * i;
                }
                
                st = abc + fact;
                ans = abc + fact;
                break;
           
            case "sin":                
            case "cos":                
            case "tan":                
                ans = ans + "Math." + e.target.innerHTML + "((Math.PI)/180*";
                st = st + e.target.innerHTML + "(";
                document.querySelector('#int').value = st;
                break;
        
            case "cot":    
            case "sec":    
            case "cosec":    
                if (e.target.innerHTML === "cosec") {
                    ans = ans + "(1)/Math.sin((Math.PI)/180*";
                    st = st + e.target.innerHTML + "(";
                    document.querySelector('#int').value = st;
                }
                else if (e.target.innerHTML === "sec") {
                    ans = ans + "(1)/Math.cos((Math.PI)/180*";
                    st = st + e.target.innerHTML + "(";
                    document.querySelector('#int').value = st;
                }
                else {
                    ans = ans + "(1)/Math.tan((Math.PI)/180*";
                    st = st + e.target.innerHTML + "(";
                    document.querySelector('#int').value = st;
                }
                break;
            
                case "sinh":                
                case "cosh":                
                case "tanh":                
                ans = ans + "Math." + e.target.innerHTML + "((Math.PI)/180*";
                st = st + e.target.innerHTML + "(";
                document.querySelector('#int').value = st;
                break;

            case "e^x":
                st = st + "e^";
                ans = ans + "2.718281828459045**";
                document.querySelector('#int').value = st;
                break;
        
            case "1/x":
                st = st + "^-1";
                ans = ans +"**-1";
                document.querySelector('#int').value = st;
                break;
        
            case "^":
                ans = ans + "**"
                st = st + e.target.innerHTML;
                document.querySelector('#int').value = st;
                break;
        
            case "^2":
                ans = ans + "**2"
                st = st + e.target.innerHTML;
                document.querySelector('#int').value = st;
                break;
        
            case "^3":
                ans = ans + "**3"
                st = st + e.target.innerHTML;
                document.querySelector('#int').value = st;
                break;

            case "\u221A":
                ans=ans+"Math.sqrt(";
                st=st+"\u221A"+"(";
                document.querySelector('#int').value = st;
                break;
                
            case "\u221B":
                ans=ans+"Math.cbrt(";
                st=st+"\u221B"+"(";
                document.querySelector('#int').value = st;
                break;
                
            case "log":
                ans=ans+"Math.log10(";
                st=st+e.target.innerHTML+"(";
                document.querySelector('#int').value = st;
                break;
                
            case "ln":
                ans=ans+"Math.log(";
                st=st+e.target.innerHTML+"(";
                document.querySelector('#int').value = st;
                break;
                
            case "=":
                ans = eval(ans).toFixed(2);
                console.log(ans);
                document.querySelector('#int').value = ans;
                st = ans;
                break;
            default:
                ans = ans + e.target.innerHTML;
                st = st + e.target.innerHTML;
                document.querySelector('#int').value = st;
                break;
        }
        
     
        
       
    })
    
})