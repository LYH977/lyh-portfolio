import { OrbitControls } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { useStore } from '../../store'
import {
  deviceType,
} from 'detect-it';
const MyOrbitControl = () => {
  const isAllSet = useStore((state: any) => state.isAllSet)
  const setDefaultAngleCallback = useStore(
    (state: any) => state.setDefaultAngleCallback
  )
  const orbitRef = useRef<any>(undefined)
  useEffect(() => {
    setDefaultAngleCallback(() => {
      orbitRef?.current?.setAzimuthalAngle(0)
      orbitRef?.current?.setPolarAngle(1.445)
    })
  }, [])

  if (isAllSet)
    return (
      <OrbitControls
        enableDamping={ false }
        enablePan={ deviceType !== 'mouseOnly' }
        rotateSpeed={ 0.5 }
        zoomSpeed={ 1 }
        makeDefault
        ref={ orbitRef }
      />
    )
  return null
}

export default MyOrbitControl
