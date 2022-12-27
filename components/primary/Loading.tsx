import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { DoubleSide } from 'three/src/constants'

export const Loading = (props: any) => {
  const meshRef = useRef<any>(null)
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta
      meshRef.current.rotation.x += delta
    }
  })
  return (
    <group { ...props }>
      <mesh ref={ meshRef }>
        <octahedronGeometry args={ [0.05, 0] } />
        <meshStandardMaterial side={ DoubleSide } wireframe />
      </mesh>
    </group>
  )
}
