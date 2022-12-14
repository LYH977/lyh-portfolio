import { useEffect, useRef } from 'react'
import { PerspectiveCamera } from '@react-three/drei'
import gsap from 'gsap'
import { useStore } from '../../store'

const Camera = () => {
  const cameraRef = useRef<any>(null)
  const enterorbit = useRef<any>(false)
  const isAnimating = useStore((state: any) => state.isAnimating)
  const setAllSet = useStore((state: any) => state.setAllSet)

  useEffect(() => {
    if (isAnimating) {
      enterorbit.current = true
      const timeline = gsap.timeline()
      timeline.fromTo(
        cameraRef.current.position,
        {
          x: 1.5,
          y: -1,
          z: 1.5,
        },
        {
          x: 0.5,
          y: -1,
          z: -25,
          duration: 1,
          delay: 6.2,
        }
      )
      timeline.to(
        cameraRef.current.position,
        {
          x: 0,
          y: 0,
          z: 5,
          duration: 2,
          onComplete: () => {
            setAllSet()
          },
        },
        '>+=0.7'
      )
    }
  }, [isAnimating])

  return (
    <PerspectiveCamera
      makeDefault
      position={ [0, 0, 7] }
      zoom={ 1 }
      ref={ cameraRef }

    />
  )
}

export default Camera
