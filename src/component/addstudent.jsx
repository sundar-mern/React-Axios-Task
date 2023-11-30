import React, { useState } from "react";
import "../App.css/"
import { Addalldata } from "./main";

const Addstudent=({studentdata,setstudentdata})=>{
    const[studentname,setstudentname]=useState("")
    const[studentcourse,setstudentcourse]=useState("")
    const[studentbatch,setstudentbatch]=useState("")
    const addtododetails=()=>{
        const newdetails={
            name:studentname,
            course:studentcourse,
            batch:studentbatch
        }
        Addalldata(newdetails).then((data)=>{if (data){ setstudentdata([...studentdata,newdetails])
            setstudentname("")
            setstudentcourse("")
            setstudentbatch("")}
        else{alert("cannot add data")}})
       
    }
return(
    <div className="inputform">
        <div className="iform">
        <p>Name</p>
            <input type="text" placeholder="Student Name" className="iname" value={studentname} onChange={(e)=>setstudentname(e.target.value)}/>
            <p>COURSE NAME</p>
            <input type="text" placeholder="COURSE NAME" className="icourse" value={studentcourse} onChange={(e)=>setstudentcourse(e.target.value)}/>
            <p>Batch</p>
            <input type="text" placeholder="Batch" className="ibatch" value={studentbatch} onChange={(e)=>setstudentbatch(e.target.value)}/>
            <button className="abtn" onClick={addtododetails}>Add</button>  
            </div> 
    </div>
)
}   
export default Addstudent