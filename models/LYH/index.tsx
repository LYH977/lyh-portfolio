import { forwardRef, } from 'react'
import { useGLTF } from '@react-three/drei'
import { MODEL_PATH } from '../../utils/constants'
import Rings from '../../components/primary/Ring'


export const LYH = forwardRef(
  (props: JSX.IntrinsicElements['group'], ref: any) => {
    const { nodes, materials } = useGLTF(MODEL_PATH.PRIMARY) as any
    return (
      <group { ...props } dispose={ null } ref={ ref }>
        <mesh
          geometry={ nodes.LYH_Mesh_0.geometry }
          material={ materials.LYH_Material_0 }
          rotation={ [-Math.PI / 2, 0, 0] }
        />
        <Rings />
        <mesh position={ [25, 0, -20] }>
          <boxBufferGeometry args={ [30, 30, 30] } />
          <meshStandardMaterial visible={ false } />
        </mesh>
      </group>
    )
  }
)
