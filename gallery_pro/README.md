# Gallery Project 
In this Project I leaarn a React Pagination 
--> I use a UseEffect to call when Pge loaded the data should automatically come
--> Added two Button like Prev and Next
--> For button I implemnt useState and give initial index 1 
--> for prev <button 
        onClick={()=>{
          if(index > 1){
            setIndex(index-1);
            setUserData([]);
          }
        }
--> for Next 
        onClick={()=>{setUserData([]) 
              setIndex(index+1)}}

## UseEffect 
---> use the dependency with index
  useEffect(function(){
    getData();
  },[index])
--> It help the user when enter next button it again called the useEffect 

## Build the Two state
const [userdata,setUserData]=useState([]);
const [index,setIndex]=useState(1);

## Show data in UI
if(userdata.length > 0){
    printUserData=userdata.map(function(el,idx){
      return <div key={idx}>
        <a href={el.url} target='_blank'>
        <div className='h-40 w-44 overflow-hidden bg-white rounded-xl'>
        <img className='h-full w-full object-cover' src={el.download_url} alt='img'/>
        </div>
        <h2 className='font-bold text-md'>{el.author}</h2>
        </a>
      </div>
    })

    ## I love to build things!