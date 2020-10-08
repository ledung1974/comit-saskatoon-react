import React from 'react';

function Item({num,name,labellevel,level}) {
    return(
        <tr>
            <td className="index_item text-center">{num}</td>
            <td>{name}</td>
            <td className="text-center"> <span className={labellevel}>{level}</span> </td>
            <td>
               <button type="button" className="edit_button btn btn-warning btn-sm">Edit</button>
               <button type="button" className="delele_button btn btn-danger btn-sm">Delete</button>
            </td>
        </tr>
    )
}

export default Item;