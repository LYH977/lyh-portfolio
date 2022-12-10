import { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { MODEL_PATH } from '../../utils/constants'

type GLTFResult = GLTF & {
  nodes: {
    tab_defaultMaterial: THREE.Mesh
    tab_defaultMaterial001: THREE.Mesh
    tab_defaultMaterial002: THREE.Mesh
  }
  materials: {
    tab_MAT_TabletGlass: THREE.MeshStandardMaterial
    tab_MAT_OpacityText: THREE.MeshStandardMaterial
    tab_MAT_Tablet: THREE.MeshStandardMaterial
  }
}

export const Tablet = forwardRef(({ color, ...props }: any, zoomRef: any) => {
  const { nodes, materials } = useGLTF(MODEL_PATH.PRIMARY) as unknown as GLTFResult
  return (
    <group { ...props } dispose={ null } ref={ zoomRef }>
      <mesh
        geometry={ nodes.tab_defaultMaterial.geometry }
        material={ materials.tab_MAT_TabletGlass }
      />
      <mesh
        geometry={ nodes.tab_defaultMaterial001.geometry }
        material={ materials.tab_MAT_OpacityText }
      />
      <mesh
        geometry={ nodes.tab_defaultMaterial002.geometry }
        material={ materials.tab_MAT_Tablet }
      />
    </group>
  )
})

