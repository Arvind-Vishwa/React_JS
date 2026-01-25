import React from 'react'
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
