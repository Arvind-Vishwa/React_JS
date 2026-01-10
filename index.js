let body=document.querySelector('body');
let h1=document.createElement('h1');
h1.innerHTML="Hello from Arvind"

console.log(h1);
body.appendChild(h1);

// two types
// import and export
// named and default
// named --> export const arr={1,2,4};  import {arr} from './'
// default --> export default arr;   import changeArr froom'./'