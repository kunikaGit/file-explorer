import React,{useState} from "react";
import Directory from "./directory";
import File from "./file";



const FileSystem = ({data}) =>{

    return(
        <>
        <div className="all-menu">
            {data.children.map((item)=>(
                item.type === 'folder' ?
                (<Directory key={item.name} data={item}/>) 
                : 
                (
                <File key= {item.name} data={item}/>
                )
            ))}
        </div>
        </>
    )
}
 export default FileSystem;