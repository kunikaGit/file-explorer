import React,{useState} from "react";
import FileSystem from "./fileSystem";
import fileData from "./fileData";
import FileOpration from "./fileOpration";

const FileExplorer = () =>{

const [fileSystem, setFileSystem] = useState(fileData)

    /////functions for create and delet the files

    const handelCreateFile = (newFileName) =>{
        const newFile = {
            name: newFileName,
            type:'file'
        };
        //change state of previous data
        setFileSystem((old)=>(
            {...old,children:[...old.children,newFile]}
            ))
    }
    const handelDeletFile = (fileName) =>{

        setFileSystem((old)=>(
            {...old,children: old.children.filter((item)=> item.name !== fileName)}
            ))
    }
    return(
        <>
            <h2>Directories</h2>
            <FileSystem data={fileSystem}/>
            <FileOpration onCreateFile={handelCreateFile} onDeletFile={handelDeletFile}/>
        </>
    )
}
 export default FileExplorer