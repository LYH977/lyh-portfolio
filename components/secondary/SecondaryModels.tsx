import { forwardRef, memo, useEffect, useRef, useState } from 'react'
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
import { Group } from 'three/src/Three'
import { useBounds } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { DEFAULT_VECTOR } from '../../utils/sharedMesh'
import Frame from '../../models/Frame'
import Zoomable from '../../wrapper/Zoomable'

export const SecondaryModels = () => {
  const [shouldRender, setShouldRender] = useState<boolean>(false)
  const timer = useRef<number>()
  const defaultAngleCallback = useStore(
    (state: any) => state.defaultAngleCallback
  )
  const isReadyToRenderSecondary = useStore(
    (state: any) => state.isReadyToRenderSecondary
  )
  const setReadyToExplore = useStore((state: any) => state.setReadyToExplore)
  const incrementSecondaryModel = useStore(
    (state: any) => state.incrementSecondaryModel
  )


  const aotRef = useRef<Group>()
  const malaysiaRef = useRef<Group>()
  const narutoRef = useRef<Group>()
  const sydneyRef = useRef<Group>()
  const api = useBounds()
  const { controls } = useThree()
  useEffect(() => {
    setReadyToExplore()
    const loader = new GLTFLoader()
    const draco = new DRACOLoader()
    draco.setDecoderConfig({ type: 'js' })
    draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
    loader.setDRACOLoader(draco)
    loader.load(MODEL_PATH.AOT, (gltf) => {
      aotRef.current = gltf.scene
      incrementSecondaryModel()
    })
    loader.load(MODEL_PATH.MALAYSIA, (gltf) => {
      malaysiaRef.current = gltf.scene
      incrementSecondaryModel()
    })
    loader.load(MODEL_PATH.NARUTO, (gltf) => {
      narutoRef.current = gltf.scene
      incrementSecondaryModel()
    })
    loader.load(MODEL_PATH.SYDNEY, (gltf) => {
      sydneyRef.current = gltf.scene
      incrementSecondaryModel()
    })
  }, [])

  useEffect(() => {
    if (isReadyToRenderSecondary) {
      //@ts-ignore
      controls?.setAzimuthalAngle(0.3)
      //@ts-ignore
      api.refresh(DEFAULT_VECTOR).fit()
      // defaultAngleCallback()
      timer.current = window.setTimeout(() => {
        setShouldRender(true)
      }, 1000)

      return () => {
        clearTimeout(timer.current)
      }
    }
  }, [isReadyToRenderSecondary])

  return (
    <>
      <Loading position={ [0.61, 0.22, 0.0778] } visible={ !shouldRender } />
      <Loading position={ [0.22, 0.22, 0.0778] } visible={ !shouldRender } />
      <Loading position={ [0.035, 0.33, 0.0778] } visible={ !shouldRender } />
      <Loading position={ [0.41, 0.33, 0.0778] } visible={ !shouldRender } />
      <Loading position={ [0.035, 0.11, 0.0778] } visible={ !shouldRender } />
      <Zoomable description={ DanceMarkup }>
        { (meshRef: any) =>
          shouldRender ? (
            <Frame
              scale={ 0.025 }
              position={ [0.225, 0.215, -0.07] }
              ref={ meshRef }

            />
          ) : null
        }
      </Zoomable>
      <Zoomable description={ MalaysiaMarkup }>
        { (meshRef: any) =>
          shouldRender ? (
            <Model
              ref={ meshRef }
              scale={ 0.0003 }
              position={ [0.58, 0.2, 0.03] }
              rotation={ [0, angleToRadians(-45), 0] }
              modelScene={ malaysiaRef.current }

            />
          ) : null
        }
      </Zoomable>

      <Zoomable description={ NarutoMarkup }>
        { (meshRef: any) =>
          shouldRender ? (
            <Model
              ref={ meshRef }
              // scale={[0.035, 0.035, (0.035 * 5) / 3]}
              scale={ 0.035 }
              position={ [0.035, 0.25, 0.08] }
              rotation={ [0, angleToRadians(180), 0] }
              modelScene={ narutoRef.current }


            />
          ) : null
        }
      </Zoomable>
      <Zoomable description={ SydneyMarkup }>
        { (meshRef: any) =>
          shouldRender ? (
            <Model
              ref={ meshRef }
              scale={ 0.0045 }
              position={ [0.375, 0.287, 0.18] }
              modelScene={ sydneyRef.current }


            />
          ) : null
        }
      </Zoomable>
      <Zoomable description={ AOTMarkup }>
        { (meshRef: any) =>
          shouldRender ? (
            (<MemoModel
              ref={ meshRef }
              position={ [-0.295, 0.29, -0.01] }
              scale={ 0.04 }
              modelScene={ aotRef.current }

            />)
          ) : null
        }
      </Zoomable>
    </>
  )
}

const Model = forwardRef(
  (
    props: JSX.IntrinsicElements['group'] & { modelScene: any },
    zoomRef: any
  ) => {
    const { modelScene, ...rest } = props
    return <primitive object={ modelScene } { ...rest } ref={ zoomRef } />
  }
)
const MemoModel = memo(Model)

Model.displayName = 'Model';
