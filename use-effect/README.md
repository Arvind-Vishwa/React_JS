# UseEffect
useEffect(function(){
     console.log("useffect called");
})
---> In this I ignore the dependency so useEffect will call again and again If 
any state change
--> I can make multiple useEffect

# with dependency
useEffect(function(){
     console.log("useffect called");
},[])
--> It is default which run one times

# state as input
useEffect(function(){
     console.log("useffect called");
},[num])
--> here num is useState when ever state change useEffect run