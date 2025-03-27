import React from "react";

function Note(){
    return (
        <div className="noteBox">
            <div className="textFieldBox">
                <input type="text" className="noteNameText" size={34} placeholder="Name your note" />
            </div>
            <div className="contentBox">
                <textarea cols={34} rows={4} placeholder="Enter some content"></textarea> 
            </div>
        </div>
    );
}

export default Note;