import React from 'react'
import { useStore } from '../../store'
import { CreditsMarkup } from '../Descriptions/Credits'
import { InfoMarkup } from '../Descriptions/Info'

export const Tooltips = () => {
  const openModal = useStore((state: any) => state.openModal)
  const defaultAngleCallback = useStore(
    (state: any) => state.defaultAngleCallback
  )

  return (
    <div className='tooltips-container'>
      <div className='tooltip' onClick={ () => {
        openModal(CreditsMarkup)
      } }>
        🎖
      </div>
      <div
        className='tooltip'
        onClick={ () => {
          openModal(InfoMarkup)
        } }
      >
        ℹ
      </div>

      <div className='tooltip' onClick={ defaultAngleCallback }>
        ⌖
      </div>
    </div>
  )
}
