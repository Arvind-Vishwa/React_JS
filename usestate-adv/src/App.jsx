import React, { useState } from 'react'


// usestate we can make array,object,string,char,int
const App = () => {
  const[val,setVal]=useState({name:"Arvind",age:22});

  // const handleChange=()=>{
  //   let newNum={...val};
  //   console.log(newNum);
  //   newNum.name="Ashok";
  //   newNum.age=30;
  //   console.log(newNum);
  //   setVal(newNum);
  // }


  // array
  const[arr,setArr]=useState([10,20]);

const handleClick=()=>{
  // let newArr=[];
  // for(let i=0;i<arr.length;i++){
  //   newArr.push(arr[i]);
  // }
  // newArr.push(50);

  // 2nd method
  // let newArr=[...arr];
  // newArr.push(99);
  
  // setArr(newArr);

  // 3rd method
  setArr(prev=>[...prev,55]);   // array

  // object
  // setObj(prev=>({...prev,name:"Ashish"}));
  
  
  
}

const[count,setCount]=useState(0);

const hadleC=()=>{


  //  if I use set(count+1) --> three times value will update sigle time 
  // to increase three time we have t use
  //Batch update
  setCount(prev=>(prev+1));
  setCount(prev=>(prev+1));
  setCount(prev=>(prev+1));
}

  return (
    <div>
      {/* <h1> {val.name} <br /> {val.age}</h1>
      <button onClick={handleChange}>Click</button> */}

      {/* <button onClick={handleClick}>Click</button>
      {
        arr.map(function(ele,idx){
          return <h1>{ele}</h1>
        
        })
      } */}
      <h1>{count}</h1>
      <button onClick={hadleC}>Click</button>



    </div>
  )
}

export default App
