import React from 'react';

function sortTable({sorttype}) {
  let table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("ItemTable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 2; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      
      /*Get the two item names you want to compare,
      one from current row and one from the next:*/
      if (sorttype.search("Name")>-1) { //Sort by Item Name 
          x = rows[i].getElementsByTagName("TD")[1];
          y = rows[i + 1].getElementsByTagName("TD")[1];
      } else if (sorttype.search("Level")>-1) {//Sort by "Level" High Medium Small
           x = rows[i].getElementsByTagName("SPAN")[0];
           y = rows[i + 1].getElementsByTagName("SPAN")[0];
        } else {//Sort by Time
             x = rows[i].getElementsByTagName("TD")[0];
             y = rows[i + 1].getElementsByTagName("TD")[0];
          }

      if (sorttype.search("ASC") > -1) {
             //check if the two rows should switch place by ASC
             if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                  //if so, mark as a switch and break the loop:
                  shouldSwitch = true;
                  break;
             }
      }
      else  
      {     //check if the two rows should switch place by DESC
             if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                  //if so, mark as a switch and break the loop:
                  shouldSwitch = true;
                  break;
             } 
      }
      
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}


function click_sorttype() {
    let sorttype = document.getElementById("selectedsorttype").value;
    sortTable({sorttype});
}

function Sort() {
        return(
            <div className="form-inline">
                <label className="mylabel">Sort by >>> </label>
                <select id="selectedsorttype" className="form-control" onChange={click_sorttype}>
                        <option selected disabled hidden>Not sorted</option>
                        <option>Name ASC</option>
                        <option>Name DESC</option>
                        <option disabled>--------------</option>
                        <option>Level ASC</option>
                        <option>Level DESC</option>
                        <option disabled>--------------</option>
                        <option>Time ASC</option>
                        <option>Time DESC</option>
                </select>
            </div>
        )
}

export default Sort;
