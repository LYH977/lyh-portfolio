
import { useGLTF } from '@react-three/drei'
import { angleToRadians } from '../../utils/formatter'
import { MODEL_PATH, Y_OFFSET } from '../../utils/constants'

import { Tablet } from '../Tablet'
import { Education } from '../Education'
import { EducationMarkup } from '../../2D/Descriptions/Education'
import { ProjectsMarkup } from '../../2D/Descriptions/Projects'

import ZoomAndPressable from '../../wrapper/ZoomAndPressable'
import { Books } from '../Books'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Plant } from '../Plant'
import { PlantMarkup } from '../../2D/Descriptions/Plant'
import { SocialMarkup } from '../../2D/Descriptions/Social'
import { Color } from 'three/src/math/Color'
import Social from '../../components/primary/Social'

type GLTFResult = GLTF & {
  nodes: {
    Object_3: THREE.Mesh
  }
  materials: {
    ['White_Veneer.002']: THREE.MeshStandardMaterial
  }
}

export default function RectShelf() {
  const { nodes, materials } = useGLTF(MODEL_PATH.PRIMARY) as any

  return (
    <group
      dispose={ null }
      scale={ [4, 4, 4] }
      position={ [3.7 + 0.0, 2.4 + Y_OFFSET, 0] }
      rotation={ [0, angleToRadians(-90), 0] }
    >
      <ZoomAndPressable description={ EducationMarkup } margin={ 2 }>
        { (meshRef: any) => (
          <Books
            scale={ [0.003, 0.004, 0.003] }
            position={ [-0.2, -0.099, -0.06] }
            rotation={ [0, angleToRadians(0), 0] }
            ref={ meshRef }
          />
        ) }
      </ZoomAndPressable>

      <ZoomAndPressable description={ ProjectsMarkup }>
        { (meshRef: any) => (
          <Tablet
            color={ new Color(0x0902c7) }
            scale={ 0.1 }
            rotation={ [
              angleToRadians(90),
              angleToRadians(-15),
              angleToRadians(0),
            ] }
            position={ [0.299, -0.16, 0] }
            ref={ meshRef }
          />
        ) }
      </ZoomAndPressable>

      <ZoomAndPressable description={ EducationMarkup }>
        { (meshRef: any) => (
          <Education
            position={ [-0.25, 0.08, 0.02] }
            scale={ 0.018 }
            rotation={ [0, angleToRadians(180), 0] }
            ref={ meshRef }
          />
        ) }
      </ZoomAndPressable>

      <ZoomAndPressable description={ PlantMarkup } margin={ 2 }>
        { (meshRef: any) => (
          <Plant scale={ 0.06 } position={ [0.31, 0.076, -0.01] } ref={ meshRef } />
        ) }
      </ZoomAndPressable>

      <ZoomAndPressable description={ SocialMarkup }>
        { (meshRef: any) => (
          <Social position={ [0.11, 0.105, -0.01] } url='in.jpg' ref={ meshRef } />
        ) }
      </ZoomAndPressable>

      <ZoomAndPressable description={ SocialMarkup }>
        { (meshRef: any) => (
          <Social
            position={ [0.17, 0.105, -0.01] }
            url='resume1.jpg'
            ref={ meshRef }
          />
        ) }
      </ZoomAndPressable>

      <ZoomAndPressable description={ SocialMarkup }>
        { (meshRef: any) => (
          <Social
            position={ [0.23, 0.105, -0.01] }
            url='github.png'
            ref={ meshRef }
          />
        ) }
      </ZoomAndPressable>

      <group
        scale={ [1, 0.7, 1] }
        position={ [0, 0, -0.04] }
        rotation={ [-Math.PI / 2, 0, 0] }
      >
        <mesh
          geometry={ nodes.Object_3.geometry }
          material={ materials['White_Veneer.002'] }
        />
      </group>
    </group>
  )
}

