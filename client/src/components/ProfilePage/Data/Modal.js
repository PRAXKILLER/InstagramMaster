import React,{useState} from 'react'
import MyModal from './ShowModal'
const Modal = (props) => {
    const [showModal, SetShowModal] = useState(false);
    const closeModal =()=>SetShowModal(false);
  
  return (
    <div>
        <button className='border border-blue-800 ring-amber-300
        w-auto p-2 m-auto ' onClick={()=>SetShowModal(true)}>Open Modal</button>
         {showModal && <MyModal closemodal={closeModal} IMG={props.img}/>}
         <p className="h-8 w-2">{props.id}</p>
    </div>
  )
}

export default Modal;
