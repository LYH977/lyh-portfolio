import { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { MODEL_PATH } from '../../utils/constants'

type GLTFResult = GLTF & {
  nodes: {
    ['Rectangle001_Material_#2_0']: THREE.Mesh
    ['Rectangle002_Material_#7_0']: THREE.Mesh
    ['Rectangle003_Material_#7_0']: THREE.Mesh
    ['Rectangle004_Material_#10_0']: THREE.Mesh
    ['Rectangle005_Material_#5_0']: THREE.Mesh
    ['Rectangle006_Material_#8_0']: THREE.Mesh
    ['Rectangle007_Material_#3_0']: THREE.Mesh
    ['Rectangle008_Material_#6_0']: THREE.Mesh
    ['Rectangle009_Material_#3_0']: THREE.Mesh
    ['Rectangle010_Material_#6_0']: THREE.Mesh
    ['Rectangle011_Material_#6_0']: THREE.Mesh
    ['Rectangle012_Material_#5_0']: THREE.Mesh
    Rectangle013__0: THREE.Mesh
    ['Rectangle014_Material_#7_0']: THREE.Mesh
    ['Rectangle015_Material_#2_0']: THREE.Mesh
    ['Rectangle016_Material_#6_0']: THREE.Mesh
    ['Rectangle017_Material_#4_0']: THREE.Mesh
    ['Rectangle018_Material_#9_0']: THREE.Mesh
    ['Rectangle019_Material_#9_0']: THREE.Mesh
    ['Rectangle020_Material_#4_0']: THREE.Mesh
  }
  materials: {
    Material_2: THREE.MeshStandardMaterial
    Material_7: THREE.MeshStandardMaterial
    Material_10: THREE.MeshStandardMaterial
    Material_5: THREE.MeshStandardMaterial
    Material_8: THREE.MeshStandardMaterial
    Material_3: THREE.MeshStandardMaterial
    Material_6: THREE.MeshStandardMaterial
    Rectangle013__0: THREE.MeshStandardMaterial
    Material_4: THREE.MeshStandardMaterial
    Material_9: THREE.MeshStandardMaterial
  }
}
export const Books = forwardRef(
  (props: JSX.IntrinsicElements['group'], ref: any) => {
    const test = useGLTF(MODEL_PATH.PRIMARY) as any
    const { nodes, materials } = test
    return (
      <group { ...props } dispose={ null } ref={ ref }>
        <group position={ [0.48, 12.5, 11.37] } rotation={ [-Math.PI / 2, 0, 0] }>
          <mesh
            geometry={ nodes['Rectangle001_Material_#2_0'].geometry }
            material={ materials.Material_2 }
            position={ [0, 0, -12.5] }
          />
          <mesh
            geometry={ nodes['Rectangle002_Material_#7_0'].geometry }
            material={ materials.Material_7 }
            position={ [0, 0.5, -11.5] }
          />
        </group>
        <group position={ [8.48, 13.5, 12.3] } rotation={ [-Math.PI / 2, 0, 0] }>
          <mesh
            geometry={ nodes['Rectangle003_Material_#7_0'].geometry }
            material={ materials.Material_7 }
            position={ [0, 0.54, -12.5] }
          />
          <mesh
            geometry={ nodes['Rectangle004_Material_#10_0'].geometry }
            material={ materials.Material_10 }
            position={ [0, 0, -13.5] }
          />
        </group>
        <group position={ [16.48, 12.5, 11.37] } rotation={ [-Math.PI / 2, 0, 0] }>
          <mesh
            geometry={ nodes['Rectangle005_Material_#5_0'].geometry }
            material={ materials.Material_5 }
            position={ [0, 0, -12.5] }
          />
          <mesh
            geometry={ nodes['Rectangle006_Material_#8_0'].geometry }
            material={ materials.Material_8 }
            position={ [0, 0.5, -11.5] }
          />
        </group>
        <group position={ [24.48, 12.5, 10.33] } rotation={ [-Math.PI / 2, 0, 0] }>
          <mesh
            geometry={ nodes['Rectangle007_Material_#3_0'].geometry }
            material={ materials.Material_3 }
            position={ [0, 0, -12.5] }
          />
          <mesh
            geometry={ nodes['Rectangle008_Material_#6_0'].geometry }
            material={ materials.Material_6 }
            position={ [0, 0.5, -11.5] }
          />
        </group>
        <group position={ [-15.02, 4, 11.37] } rotation={ [-Math.PI / 2, 0, 0] }>
          <mesh
            geometry={ nodes['Rectangle009_Material_#3_0'].geometry }
            material={ materials.Material_3 }
            position={ [-11.5, 0, -0.02] }
            rotation={ [0, 1.57, 0] }
          />
          <mesh
            geometry={ nodes['Rectangle010_Material_#6_0'].geometry }
            material={ materials.Material_6 }
            position={ [-10.5, 0.5, -0.02] }
            rotation={ [0, 1.57, 0] }
          />
        </group>
        <group
          position={ [-15.43, 12.05, 11.37] }
          rotation={ [-Math.PI / 2, 0, 0] }
        >
          <mesh
            geometry={ nodes['Rectangle011_Material_#6_0'].geometry }
            material={ materials.Material_6 }
            position={ [-9, 0.5, -0.02] }
            rotation={ [0, 1.57, 0] }
          />
          <mesh
            geometry={ nodes['Rectangle012_Material_#5_0'].geometry }
            material={ materials.Material_5 }
            position={ [-10, 0, -0.02] }
            rotation={ [0, 1.57, 0] }
          />
        </group>
        <group position={ [40.32, 12, 10.8] } rotation={ [-Math.PI / 2, 0, 0] }>
          <mesh
            geometry={ nodes.Rectangle013__0.geometry }
            material={ materials.Rectangle013__0 }
            position={ [1.89, 0, -11.34] }
            rotation={ [0, -0.16, 0] }
          />
          <mesh
            geometry={ nodes['Rectangle014_Material_#7_0'].geometry }
            material={ materials.Material_7 }
            position={ [1.72, 0.5, -10.36] }
            rotation={ [0, -0.16, 0] }
          />
        </group>
        <group position={ [31.48, 12, 11.62] } rotation={ [-Math.PI / 2, 0, 0] }>
          <mesh
            geometry={ nodes['Rectangle015_Material_#2_0'].geometry }
            material={ materials.Material_2 }
            position={ [0, 0, -12] }
          />
          <mesh
            geometry={ nodes['Rectangle016_Material_#6_0'].geometry }
            material={ materials.Material_6 }
            position={ [0, 0.3, -11] }
          />
        </group>
        <group
          position={ [-31.65, 11.77, 11.62] }
          rotation={ [-Math.PI / 2, 0, 0] }
        >
          <mesh
            geometry={ nodes['Rectangle017_Material_#4_0'].geometry }
            material={ materials.Material_4 }
            position={ [-5.7, 0.3, -9.41] }
            rotation={ [0, 0.54, 0] }
          />
          <mesh
            geometry={ nodes['Rectangle018_Material_#9_0'].geometry }
            material={ materials.Material_9 }
            position={ [-6.22, 0, -10.26] }
            rotation={ [0, 0.54, 0] }
          />
        </group>
        <group
          position={ [-43.44, 10.35, 11.62] }
          rotation={ [-Math.PI / 2, 0.28, 0] }
        >
          <mesh
            geometry={ nodes['Rectangle019_Material_#9_0'].geometry }
            material={ materials.Material_9 }
            position={ [-6.22, 0, -10.26] }
            rotation={ [0, 0.54, 0] }
          />
          <mesh
            geometry={ nodes['Rectangle020_Material_#4_0'].geometry }
            material={ materials.Material_4 }
            position={ [-5.7, 0.3, -9.41] }
            rotation={ [0, 0.54, 0] }
          />
        </group>
      </group>
    )
  }
)
