import React from 'react'

const Navabr = (props) => {

    const onChange=()=>{
        props.setTheme('Dark');
        console.log(props.theme);
    }

  return (
    <div>
        <h1>At children level :: {props.theme}</h1>
        <button
        onClick={onChange}
        >
            Change
        </button>
    </div>
  )
}

export default Navabr
