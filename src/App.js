import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import List from './List';
import Card from './Card';
const App = () => {

  const [inputItem, setInputItem] = useState('');

  const [item, setItem] = useState([]);
  const inputEvent = (event) => {
    setInputItem(event.target.value);
  }
  const listOfItem = () => {
    setItem((prevData) => {
      return [...prevData, inputItem]
    })
    setInputItem('');
  }
  const deleteItem = (id) => {
    console.log('deleted');
    setItem((oldData) => {
      return oldData.filter((Element, index) => {
        return index !== id;
      })
    })

  }
  return (
    <>
      {/* <div className="main_div">
        <div className="center_div">
          <br />
          <h1 className='text-align'>ToDo List</h1>
          <br />
          <div className='input-display'>

            <input type="text" placeholder='Enter Item' className='form-control' value={inputItem} onChange={inputEvent} />
            <button className='btn btn-outline-primary' onClick={listOfItem}>+</button>
          </div>

          <br />
          <ul className="list">

            {
              item.map((itemVale, index) => {
                return (<List key={index} id={index} text={itemVale}
                  onSelect={deleteItem}
                />)
              })
            }


          </ul>
        </div> 
      </div>*/}

        <Card/>
    </>
  );
}

export default App;
