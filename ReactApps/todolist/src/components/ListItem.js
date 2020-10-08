import React from 'react';

function ListItem () {
        return(
                <div className="panel panel-success">
                  <div className="panel-heading">List Item</div>
                  <div className="mytableFixHead">
                    <table id="ItemTable" className="table table-hover">
                        <thead> 
                            <tr>
                                <th style={{ width: '10%' }} className="text-center"># Time</th>
                                <th>Item Name</th>
                                <th style={{ width: '15%' }} className="text-center">Level</th>
                                <th style={{ width: '15%' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody id="ListItemTable">
                            <tr></tr>
                        </tbody>
                    </table>
                  </div>
                </div>
                )
}

export default ListItem;