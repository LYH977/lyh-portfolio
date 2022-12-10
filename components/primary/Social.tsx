import { angleToRadians } from '../../utils/formatter'
import { useTexture } from '@react-three/drei'
import { forwardRef } from 'react'
import { DoubleSide } from 'three/src/constants'

const Social = forwardRef(({ url, ...props }: any, zoomRef: any) => {
  const texture = useTexture(url)
  return (
    <mesh
      { ...props }
      scale={ 0.09 }
      rotation={ [angleToRadians(90), angleToRadians(-90), angleToRadians(90)] }
      ref={ zoomRef }
    >
      <sphereBufferGeometry args={ [0.3, 64, 32, 0, Math.PI * 2, 0, Math.PI] } />
      <meshStandardMaterial map={ texture as THREE.Texture } side={ DoubleSide } />
    </mesh>
  )
})
Social.displayName = 'Social';

export default Social
