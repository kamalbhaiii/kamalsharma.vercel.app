import { useEffect, useState } from "react";
import styles from "../styles/TimelineObject.module.css";
import TimelineCard from "./TimelineCard";

const TimelineObject = (props) => {
  // props.object[0].map((res,key)=>{
  //   if(key % 2 === 0){
  //     console.log("Printed beacuse key === 0")
  //     console.log(res)
  //   }
  //   else{
  //     console.log("Printed beacuse key not === 0")
  //     console.log(res)
  //   }
  // })

  const [data, setData] = useState({
    rightData: [],
    leftData: [],
  })

  useEffect(()=>{
    props.object[0].map((res,key)=>{
      if(key === 0 || key % 2 === 0){
        setData({
          ...data,
          rightData:[res]
        })
      }
    })
  }, [])

  useEffect(()=>{
    props.object[0].map((res,key)=>{
      if(key % 2 === 1){
        setData({
          ...data,
          leftData:[res]
        })
      }
    })
  }, [])

  console.log(data)

  return (
    <div className="container">
      <div className="row">
          <div className="col-12 col-lg-4" id={styles.hideRightOne}></div>
          <div className="col-12 col-lg-4 d-flex flex-col justify-center items-center" id={styles.hideRightTwo}>
            <div className={styles.vl}></div>
          </div>
        <div className="col-12 col-lg-4">
          <TimelineCard />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-4">
          <TimelineCard />
        </div>
          <div className="col-12 col-lg-4 d-flex flex-col justify-center items-center" id={styles.hideLeftOne}>
            <div className={styles.vl}></div>
          </div>
          <div className="col-12 col-lg-4" id={styles.hideLeftTwo}></div>
        </div>
    </div>
  );
};

export default TimelineObject;
