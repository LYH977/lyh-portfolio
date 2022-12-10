import { forwardRef, } from 'react'
import { useGLTF } from '@react-three/drei'
import { MODEL_PATH } from '../../utils/constants'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import Rings from '../../components/primary/Ring'

type GLTFResult = GLTF & {
  nodes: {
    LYH_Mesh_0: THREE.Mesh
  }
  materials: {
    LYH_Material_0: THREE.MeshStandardMaterial
  }
}

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
      </group>
    )
  }
)
