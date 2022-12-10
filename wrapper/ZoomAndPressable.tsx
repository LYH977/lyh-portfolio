import { Pressable } from "./Pressable"
import Zoomable from "./Zoomable"


const ZoomAndPressable = ({ description, children }: any) => {
  return (
    <Pressable description={ description }>
      <Zoomable>{ children }</Zoomable>
    </Pressable>
  )
}

export default ZoomAndPressable
