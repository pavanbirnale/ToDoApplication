import React from 'react'

const NewList = (props) => {
    return (
        <div key={props.index}>
            <li  className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                <div className="d-flex align-items-center">

                    <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                    <span>{props.text}</span>
                </div>
                <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
                    <button id={props.index} className='btn btn-outline-danger' onClick={()=>{ props.onSelect(props.id)}}>remove</button>
                </a>
            </li>
        </div>
    )
}

export default NewList;
