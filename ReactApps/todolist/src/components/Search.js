import React from 'react';

function searching() {
   let text = document.getElementById("searching_text").value;
   alert(text+" searching ....");
   //alert(tablebackup.row[1].innerHTML); 
}

function Search() {
        return(
            <div className="input-group">
                <input id="searching_text" type="text" className="form-control" placeholder="Search item name" />
                <span className="input-group-btn">
                    <button onClick={searching} className="btn btn-info" type="button">Search</button>
                </span>
            </div>
        )
}
export default Search;