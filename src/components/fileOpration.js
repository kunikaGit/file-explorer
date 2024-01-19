import React, { useState } from "react";
import { Button } from "react-bootstrap";

const FileOpration = ({ onCreateFile, onDeletFile }) => {
    const [newFileName, setNewFileName] = useState("");
    const handleCreateFile = () => {
        if (newFileName.trim() !== "") {
            onCreateFile(newFileName.trim());
            setNewFileName("")
        }
        else {
            alert("enter valid file name")
        }
    }
    const handleDeletFile = () => {
        const fileToDelet = prompt('Enter file name to delet');
        if (fileToDelet) {
            onDeletFile(fileToDelet)
        }
    }
    return (
        <>
            <div className="file-opration">
            <label>Create New File</label>
            <div className="create">
                <input type="text" placeholder="new file name" value={newFileName} onChange={(e) => setNewFileName(e.target.value)}></input>
                <Button type="button" variant="primary" onClick={handleCreateFile}>Create</Button>
            </div>
            <label>Delet a File</label>
                <div className="delet">
                    <Button type="button" variant="danger" onClick={handleDeletFile}>Delet</Button>
                </div>
            </div>
        </>
    )
}
export default FileOpration;