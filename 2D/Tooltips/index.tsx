import React from 'react'
import { useStore } from '../../store'
import { CreditsMarkup } from '../Descriptions/Credits'
import { InfoMarkup } from '../Descriptions/Info'
import Image from 'next/image'

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
        <Image src='/love.png' alt='List of credits.' height={ 25 } width={ 25 } />
      </button>
      <button
        className='tooltip'
        onClick={ () => {
          openModal(InfoMarkup)
        } }
      >
        <Image src='/info.png' alt='User manual.' height={ 25 } width={ 25 } />
      </button>

      <button className='tooltip' onClick={ defaultAngleCallback }>
        <Image src='/location.png' alt='Back to original position.' height={ 20 } width={ 20 } />
      </button>
    </div>
  )
}
