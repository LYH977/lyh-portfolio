import { GradientTexture } from '@react-three/drei'
import { DoubleSide } from 'three/src/constants'

const PLANE = <planeGeometry />

export const CP_GRADIENT_MESH = <meshBasicMaterial side={ DoubleSide } transparent opacity={ 0.8 }>
  <GradientTexture
    stops={ [0.8, 1] }
    colors={ ['#1436dc', '#001f4f99'] }
  />
</meshBasicMaterial>

export const WALL_GRADIENT_MESH = <meshBasicMaterial side={ DoubleSide } transparent opacity={ 0.8 }>
  <GradientTexture
    stops={ [0, 0.5, 1] }
    colors={ ['#1436dc', '#1436dc', '#001f4f00'] }
  />
</meshBasicMaterial>

export const GradientEffect = ({ myMesh, ...rest }: any) => {
  return (
    <mesh { ...rest }>
      { PLANE }
      { myMesh }
    </mesh>
  )
}


