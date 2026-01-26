# Data can also be transfer from child to parent
## By using the 
    const App = () => {
    const[theme,setTheme]=useState('light');
    return (
        <div>
            <h1>At parent level ::{theme}</h1>
            <Navabr theme={theme} setTheme={setTheme} />
        </div>
            )}
    Simply passing then Navabr will receive it

## Child will be -->
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

## I love things to build
