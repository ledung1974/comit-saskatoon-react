import React from 'react';

function clear_newitem() {
    document.getElementById("newitemname").value="";
}

function InputItem() {
        return(
            <div className="input-group">
                <input id="newitemname" type="text" className="form-control" placeholder="New item name" />
                <span className="input-group-btn">
                    <button className="btn btn-info" type="button" onClick={clear_newitem}>Clear</button>
                </span>
            </div>
        )
}
export default InputItem;