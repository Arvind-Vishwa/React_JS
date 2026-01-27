# Context API
1. Create the Data
2. Provide the Data
3. Use the Data

## To Use It Firstly 
    Wrap the App.jsx with Context API data
    <ThemeContext>
      <App />
    </ThemeContext>

    In ThemeContext.jsx use it -->

    const ThemeContext = (props) =>     {
    return (
        <div>
      {props.children}
        </div>
     )
    }

## After this --> Provide Data Every One

    import { createContext } from 'react'
    export const ThemeContextData=createContext();
    const ThemeContext = (props) => {
    return (
            <div>
            <ThemeContextData. value='Arvind'>
                {props.children}
            </ThemeContextData. Provider>
            
            </div>
        )
        }

## USE it data
        import { ThemeContextData } from '../Context/ThemeContext';
        const Navbar = (props) => {
            const data=useContext(ThemeContextData);
            console.log(data);
        return (
            <div className='navbar'>
            <h2>{data}</h2>
            <Nav2 theme={props.theme}/>
            </div>
        )
        }

