

import { useGLTF } from '@react-three/drei'

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { SecondaryModels } from '../../components/secondary/SecondaryModels'
import { MODEL_PATH } from '../../utils/constants'

type GLTFResult = GLTF & {
  nodes: {
    Object_9: THREE.Mesh
    Object_12: THREE.Mesh
    Object_15: THREE.Mesh
    Object_18: THREE.Mesh
    Object_21: THREE.Mesh
  }
  materials: {
    Material_1: THREE.MeshStandardMaterial
  }
}

export default function HexShelf({ ...props }: any) {
  const { nodes, materials } = useGLTF(MODEL_PATH.PRIMARY) as any

  return (
    <group dispose={ null } { ...props }>
      <SecondaryModels
      />

      <group rotation={ [-Math.PI / 2, 0, 0] }>
        <group scale={ 0.02 }>
          <group rotation={ [Math.PI / 2, 0, 0] }>
            <group position={ [1.63, 16.59, 0] }>
              <mesh
                geometry={ nodes.Object_9.geometry }
                material={ materials.Material_1 }
              />
            </group>
            <group position={ [1.63, 5.56, 0] }>
              <mesh
                geometry={ nodes.Object_12.geometry }
                material={ materials.Material_1 }
              />
            </group>
            <group position={ [11.19, 11.08, 0] }>
              <mesh
                geometry={ nodes.Object_15.geometry }
                material={ materials.Material_1 }
              />
            </group>
            <group position={ [20.74, 16.59, 0] }>
              <mesh
                geometry={ nodes.Object_18.geometry }
                material={ materials.Material_1 }
              />
            </group>
            <group position={ [30.29, 11.08, 0] }>
              <mesh
                geometry={ nodes.Object_21.geometry }
                material={ materials.Material_1 }
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
