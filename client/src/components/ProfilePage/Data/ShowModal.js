import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const ShowModal = (props) => {
  return (
    
      <>
      
      <div className='fixed left-0 right-0 bottom-0 top-0 bg-black/20 '> </div>
      <div className='fixed border top-2/4 left-2/4 max-w-[100rem] max-h-[100rem] origin-center  border-black  '>
      
            <FontAwesomeIcon className='h-6 lg cursor-pointer' icon={faXmark} onClick={props.closemodal}/>
            {/* <img src={props.IMG.url} alt={props.IMG.id} /> */}
      </div>
        
     </>
    
  )
}

export default ShowModal;
