import React from 'react';

function ItemEdit ({num,value,selected}) {
        return(
            <tr>
                <td className="text-center">{num}</td>
                <td> <input id="edit_item_name" type="text" className="form-control" defaultValue={value} /></td>
                <td className="text-center">
                    <select id="edit_item_level" className="form-control">
                        <option value={selected} selected disabled hidden>{selected}</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </td>
                <td>
                    <button type="button" id="cancel_button" className="btn btn-default btn-sm">Cancel</button>
                    <button type="button" id="save_button"   className="btn btn-success btn-sm">Save</button>
                </td>
            </tr>
        )
}

export default ItemEdit;