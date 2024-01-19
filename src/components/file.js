import React,{useState} from "react";
import fileData from "./fileData";

const File = ({data}) => {
    // const handleDeletFile = ()=>{
    //     const fileToDelet = prompt('Enter file name to delet');
    //     if(fileToDelet){
    //         onDeletFile(fileToDelet)
    //     }
    // }

    return(
        <>
        <div>
            <button type=" button" className="file-name">
            <i class="fa fa-file" aria-hidden="true"></i>
         {data.name}
            </button>
       </div>
        </>
    )
}
export default  File;