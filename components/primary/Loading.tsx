import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { DoubleSide } from 'three/src/constants'
import { Text } from "@react-three/drei";

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
        <octahedronGeometry args={ [0.065, 0] } />
        <meshStandardMaterial side={ DoubleSide } wireframe />
      </mesh>
      <Text color="white" anchorX="center" anchorY="middle" fontSize={ 0.02 }>
        Loading
      </Text>
    </group>
  )
}
