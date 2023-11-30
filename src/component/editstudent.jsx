import React, { useEffect } from "react"
import { useState} from "react"
import "../App.css/"
import { Editalldata } from "./main"

const Editstudent=({studentdata,setstudentdata,show,setshow,editid})=>{
    const[studentname,setstudentname]=useState("")
    const[studentcourse,setstudentcourse]=useState("")
    const[studentbatch,setstudentbatch]=useState("")
    const[index,setindex]=useState()


    const updatetododetails=()=>{
        const editdata={
            name:studentname,
            course:studentcourse,
            batch:studentbatch
   
        }
        Editalldata(editid,editdata).then((data)=>{if(data){studentdata[index]=editdata   
           setstudentdata([...studentdata])
           setshow(!show)
        }})  
    }
    useEffect(()=>{
       const selecttodo=studentdata.filter((val)=>editid == val.id)
       const edidindex=studentdata.findIndex((val)=>editid == val.id)
       setindex(edidindex)
       setstudentname(selecttodo[0].name)
       setstudentcourse(selecttodo[0].course)
       setstudentbatch(selecttodo[0].batch)
    },[editid])

    return(
        <div className="inputform">
           <div className="iform">
        <p>Name</p>
            <input type="text" placeholder="Student Name" className="iname" value={studentname} onChange={(e)=>setstudentname(e.target.value)}/>
        <p>Course Name</p>
            <input type="text" placeholder="Course" className="icourse" value={studentcourse} onChange={(e)=>setstudentcourse(e.target.value)}/>
        <p>Batch</p>
            <input type="text" placeholder="Batch" className="ibatch" value={studentbatch} onChange={(e)=>setstudentbatch(e.target.value)}/>
            <button className="ubtn" onClick={updatetododetails}>Update</button>
        </div>
            </div> 
          
    )
}

export default Editstudent