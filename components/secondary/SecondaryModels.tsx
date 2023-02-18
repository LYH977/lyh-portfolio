import { useEffect, useRef, useState } from 'react'
import { useStore } from '../../store'
import { angleToRadians } from '../../utils/formatter'
import { Loading } from '../primary/Loading'
import { AOTMarkup } from '../../2D/Descriptions/AOT'
import { DanceMarkup } from '../../2D/Descriptions/Dance'
import { MalaysiaMarkup } from '../../2D/Descriptions/Malaysia'
import { NarutoMarkup } from '../../2D/Descriptions/Naruto'
import { SydneyMarkup } from '../../2D/Descriptions/Sydney'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { MODEL_PATH } from '../../utils/constants'
import Frame from '../../models/Frame'
import Zoomable from '../../wrapper/Zoomable'

export const SecondaryModels = () => {
  const [loader] = useState(() => {
    const loader = new GLTFLoader()
    const draco = new DRACOLoader()
    draco.setDecoderConfig({ type: 'js' })
    draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
    loader.setDRACOLoader(draco)
    return loader
  })


  const setReadyToExplore = useStore((state: any) => state.setReadyToExplore)


  useEffect(() => {
    setReadyToExplore()
  }, [])


  return (
    <>
      <Zoomable description={ DanceMarkup }>
        { (meshRef: any) =>
          <Frame
            scale={ 0.025 }
            position={ [0.225, 0.215, -0.07] }
            ref={ meshRef }

          />
        }
      </Zoomable>
      <Secondary
        loader={ loader }
        modelPath={ MODEL_PATH.MALAYSIA }
        description={ MalaysiaMarkup }
        loadingProps={ {
          position: [0.61, 0.22, 0.085],
        } }
        meshProps={ {
          scale: 0.0003,
          position: [0.58, 0.2, 0.03],
          rotation: [0, angleToRadians(-45), 0],
        } }
      />

      <Secondary
        loader={ loader }

        modelPath={ MODEL_PATH.NARUTO }
        description={ NarutoMarkup }
        loadingProps={ {
          position: [0.035, 0.33, 0.085]
        } }
        meshProps={ {
          scale: 0.035,
          position: [0.035, 0.25, 0.08],
          rotation: [0, angleToRadians(180), 0],
        } }
      />

      <Secondary
        loader={ loader }
        modelPath={ MODEL_PATH.SYDNEY }
        description={ SydneyMarkup }
        loadingProps={ {
          position: [0.41, 0.33, 0.085]
        } }
        meshProps={ {
          scale: 0.0045,
          position: [0.375, 0.287, 0.18]
        } }
      />

      <Secondary
        loader={ loader }
        modelPath={ MODEL_PATH.AOT }
        description={ AOTMarkup }
        loadingProps={ {
          position: [0.035, 0.11, 0.085]
        } }
        meshProps={ {
          scale: 0.04,
          position: [-0.295, 0.29, -0.01]
        } }
      />
    </>
  )
}


const Secondary = ({
  modelPath,
  description,
  meshProps,
  loadingProps,
  loader
}: any) => {
  const [loading, setloading] = useState(true)
  const malaysiaRef = useRef<any>()


  useEffect(() => {

    (loader as GLTFLoader).load(modelPath, (gltf) => {
      //@ts-ignore
      malaysiaRef.current.add(gltf.scene)
      setloading(false)
    })

  }, [])
  return (
    <>
      <Zoomable description={ description }>
        { (meshRef: any) => (
          <>
            <group ref={ meshRef }>
              <group ref={ malaysiaRef } { ...meshProps } />
            </group>
          </>
        ) }
      </Zoomable>
      <Loading visible={ loading } { ...loadingProps } />
    </>
  )
}
