import React from 'react'
import TimelineObject from './TimelineObject'

const Timeline = (props) => {
  return (
    <div className="container">
        <div className="heading">
            <h3 className="d-flex flex-col justify-center items-center text-3xl p-3">Timeline</h3>
        </div>
        <div className="portfolioContent">
          <TimelineObject object={props.timeline}/>
        </div>
    </div>
  )
}

export default Timeline