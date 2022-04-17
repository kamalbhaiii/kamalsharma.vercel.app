import React from 'react'

export default function RepoPresent(props){
    return(
        <div className="text-black my-5 mx-3 mx-md-0">
            <div className="card">
                <h5 className="card-header">{props.title}</h5>
                <div className="card-body">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <p className="card-text mb-3">{props.desc}</p>
                    <a href={props.link} className="btn btn-primary">Know More</a>
                </div>
            </div>
        </div>
    )
}