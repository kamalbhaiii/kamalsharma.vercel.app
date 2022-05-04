import React from "react";
import RepoPresent from "../Components/RepoPresent";

const Work = (props) => {
  return (
    <div>
      <div className="text-white d-flex flex-col justify-center items-center">
        <h2 className="text-3xl text-center p-3">My Projects</h2>
      </div>
      <div className="container">
        <div className="row">
        {
  props.repo.map((val, key)=>{
    return <RepoPresent key={key} title={val["repo-title"]} desc={val["repo-desc"]} link={val["repo-link"]} />
  })
}
        </div>
        </div>
    </div>
  );
};

export default Work;
// {
//   props.repo.map((val, key)=>{
//     return <RepoPresent key={key} title={val["repo-title"]} desc={val["repo-desc"]} link={val["repo-link"]} />
//   })
// }

{/* <div>
div1
</div>
<div>
div2
</div>
<div>
div3
</div> */}