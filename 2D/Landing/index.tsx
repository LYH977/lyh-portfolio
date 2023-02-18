import { useStore } from '../../store'


const Landing = (props: any) => {
  const isReadyToExplore = useStore((state: any) => state.isReadyToExplore)
  const setIsAnimating = useStore((state: any) => state.setIsAnimating)
  const isAnimating = useStore((state: any) => state.isAnimating)


  return (
    <div className={ `landing${isAnimating ? ' landing-anim' : ''}` }>
      <div className='color'></div>
      <div className='color'></div>

      <div className='container'>
        <h1 className={ `${isAnimating ? 'h1-anim' : ''}` }>
          Welcome Aboard
        </h1>

        <div className='intro'>
          <h1 className={ `${isAnimating ? 'h1-anim' : ''}` }>Presented by</h1>
          <p style={ { display: 'none' } }>Lee Yuan Hooi</p>
          <div
            className={ `logo-container${isAnimating ? ' logo-container-anim' : ''
              }` }
          >
            <div className={ `logo-L ${isAnimating ? ' element-fadeout' : ''
              }` }></div>
            <div className={ `logo-Y ${isAnimating ? ' element-fadeout' : ''
              }` }></div>
            <div className={ `logo-H ${isAnimating ? ' element-fadeout' : ''
              }` }></div>
            <div className='logo-eye'>
              <div className={ `circle${isAnimating ? ' circle-anim' : ''}` }>
                <div className='triangle'></div>
                <div className='triangle'></div>
                <div className='triangle'></div>
              </div>
            </div>
          </div>
        </div>


        <div className='bottom-section'>
          { isReadyToExplore ? (
            <button
              className={ `button-85${isAnimating ? ' button-85-anim' : ''}` }
              role='button'
              onClick={ () => setIsAnimating(true) }
            >
              Explore now!
            </button>
          ) : (
            <div>
              <p className='progress-text'>Loading</p>
              <div className='progress-bar'></div>

            </div>) }
        </div>
      </div>
    </div>
  )
}

export default Landing
