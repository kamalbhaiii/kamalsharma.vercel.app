import React from 'react'

export default function Mode(){
    return(
        <div>
            <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Day Mode</label>
            </div>
        </div>
    )
}