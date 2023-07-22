import React from 'react'

const List = (props) => {

    const deleteItem=()=>{
        console.log('deleted');
    }
  return (
    <>
       <div className="list-style">
        <button className='btn btn-outline-danger' onClick={()=>{
            props.onSelect(props.id)
        }}>-</button>
        <li>{props.text}</li>
       </div>

    </>
  )
}

export default List
