import React from 'react'
import RepoPresent from '../Components/RepoPresent'

const Work = (props) => {
  return (
    <div className="text-white d-flex flex-col justify-center items-center">
        <h2 className="text-3xl text-center p-3">
            My Projects
        </h2>
        <div>
        {
          props.repo.map((val, key)=>{
            return <RepoPresent key={key} title={val["repo-title"]} desc={val["repo-desc"]} link={val["repo-link"]} />
          })
        }
        </div>
    </div>
  )
}

export default Work