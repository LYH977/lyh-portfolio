import {
  FLOOR_HEIGHT,
  FLOOR_WIDTH,
  Y_OFFSET,
} from '../../utils/constants'
import { angleToRadians } from '../../utils/formatter'
import { FRONT_MESH } from '../../utils/sharedMesh'

const Floor = () => {
  return (
    <group>
      <mesh
        rotation={ [-angleToRadians(90), 0, 0] }
        position={ [0, 0 + Y_OFFSET, 0] }
        receiveShadow
      >
        <planeBufferGeometry args={ [FLOOR_WIDTH, FLOOR_HEIGHT] } />
        { FRONT_MESH }
      </mesh>
    </group>
  )
}

export default Floor

// const getTriangle = () => {
//   const shape = new Shape()
//   const x = 1
//   // shape.lineTo(0, x)
//   // shape.lineTo(1 * x, 0.5 * x)
//   shape.lineTo(4, 0)
//   shape.lineTo(2, 3.5)

//   return shape
// }

// const FloorPattern = ({ x, z }: any) => (
//   <group
//     position={ [x, Y_OFFSET + 0.02, z] }
//     rotation={ [-angleToRadians(90), 0, 0] }
//   >
//     <group
//       rotation={ [angleToRadians(0), angleToRadians(0), angleToRadians(90)] }
//     >
//       <mesh
//         scale={ 0.1 }
//         position={ [0, 0, 0] }
//         rotation={ [0, 0, angleToRadians(0)] }
//       >
//         <shapeBufferGeometry args={ [getTriangle()] } />
//         <meshStandardMaterial color={ FLOOR_COLOR } side={ DoubleSide } />
//       </mesh>
//       <mesh
//         scale={ 0.1 }
//         position={ [0, 0, 0] }
//         rotation={ [angleToRadians(180), 0, 0] }
//       >
//         <shapeBufferGeometry args={ [getTriangle()] } />
//         <meshStandardMaterial color={ FLOOR_COLOR } side={ DoubleSide } />
//       </mesh>
//     </group>

//     <group position={ [0.015, -0.015, 0] } rotation={ [0, 0, angleToRadians(-30)] }>
//       <mesh
//         scale={ 0.1 }
//         position={ [0, 0, 0] }
//         rotation={ [0, 0, angleToRadians(0)] }
//       >
//         <shapeBufferGeometry args={ [getTriangle()] } />
//         <meshStandardMaterial color={ FLOOR_COLOR } side={ DoubleSide } />
//       </mesh>
//       <mesh
//         scale={ 0.1 }
//         position={ [0, 0, 0] }
//         rotation={ [angleToRadians(180), 0, 0] }
//       >
//         <shapeBufferGeometry args={ [getTriangle()] } />
//         <meshStandardMaterial color={ FLOOR_COLOR } side={ DoubleSide } />
//       </mesh>
//     </group>
//     <group
//       position={ [-0.015, -0.015, 0] }
//       rotation={ [0, 0, angleToRadians(210)] }
//     >
//       <mesh
//         scale={ 0.1 }
//         position={ [0, 0, 0] }
//         rotation={ [0, 0, angleToRadians(0)] }
//       >
//         <shapeBufferGeometry args={ [getTriangle()] } />
//         <meshStandardMaterial color={ FLOOR_COLOR } side={ DoubleSide } />
//       </mesh>
//       <mesh
//         scale={ 0.1 }
//         position={ [0, 0, 0] }
//         rotation={ [angleToRadians(180), 0, 0] }
//       >
//         <shapeBufferGeometry args={ [getTriangle()] } />
//         <meshStandardMaterial color={ FLOOR_COLOR } side={ DoubleSide } />
//       </mesh>
//     </group>
//   </group>
// )

// const FloorRowPatterns = ({ count }: any) => {

//   return <>
//     { [...new Array(5)].map((_, index) => {
//       if (index === 0) {
//         return <FloorPattern key={ index } x={ index } z={ 1.26 * count } />
//       }
//       return (
//         <>
//           <FloorPattern key={ index } x={ index * 0.75 } z={ 1.26 * count } />
//           <FloorPattern key={ -index } x={ -index * 0.75 } z={ 1.26 * count } />
//         </>
//       )
//     }) }

//     { [...new Array(5)].map((_, index) => {
//       if (index === 0) {
//         return <FloorPattern key={ index } x={ 0.375 } z={ 0.63 + (1.26 * count) } />
//       }
//       return (
//         <>
//           <FloorPattern key={ index } x={ index * 0.75 + 0.375 } z={ 0.63 + (1.26 * count) } />
//           <FloorPattern key={ -index } x={ -index * 0.75 + 0.375 } z={ 0.63 + (1.26 * count) } />
//         </>
//       )
//     }) }</>
// }