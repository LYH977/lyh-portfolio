import {
  Selection,
  Outline,
  EffectComposer,
  Bloom,
} from '@react-three/postprocessing'

import { Canvas } from '@react-three/fiber'


import Camera from './viewAngle/Camera'
import MyOrbitControl from './viewAngle/MyOrbitControl'
import { Stars, useGLTF } from '@react-three/drei'
import { MODEL_PATH } from '../utils/constants'
import { KernelSize } from 'postprocessing'
import { Moon } from '../models/Moon'
import Room from './Room'

const MyCanvas = (props: any) => {
  // useGLTF(MODEL_PATH.PRIMARY)
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
            intensity={ 1.0 } // The bloom intensity.
            kernelSize={ KernelSize.LARGE } // blur kernel size
            luminanceThreshold={ 0.2 } // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={ 0.9 } // smoothness of the luminance threshold. Range is [0, 1]
          />
          <Outline
            blur
            //@ts-ignore
            visibleEdgeColor='white'
            edgeStrength={ 2 }
            width={ 500 }
          />
        </EffectComposer>

        <Camera />
        <MyOrbitControl />
        <Room />
        <Moon />
        <Stars
          radius={ 50 }
          depth={ 50 }
          count={ 1000 }
          factor={ 4 }
          saturation={ 0 }
          fade
          speed={ 2 }
        />
      </Selection>
    </Canvas>
  )
}

useGLTF.preload(MODEL_PATH.PRIMARY)

export default MyCanvas

