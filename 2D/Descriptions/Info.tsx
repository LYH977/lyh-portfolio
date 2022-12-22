import Image from 'next/image'

export const InfoMarkup = (
  <>
    <h1>Info</h1>
    <div className="grid-container">
      <p>Click</p>
      <p>Focus on object</p>

      <p>Right Click (computer) /<br />Long Press (mobile)</p>
      <p>Open detail popup</p>

      <p>Mouse Wheel (computer) /<br />Two fingers gesture  (mobile)</p>
      <p>Zoom in and out</p>


      <p><Image src='/location.png' alt='location.' height={ 30 } width={ 30 } /> icon</p>
      <p>Back to default position</p>

      <p><Image src='/love.png' alt='hand holding love.' height={ 30 } width={ 30 } /> icon</p>
      <p>Open credit popup</p>
    </div>

  </>
)
