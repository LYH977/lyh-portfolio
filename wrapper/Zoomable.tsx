import { useBounds } from '@react-three/drei'
import { useRef, useState } from 'react'
import { useStore } from '../store'
import { Select } from '@react-three/postprocessing'
import {
  deviceType,
} from 'detect-it';

function Zoomable({ children, description }: any) {
  const api = useBounds()
  const meshRef = useRef<any>(null)
  const openModal = useStore((state: any) => state.openModal)
  const [isEnabled, setisEnabled] = useState(false)
  const isNotTouchOnly = deviceType !== 'touchOnly'

  return (
    <Select enabled={ isEnabled }>
      <group
        onClick={ (e) => {
          e.stopPropagation()
          if (e.delta <= 2) {
            api.refresh(meshRef.current).fit()
          }
        } }
        onContextMenu={ (e) => {
          //@ts-ignore
          if (e?.pointerType === 'mouse'
            && e.altKey) {
            return
          }
          openModal(description)
        } }

        onPointerEnter={ isNotTouchOnly ? () => {
          setisEnabled(true)
        } : undefined }
        onPointerLeave={ isNotTouchOnly ? () => {
          setisEnabled(false)
        } : undefined }
      >
        { children(meshRef) }
      </group></Select>
  )
}

export default Zoomable
