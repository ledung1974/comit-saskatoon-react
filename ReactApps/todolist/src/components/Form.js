import React from 'react';
import Item from './Item';
import ItemEdit from './ItemEdit';
import { renderToString } from 'react-dom/server';

const max = 10;// maximum items can be added
let ItemNumber = 0; 
let one_row_backup ="";

//------------------------------------------------------------------------------------
function cancel_edit_a_row() {
  let i = this.parentNode.parentNode.rowIndex;
  document.getElementById("ItemTable").rows[i].innerHTML=one_row_backup;
  //Enable Add button and Sort by
  document.getElementById("add_item_button").disabled = false;
  document.getElementById("selectedsorttype").disabled = false;
   //Enable all edit_a_row and delete_a_row buttons
  let buttons = document.querySelectorAll(".delele_button").length;
  for (let k = 0; k < buttons ; k++) {
              document.querySelectorAll(".delele_button")[k].disabled = false;
              document.querySelectorAll(".edit_button")[k].disabled = false;
              document.querySelectorAll(".delele_button")[k].addEventListener("click", delete_a_row);
              document.querySelectorAll(".edit_button")[k].addEventListener("click", edit_a_row);
  }
};

//------------------------------------------------------------------------------------
function save_a_row() {
  let i = this.parentNode.parentNode.rowIndex;
  let itemcode = document.getElementById("ItemTable").rows[i].cells[0].innerHTML;
  let n = document.getElementById("edit_item_name").value;
  let v = document.getElementById("edit_item_level").value;
  let l="";
  switch(v) {
            case "Medium":
               l ="label label-info";
               break;
           case "High":
               l ="label label-danger";
               break;
           default:
               l ="label label-default";
   } 
   
    let savedrow = <Item num={itemcode} 
                        name={n}
                        labellevel={l} 
                        level={v}
                   />;
    let saverowstring = renderToString(savedrow);
    document.getElementById("ItemTable").rows[i].innerHTML=saverowstring;
  
  //Enable Add button and Sort by
  document.getElementById("add_item_button").disabled = false;
  document.getElementById("selectedsorttype").disabled = false; 
  //Enable all edit_a_row and delete_a_row buttons
  let buttons = document.querySelectorAll(".delele_button").length;
  for (let k = 0; k < buttons ; k++) {
              document.querySelectorAll(".delele_button")[k].disabled = false;
              document.querySelectorAll(".edit_button")[k].disabled = false;
              document.querySelectorAll(".delele_button")[k].addEventListener("click", delete_a_row);
              document.querySelectorAll(".edit_button")[k].addEventListener("click", edit_a_row);
  }
  
  //When save the editing item --> Item table is not sorted
  document.getElementById("selectedsorttype").value = "Not sorted";
};
  
//------------------------------------------------------------------------------------
function edit_a_row() {
  //Disable Add button and Sort by
  document.getElementById("add_item_button").disabled = true;
  document.getElementById("selectedsorttype").disabled = true;
  //Disable all edit_a_row and delete_a_row buttons
  let buttons = document.querySelectorAll(".delele_button").length;
  for (let k = 0; k < buttons ; k++) {
              document.querySelectorAll(".delele_button")[k].disabled = true;
              document.querySelectorAll(".edit_button")[k].disabled = true;
        }

  let i = this.parentNode.parentNode.rowIndex;
  let itemcode = document.getElementById("ItemTable").rows[i].cells[0].innerHTML;
  let n = document.getElementById("ItemTable").rows[i].cells[1].innerHTML;
  let v = document.getElementById("ItemTable").rows[i].cells[2].innerHTML;
  let l="";
  if (v.includes("Small")) {l="Small"};
  if (v.includes("Medium")) {l="Medium"};
  if (v.includes("High")) {l="High"};
  
  //Backup the row for canceling function 
  one_row_backup = document.getElementById("ItemTable").rows[i].innerHTML;
  //Change the row to Editing mode
  let editingrow = <ItemEdit num={itemcode} 
                             value={n}
                             selected={l}
                    />;
  let editingrowstring = renderToString(editingrow);
  document.getElementById("ItemTable").rows[i].innerHTML=editingrowstring;
  document.getElementById("cancel_button").addEventListener("click",cancel_edit_a_row);
  document.getElementById("save_button").addEventListener("click",save_a_row);
  document.getElementById("save_button").disabled=true;
  document.getElementById("edit_item_name").addEventListener("input",enable_save);
  document.getElementById("edit_item_level").addEventListener("change",enable_save);
  
};

function enable_save() {
    document.getElementById("save_button").disabled=false;
}

//----------------------------------------------------------------------------
function delete_a_row() {
    let i = this.parentNode.parentNode.rowIndex;
    document.getElementById("ItemTable").deleteRow(i);
    ItemNumber--;
};

//----------------------------------------------------------------------------
function click_add() {
    let n = document.getElementById("newitemname").value; //for name
    let d = new Date();
    let itemcode =   d.getFullYear().toString()+"/"
                    +(d.getMonth()+1).toString()+"/"
                    +d.getDate().toString()+" "
                    +d.getHours().toString()+":"
                    +d.getMinutes().toString()+":"
                    +d.getSeconds().toString();
    if (n!=="" && ItemNumber<max) 
    {
        ItemNumber++;
        let v = document.getElementById("selectedlevel").value; //for level
        let l=""; //for labellevel 
        switch(v) {
            case "Medium":
               l ="label label-info";
               break;
           case "High":
               l ="label label-danger";
               break;
           default:
               l ="label label-default";
           
        } 
        
        let newrow = <Item num={itemcode} 
                           name={document.getElementById("newitemname").value}
                           labellevel={l} 
                           level={v}
                      />;
        let newrowstring = renderToString(newrow);
        let tabletbody = document.getElementById ("ListItemTable");
        let currentrow = tabletbody.innerHTML;
        tabletbody.innerHTML=currentrow+newrowstring;
        document.getElementById("newitemname").value="";
        
        //add click Event to all edit and delete buttons with edit_a_row and delete_a_row functions
        let buttons = document.querySelectorAll(".delele_button").length;
        for (let i = 0; i < buttons ; i++) {
              document.querySelectorAll(".delele_button")[i].addEventListener("click", delete_a_row);
              document.querySelectorAll(".edit_button")[i].addEventListener("click", edit_a_row);
        }
        
        //When adding a new item --> Item table is not sorted
        document.getElementById("selectedsorttype").value = "Not sorted";

    }
    else
    {
        if (ItemNumber>=max) {alert("Maximum "+ max + " items have been added!")}
        else {alert("Please enter an item name!")}
    }
}   

//----------------------------------------------------------------------------
function Form() 
{
        return(
            <form className="form-inline">
                <div className="form-group">
                    <select id="selectedlevel" className="form-control">
                        <option value={"Small"}>Small</option>
                        <option value={"Medium"}>Medium</option>
                        <option value={"High"}>High</option>
                    </select>
                </div>
                <button id="add_item_button" onClick={click_add} type="button" className="btn btn-primary">Add</button>
            </form>
        )
}


export default Form;