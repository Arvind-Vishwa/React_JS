import React from 'react'
import {Bookmark} from 'lucide-react'
const App = () => {
  return (
    <div className='parent'>
      <div className="card">
        <div className="top">
          <img src='https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png'></img>
          <button>Save <Bookmark color="#e90b7a" strokeWidth={1.25} /></button>
        </div>
        <div className="center">

        </div>
        <div className="bottom">

        </div>
      </div>
    </div>
  )
}

export default App
