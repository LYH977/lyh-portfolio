import { useLayoutEffect, useRef } from 'react'
import { CEILING_GRADIENT, CEILING_PATTERNS } from '../../utils/constants'
import { angleToRadians } from '../../utils/formatter'
import { CP_GRADIENT_MESH } from './GradientEffect'
import { FRONT_MESH } from '../../utils/sharedMesh'
import { Object3D } from 'three/src/core/Object3D'
import { MeshStandardMaterial } from 'three/src/materials/MeshStandardMaterial'




const PLANE = <planeGeometry />

const t = new MeshStandardMaterial()



const CeilingPattern = () => {

  return (
    <group>
      <BlockInstances />
      <GradientInstances />


    </group>
  )
}




function BlockInstances({ temp = new Object3D() }) {
  const ref = useRef<any>()
  const keys = Object.keys(CEILING_PATTERNS)
  useLayoutEffect(() => {
    let total = 0
    for (let i = 0; i < keys.length; i++) {
      const currentKey = keys[i] as keyof typeof CEILING_PATTERNS
      const positionX = Number(keys[i])
      for (let j = 0; j < CEILING_PATTERNS[currentKey].length; j++) {
        const depth = CEILING_PATTERNS[currentKey][j]
        temp.position.set(positionX, 0, -6 + j * 0.5)
        temp.rotation.set(-angleToRadians(90), 0, 0)
        temp.scale.set(1, 1, 1 * depth)
        temp.updateMatrix()
        total++
        ref.current.setMatrixAt(total, temp.matrix)
      }

    }
    ref.current.instanceMatrix.needsUpdate = true
  }, [])
  return (
    <instancedMesh ref={ ref } args={ [undefined, undefined, keys.length * CEILING_PATTERNS['0'].length] }>
      <boxGeometry args={ [1, 0.5, 0.1] } />
      { FRONT_MESH }
    </instancedMesh>
  )
}

function GradientInstances({ temp = new Object3D() }) {
  const ref = useRef<any>()
  useLayoutEffect(() => {
    // Set positions
    for (let index = 0; index < CEILING_GRADIENT.length; index++) {
      const position = CEILING_GRADIENT[index].position as [number, number, number]
      const scale = CEILING_GRADIENT[index].scale as [number, number, number]
      const rotationY = CEILING_GRADIENT[index].rotate ? -angleToRadians(90) : 0
      temp.position.set(...position)
      temp.rotation.set(0, rotationY, 0)
      temp.scale.set(...scale)
      temp.updateMatrix()
      ref.current.setMatrixAt(index, temp.matrix)
    }
    // Update the instance
    ref.current.instanceMatrix.needsUpdate = true
  }, [])
  return (
    <instancedMesh ref={ ref } args={ [undefined, undefined, CEILING_GRADIENT.length] }>
      { PLANE }
      { CP_GRADIENT_MESH }
    </instancedMesh>
  )
}




export default CeilingPattern

