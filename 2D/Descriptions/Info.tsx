import Image from 'next/image'
import { isMacOS } from '../../utils/checker'

export const InfoMarkup = (
  <>
    <h1>Info</h1>
    <div className='grid-container'>
      <p>Click</p>
      <p>Focus on object</p>

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

      <p>
        Right Click (computer)<br /><br />
        Long Press (mobile)
      </p>
      <p>Open detail popup</p>

      <p>
        Mouse Wheel (computer)<br /><br />
        2 fingers zoom gesture (mobile)
      </p>
      <p>Zoom in and out</p>

      <p>
        2 fingers slide gesture (mobile)
      </p>
      <p>Move camera around</p>


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
