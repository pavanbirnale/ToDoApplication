import React, { useState } from 'react'
import NewList from './NewList';
import './index.css'
const Card = () => {
    const [item, setItem] = useState('');
    const inputEvent = (event) => {
        setItem(event.target.value)
    }

    const [list, setList] = useState([]);

    const DataList = (e) => {
        if (item == '') {
            alert('please Enter some data and then add to list')
            return;
        }
        e.preventDefault();
        setList((oldData) => {
            return [...oldData, item]
        });

        setItem('')
    }
    
    const deleteItem=(id)=>{
        console.log('deleted');
        setList((oldData)=>{
            return oldData.filter((Element,index)=>{

                return index!==id
            })
        })
    }
    return (
        <>
            <section className="vh-100" style={{ backgroundColor: '#e2d5de' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">

                            <div className="card" style={{ borderRadius: '15px' }}>
                                <div className="card-body p-5">

                                    <h6 className="mb-3">Awesome Todo List</h6>

                                    <form className="d-flex justify-content-center align-items-center mb-4">
                                        <div className="form-outline flex-fill">
                                            <input type="text" id="form3" className="form-control form-control-lg" placeholder='Enter new Task' value={item} onChange={inputEvent} />
                                            <label className="form-label" htmlFor="form3">What do you need to do today?</label>
                                        </div>
                                        <button type="submit" className="btn btn-outline-success btn-lg ms-2" onClick={DataList}>Add</button>
                                    </form>
                                    <ul className="list-group mb-0">
                                        {
                                            list.map((curEle,index) => {
                                                return <NewList key={index} id={index} text={curEle} onSelect={deleteItem}/>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Card
