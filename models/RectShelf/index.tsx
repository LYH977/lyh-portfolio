
import { useGLTF } from '@react-three/drei'
import { angleToRadians } from '../../utils/formatter'
import { MODEL_PATH, Y_OFFSET } from '../../utils/constants'

import { Tablet } from '../Tablet'
import { Education } from '../Education'
import { EducationMarkup } from '../../2D/Descriptions/Education'
import { ProjectsMarkup } from '../../2D/Descriptions/Projects'

import { Books } from '../Books'
import { Plant } from '../Plant'
import { PlantMarkup } from '../../2D/Descriptions/Plant'
import { SocialMarkup } from '../../2D/Descriptions/Social'
import { Color } from 'three/src/math/Color'
import Social from '../../components/primary/Social'
import { SkillsMarkup } from '../../2D/Descriptions/Skills'
import Zoomable from '../../wrapper/Zoomable'


export default function RectShelf() {
  const { nodes, materials } = useGLTF(MODEL_PATH.PRIMARY) as any

  return (
    <group
      dispose={ null }
      scale={ [4, 4, 4] }
      position={ [3.7 + 0.0, 2.4 + Y_OFFSET, 0] }
      rotation={ [0, angleToRadians(-90), 0] }
    >
      <Zoomable description={ SkillsMarkup } margin={ 2 }>
        { (meshRef: any) => (
          <Books
            scale={ [0.003, 0.004, 0.003] }
            position={ [-0.2, -0.099, -0.06] }
            ref={ meshRef }
          />
        ) }
      </Zoomable>

      <Zoomable description={ ProjectsMarkup }>
        { (meshRef: any) => (
          <Tablet
            color={ new Color(0x0902c7) }
            scale={ 0.1 }
            rotation={ [
              angleToRadians(90),
              angleToRadians(-15),
              0,
            ] }
            position={ [0.299, -0.16, 0] }
            ref={ meshRef }
          />
        ) }
      </Zoomable>

      <Zoomable description={ EducationMarkup }>
        { (meshRef: any) => (
          <Education
            position={ [-0.25, 0.08, 0.02] }
            scale={ 0.018 }
            rotation={ [0, angleToRadians(180), 0] }
            ref={ meshRef }
          />
        ) }
      </Zoomable>

      <Zoomable description={ PlantMarkup } margin={ 2 }>
        { (meshRef: any) => (
          <Plant scale={ 0.06 } position={ [0.31, 0.076, -0.01] } ref={ meshRef } />
        ) }
      </Zoomable>

      <Zoomable description={ SocialMarkup }>
        { (meshRef: any) => (
          <group ref={ meshRef } >
            <Social position={ [0.11, 0.105, -0.01] } url='in.jpg' />
            <Social
              position={ [0.17, 0.105, -0.01] }
              url='resume1.jpg'
            />
            <Social
              position={ [0.23, 0.105, -0.01] }
              url='github.png'
            />
          </group>
        ) }
      </Zoomable>


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

