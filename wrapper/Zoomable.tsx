import { useBounds } from '@react-three/drei'
import { useRef } from 'react'

function Zoomable({ children }: any) {
  const api = useBounds()
  const meshRef = useRef<any>(null)

  return (
    <group
      onClick={ (e) => {
        e.stopPropagation()
        if (e.delta <= 2) {
          api.refresh(meshRef.current).fit()
        }
      } }
    >
      { children(meshRef) }
    </group>
  )
}

export default Zoomable
