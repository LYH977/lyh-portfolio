import { useBounds } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { useStore } from '../../store'
import { DEFAUL_AZIMUTHAL_ANGLE } from '../../utils/constants'
import { DEFAULT_VECTOR } from '../../utils/sharedMesh'

export const DefaultAngle = () => {
  const api = useBounds()
  const { controls, invalidate } = useThree()
  const setDefaultAngleCallback = useStore(
    (state: any) => state.setDefaultAngleCallback
  )
  const isAllSet = useStore((state: any) => state.isAllSet)
  const isAnimating = useStore((state: any) => state.isAnimating)
  const isModalOpen = useStore((state: any) => state.isModalOpen)

  const defaulRef = useRef<any>()

  useEffect(() => {
    setDefaultAngleCallback(() => {
      defaulRef.current.__r3f.handlers.onClick()
    })
  }, [])
  useFrame(() => {
    const shouldInvalidate = !(isModalOpen || (!isAnimating && !isAllSet))
    if (shouldInvalidate) {
      invalidate()
    }
  })
  return (
    <mesh
      ref={ defaulRef }
      onClick={ () => {
        //@ts-ignore
        controls?.setAzimuthalAngle(DEFAUL_AZIMUTHAL_ANGLE)

        //@ts-ignore
        api.refresh(DEFAULT_VECTOR).fit()
      } }
    >
      <boxGeometry args={ [0, 0] } />
      <meshStandardMaterial />
    </mesh>
  )
}
