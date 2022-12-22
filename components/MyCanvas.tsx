import {
  Selection,
  EffectComposer,
  Bloom,
} from '@react-three/postprocessing'

import { Canvas } from '@react-three/fiber'


import Camera from './viewAngle/Camera'
import MyOrbitControl from './viewAngle/MyOrbitControl'
import { useGLTF } from '@react-three/drei'
import { MODEL_PATH } from '../utils/constants'
import { KernelSize } from 'postprocessing'
import { Moon } from '../models/Moon'
import Room from './Room'

const MyCanvas = () => {
  return (
    <Canvas
      className='three-canvas-container'
      dpr={ 1 }
      frameloop='demand'
    >
      <Selection>
        <EffectComposer autoClear={ false }>
          <Bloom
            mipmapBlur
            intensity={ 1.0 }
            kernelSize={ KernelSize.LARGE }
            luminanceThreshold={ 0.2 }
            luminanceSmoothing={ 0.9 }
          />
        </EffectComposer>

        <Camera />
        <MyOrbitControl />
        <Room />
        <Moon />
      </Selection>
    </Canvas>
  )
}

useGLTF.preload(MODEL_PATH.PRIMARY)

export default MyCanvas

