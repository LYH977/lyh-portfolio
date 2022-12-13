import { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { MODEL_PATH } from '../../utils/constants'


export const Plant = forwardRef(
  (props: JSX.IntrinsicElements['group'], ref: any) => {
    const { nodes, materials } = useGLTF(MODEL_PATH.PRIMARY) as any
    return (
      <group { ...props } dispose={ null }>
        <group rotation={ [-Math.PI / 2, 0, 0] } ref={ ref }>
          <group rotation={ [Math.PI / 2, 0, 0] }>
            <group rotation={ [0, -0.1, 0] }>
              <mesh
                geometry={ nodes.plant_Object_8.geometry }
                material={ materials.plant_soil }
                position={ [0, 0.94, 0] }
              />
              <group
                position={ [0.03, 0.72, -0.03] }
                rotation={ [3.13, 0.13, -3.01] }
              >
                <mesh
                  geometry={ nodes.plant_Object_13.geometry }
                  material={ materials['plant_plant.003'] }
                />
                <mesh
                  geometry={ nodes.plant_Object_14.geometry }
                  material={ materials['plant_rim.003'] }
                />
              </group>
              <group
                position={ [0.11, 0.72, -0.01] }
                rotation={ [-3.12, -0.51, -2.89] }
              >
                <mesh
                  geometry={ nodes.plant_Object_16.geometry }
                  material={ materials['plant_plant.003'] }
                />
                <mesh
                  geometry={ nodes.plant_Object_17.geometry }
                  material={ materials['plant_rim.003'] }
                />
              </group>
              <group position={ [0.05, 0.69, 0] } rotation={ [-0.01, -0.21, 0.24] }>
                <mesh
                  geometry={ nodes.plant_Object_19.geometry }
                  material={ materials['plant_plant.003'] }
                />
                <mesh
                  geometry={ nodes.plant_Object_20.geometry }
                  material={ materials['plant_rim.003'] }
                />
              </group>
              <group position={ [-0.04, 0.72, 0] } rotation={ [0, -0.31, 0.04] }>
                <mesh
                  geometry={ nodes.plant_Object_10.geometry }
                  material={ materials['plant_plant.003'] }
                />
                <mesh
                  geometry={ nodes.plant_Object_11.geometry }
                  material={ materials['plant_rim.003'] }
                />
              </group>
              <mesh
                geometry={ nodes.plant_Object_6.geometry }
                material={ materials['plant_material.002'] }
              />
            </group>
          </group>
        </group>
      </group>
    )
  }
)
