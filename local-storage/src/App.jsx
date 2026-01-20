import React from 'react'

const App = () => {
  // localStorage.clear();

  // localStorage.setItem("user","Arvind");
  // localStorage.setItem("age","22");
  // let user=localStorage.getItem("user");
  // let age=localStorage.getItem("age");
  // console.log(user,age);

  //  for removing the item
  // localStorage.removeItem("user")
  // localStorage.removeItem("age");

  // local storage store the string data only
  let objectUser={
    name:"Arvind",
    age:18,
    city:"Bhilai"
  }
  console.log(objectUser);
  localStorage.setItem('user',JSON.stringify(objectUser));

  let user=localStorage.getItem('user');
  // console.log(typeof(user));

  let newUser=JSON.parse(user);
  // console.log(newUser);
  return (

    <div>
      APP
    </div>
  )
}

export default App
