import React,{useState} from "react";
import FileSystem from "./fileSystem";

const Directory = ({data}) => {


    const [isOpen ,setIsOpen] = useState(false);

    const handelToggle = () => {
        setIsOpen(!isOpen)
    }
    
    
    return(
        <>
        <div>
            <button type="button" onClick={(e)=>handelToggle(e)}>
                {/* {isOpen ? '':''} */}
                <i class="fa fa-folder-open-o" aria-hidden="true"></i>
              {data.name}
            </button>
           
            {isOpen && <FileSystem data={data}/>}
        </div>
        </>
    )
}
export default  Directory;