import React from 'react'
import { useStore } from '../../store'
import { CreditsMarkup } from '../Descriptions/Credits'
import { InfoMarkup } from '../Descriptions/Info'

export const Tooltips = () => {
  const openModal = useStore((state: any) => state.openModal)
  const defaultAngleCallback = useStore(
    (state: any) => state.defaultAngleCallback
  )
  const isAllSet = useStore((state: any) => state.isAllSet)

  return (
    <div
      className={ `tooltips-container${isAllSet ? ' tooltips-container-slidedown' : ''
        }` }
    >
      <button
        className='tooltip'
        onClick={ () => {
          openModal(CreditsMarkup)
        } }
      >
        🎖
      </button>
      <button
        className='tooltip'
        onClick={ () => {
          openModal(InfoMarkup)
        } }
      >
        ℹ
      </button>

      <button className='tooltip' onClick={ defaultAngleCallback }>
        ⌖
      </button>
    </div>
  )
}
