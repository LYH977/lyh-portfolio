import { OrbitControls } from '@react-three/drei'
import { useStore } from '../../store'

const MyOrbitControl = () => {
  const isAllSet = useStore((state: any) => state.isAllSet)

  if (isAllSet)
    return (
      <OrbitControls
        enableDamping={ false }
        enablePan={ false }
        rotateSpeed={ 0.5 }
        zoomSpeed={ 1 }
        makeDefault
      />
    )
  return null
}

export default MyOrbitControl
