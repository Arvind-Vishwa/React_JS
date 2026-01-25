# Advanced Routing
##      
        <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact/client' element={<Men />}/>
        <Route path='/contact/company' element={<Women />}/>
        <Route path='*' element={<NotFound />}/>
        </Routes>
* Here I simply done a nested Routing
  
## Another way to done a Nested Routing
        <Route path='/contact' element={<Contact/>}>
        
        <Route path='client' element={<Men />}/>
        <Route path='company' element={<Women />}/>

        </Route>

        *** OutLet --> which help to show children data

## Dynamic Routing
        Route path='/about' element={<About />}>
        <Route path='/about/:id' element={<AboutDetail />}/>
        </Route>
  * here * : * will be different dynamic --> **:id** 
  
## Use Params
        This is use to check the parameter which is passed by url
        import { useParams } from 'react-router-dom'

            const AboutDetail = () => {
            const params=useParams();
            console.log(params);

            return (
            <div>
            <h1>{params.id} About Detail</h1>
            </div>
            )
            }
            export default AboutDetail

## Use Navigation
        const navigate=useNavigate();
        navigate('/home') -->Home
        navigate(+1) *Next*
        navigate(-1) *Back*

