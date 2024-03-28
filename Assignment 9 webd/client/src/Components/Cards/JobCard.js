import React from 'react'

const JobCard = (props) => {
  return (
    <div className="JobCard">
      <div className="content">
        <h1>{props.title}</h1>
        <h2>{props.loc}</h2>
        <button>Apply Now</button>
      </div>
    </div>
  )
}

export default JobCard