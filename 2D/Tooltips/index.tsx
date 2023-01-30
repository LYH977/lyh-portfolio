import React, { useEffect, useState } from 'react'
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
  const [isInfoClicked, setIsInfoClicked] = useState<boolean>(false)
  const [isLocationClicked, setIsLocationClicked] = useState<boolean>(false)

  useEffect(() => {
    if (isAllSet) openModal(InfoMarkup)
  }, [isAllSet])


  return (
    <div
      className={ `tooltips-container${true ? ' tooltips-container-slidedown' : ''
        }` }
    >
      <button
        className='tooltip'
        onClick={ () => {
          openModal(CreditsMarkup)
        } }
      >
        <Image src='/love.png' alt='List of credits.' height={ 30 } width={ 30 } />
      </button>
      <button
        className='tooltip'
        data-clicked={ isInfoClicked }
        onClick={ () => {
          setIsInfoClicked(true)
          openModal(InfoMarkup)
        } }
      >
        <Image src='/info.png' alt='User manual.' height={ 30 } width={ 30 } />
      </button>

      <button
        className='tooltip'
        data-clicked={ isLocationClicked }
        onClick={ () => {
          setIsLocationClicked(true)
          defaultAngleCallback()
        } }>
        <Image src='/location.png' alt='Back to original position.' height={ 35 } width={ 35 } />
      </button>
    </div>
  )
}
