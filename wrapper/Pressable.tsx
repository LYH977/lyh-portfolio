import { useRef, useState } from 'react'
import { Select } from '@react-three/postprocessing'

import { useStore } from '../store'

export const Pressable = ({ children, description }: any) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const openModal = useStore((state: any) => state.openModal)

  const timerRef = useRef<any>()
  const isLongPress = useRef<any>()

  const startPressTimer = () => {
    if (!timerRef.current) {
      isLongPress.current = false
      timerRef.current = setTimeout(() => {
        isLongPress.current = true
        openModal(description)
      }, 500)
    }
  }



  const handleOnMouseDown = (e: any) => {
    startPressTimer()
  }

  const cancelTimeout = () => {
    clearTimeout(timerRef.current)
    timerRef.current = null
  }

  return (
    <>
      <Select enabled={ isHovered }>
        <group
          onPointerDown={ handleOnMouseDown }
          onPointerUp={ cancelTimeout }
          onPointerOver={ () => {
            setIsHovered(true)
          } }
          onPointerOut={ () => {
            setIsHovered(false)
            cancelTimeout()
          } }
        >
          { children }
        </group>
      </Select>
    </>
  )
}
