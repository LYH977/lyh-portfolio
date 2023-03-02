import React, { useEffect, useState } from 'react'
import { useStore } from '../../store'
import { CreditsMarkup } from '../Descriptions/Credits'
import { InfoMarkup } from '../Descriptions/Info'
import { TutorialMarkup } from '../Descriptions/Tutorial'

export const Tooltips = () => {
  const openModal = useStore((state: any) => state.openModal)
  const defaultAngleCallback = useStore(
    (state: any) => state.defaultAngleCallback
  )
  const isAllSet = useStore((state: any) => state.isAllSet)
  const [isInfoClicked, setIsInfoClicked] = useState<boolean>(false)
  const [isLocationClicked, setIsLocationClicked] = useState<boolean>(false)

  useEffect(() => {
    if (isAllSet) openModal(TutorialMarkup)
  }, [isAllSet])

  return (
    <>
      <button
        className='tooltip'
        title='List of credits'
        onClick={ () => {
          openModal(CreditsMarkup)
        } }
      >
        <img src='/love.png' alt='List of credits.' height={ 30 } width={ 30 } />
      </button>
      <button
        className='tooltip'
        title='Tutorial Video'
        onClick={ () => {
          openModal(TutorialMarkup)
        } }
      >
        <img src='/tutorial.png' alt='Tutorial.' height={ 30 } width={ 30 } />
      </button>
      <button
        className='tooltip'
        title='User Manual'
        data-clicked={ isInfoClicked }
        onClick={ () => {
          setIsInfoClicked(true)
          openModal(InfoMarkup)
        } }
      >
        <img src='/info.png' alt='User manual.' height={ 30 } width={ 30 } />
      </button>

      <button
        className='tooltip'
        title='Original Position'
        data-clicked={ isLocationClicked }
        onClick={ () => {
          setIsLocationClicked(true)
          defaultAngleCallback()
        } }
      >
        <img
          src='/location.png'
          alt='Back to original position.'
          height={ 35 }
          width={ 35 }
        />
      </button>
    </>
  )
}
