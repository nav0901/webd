import React from 'react'
import JobCard from './JobCard'
import jobdata from '../../JobData'

const Cards = () => {

  const data =()=>{
    return(jobdata)
}
  
  return (
    <div className="Cards">
      {data().map((data)=> 
      <JobCard 
        title={data.title}
        loc={data.location}
        key={data.key}
      /> 
      )}
    </div>
  )
}

export default Cards