
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { BackSide } from 'three/src/Three'
import { MODEL_PATH, NEON_COLOR } from '../../utils/constants'
import { angleToRadians } from '../../utils/formatter'


export function Moon(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(MODEL_PATH.PRIMARY) as any
  const moon = useRef<any>(null)
  const moonLight = useRef<any>(null)
  useFrame(() => {
    if (moon.current) {
      moon.current.rotation.y += 0.001
    }
    if (moonLight.current) {
      moonLight.current.rotation.z += 0.01
    }
  })
  return (
    <group position={ [0, 0, 0] } { ...props }>
      <mesh
        position={ [0, 2, -48.5] }
        scale={ 16 }
        ref={ moonLight }
      >
        <sphereGeometry
          args={ [0.3, 10, 100, 0, Math.PI * 2, 0, Math.PI] }
        />
        <meshStandardMaterial
          color={ NEON_COLOR }
          side={ BackSide }
          toneMapped={ false }
          emissive='white'
          emissiveIntensity={ 10 }
        />
      </mesh>
      <group
        ref={ moon }
        rotation={ [angleToRadians(-0), 0, 0] }
        position={ [0, 2, -50] }
        scale={ 5 }
        dispose={ null }
      >
        <group name='Sketchfab_Scene'>
          <group name='Sketchfab_model' rotation={ [-Math.PI / 2, 0, 0] }>
            <group
              name='Low_Poly_Moonfbx'
              rotation={ [Math.PI / 2, 0, 0] }
              scale={ 0.01 }
            >
              <group name='Object_2'>
                <group name='RootNode'>
                  <group
                    name='moon'
                    rotation={ [-Math.PI / 2, 0, 0.33] }
                    scale={ 100 }
                  >
                    <mesh
                      name='moon_Moon_0'
                      castShadow
                      receiveShadow
                      geometry={ nodes.moon_Moon_0.geometry }
                      material={ materials.Moon }
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
