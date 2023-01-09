import { useBounds } from '@react-three/drei'
import { useRef } from 'react'
import { useStore } from '../store'

function Zoomable({ children, description }: any) {
  const api = useBounds()
  const meshRef = useRef<any>(null)
  const openModal = useStore((state: any) => state.openModal)

  return (
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

    >
      { children(meshRef) }
    </group>
  )
}

export default Zoomable
