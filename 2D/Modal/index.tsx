import React from 'react'
import { useStore } from '../../store'


export const Modal = () => {
  const closeModal = useStore((state: any) => state.closeModal)
  const isModalOpen = useStore((state: any) => state.isModalOpen)
  const modalContent = useStore((state: any) => state.modalContent)



  return (
    <div className={ `modal${isModalOpen ? ' shown' : ''}` }>
      <div className='modal-content'>
        <button className='modal-close-btn' onClick={ () => closeModal() }>
          ✕
        </button>
        <section className='description'>{ modalContent }</section>
      </div>

    </div>
  )
}
