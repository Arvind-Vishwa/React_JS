# Router
## Type of Router
    1. Browser Router
    2. Memory Router
    3. Static Router
    4. Hash Router

### Installation
    npm i react-router-dom

* React doesn't provide any Inbuilt router.Mostly used is Browser Router
* wrap your APP in Browser Router 
* <BrowserRouter>
* <App>
* </BrowserRouter>

# Routes
It basically container where all routes should placed
## Route
It is particular route contain in multiple container *Routes*
        <div>
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About/>}/>
            </Routes>
        </div>

## Anchor tag replace it Link
        <Link to=''>Home</Link>