import React from 'react'

const TimelineCard = () => {
  return (
    <div className="card my-5">
        <div className="card-body">
            <h4 className="card-title text-3xl">Organization Name</h4>
            <h5 className="card-title font-bold text-xl">Stream</h5>
            <h6 className="card-text text-lg">Description</h6>
            <div className="row">
                <div className="col-4">
                    <p className="text-muted pt-3">Date</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TimelineCard