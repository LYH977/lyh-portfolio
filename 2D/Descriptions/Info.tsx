import Image from 'next/image'
import { isMacOS } from '../../utils/checker'
import {
  deviceType,
} from 'detect-it';

const getFocusObjInfo = () => {
  let markupText = <p>Left Click (computer)<br /><br />Touch (mobile)</p>
  if (deviceType === 'mouseOnly') {
    markupText = <p>Left Click</p>
  }
  else if (deviceType === 'touchOnly') {
    markupText = <p>Touch</p>
  }
  return markupText
}

const getDetailPopupInfo = () => {
  let markupText = <p>Right Click (computer)<br /><br />Long Press (mobile)</p>
  if (deviceType === 'mouseOnly') {
    markupText = <p>Right Click</p>
  }
  else if (deviceType === 'touchOnly') {
    markupText = <p>Long Press</p>
  }
  return markupText
}

const getZoomInfo = () => {
  let markupText = <p>Mouse Scroll (computer)<br /><br />2 Fingers Zoom Gesture (mobile)</p>
  if (deviceType === 'mouseOnly') {
    markupText = <p>Mouse Scroll</p>
  }
  else if (deviceType === 'touchOnly') {
    markupText = <p>2 Fingers Zoom Gesture</p>
  }
  return markupText
}


export const InfoMarkup = (
  <>
    <h1>Info</h1>
    <div className='grid-container'>

      <p>
        <Image src='/location.png' alt='location.' height={ 30 } width={ 30 } />{ ' ' }
        icon
      </p>
      <p>Back to default position</p>

      <p>
        <Image
          src='/love.png'
          alt='hand holding love.'
          height={ 30 }
          width={ 30 }
        />{ ' ' }
        icon
      </p>
      <p>Open credit popup</p>

      <p>{ getFocusObjInfo() }</p>
      <p>Focus on object</p>

      <p>{ getDetailPopupInfo() }</p>
      <p>Open detail popup</p>

      <p>{ getZoomInfo() }</p>
      <p>Zoom in and out</p>

      { deviceType !== 'mouseOnly' && (<><p>
        2 fingers slide gesture (mobile)
      </p>
        <p>Move camera around</p></>) }


    </div>
    { isMacOS() && (
      <p>
        <small>
          *Blooming effect does not work well on Mac, but great on other
          platforms (Android, iPhone, Windows...)
        </small>
      </p>
    ) }
  </>
)
