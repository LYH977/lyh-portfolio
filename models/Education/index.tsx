
import { forwardRef, } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { MODEL_PATH } from '../../utils/constants'

type GLTFResult = GLTF & {
  nodes: {
    Edu_Object_6: THREE.Mesh
    Edu_Object_7: THREE.Mesh
    Edu_Object_4: THREE.Mesh
    Edu_Object_9: THREE.Mesh
  }
  materials: {
    ['Edu_Material.002']: THREE.MeshStandardMaterial
    ['Edu_Material.003']: THREE.MeshStandardMaterial
    ['Edu_Material.001']: THREE.MeshStandardMaterial
  }
}

export const Education = forwardRef(
  (props: JSX.IntrinsicElements['group'], ref: any) => {
    const { nodes, materials } = useGLTF(MODEL_PATH.PRIMARY) as any
    return (
      <group { ...props } dispose={ null } ref={ ref }>
        <group rotation={ [-Math.PI / 2, 0, 0] }>
          <group rotation={ [Math.PI / 2, 0, 0] }>
            <group
              position={ [-4, 0.86, -5] }
              rotation={ [0, Math.PI / 4, Math.PI / 2] }
            >
              <mesh
                geometry={ nodes.Edu_Object_6.geometry }
                material={ materials['Edu_Material.002'] }
              />
              <mesh
                geometry={ nodes.Edu_Object_7.geometry }
                material={ materials['Edu_Material.003'] }
              />
            </group>
            <mesh
              geometry={ nodes.Edu_Object_4.geometry }
              material={ materials['Edu_Material.001'] }
              position={ [0, 1.17, 0] }
              rotation={ [0, Math.PI / 4, 0] }
              scale={ [3.33, 1.24, 3.33] }
            />
            <mesh
              geometry={ nodes.Edu_Object_9.geometry }
              material={ materials['Edu_Material.002'] }
              position={ [0, 3.64, 0] }
              scale={ [5.97, 1, 0.48] }
            />
          </group>
        </group>
      </group>
    )
  }
)

