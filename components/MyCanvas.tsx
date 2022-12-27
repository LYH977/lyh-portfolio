import { Selection, EffectComposer, Bloom } from "@react-three/postprocessing";

import { Canvas } from "@react-three/fiber";

import Camera from "./viewAngle/Camera";
import MyOrbitControl from "./viewAngle/MyOrbitControl";
import { Stars, useGLTF } from "@react-three/drei";
import { MODEL_PATH } from "../utils/constants";
import { KernelSize } from "postprocessing";
import { Moon } from "../models/Moon";
import Room from "./Room";
import { isMacOS } from "../utils/checker";

const MyCanvas = () => {
  return (
    <Canvas className="three-canvas-container" dpr={1} frameloop="demand">
      <Selection>
        <EffectComposer autoClear={false}>
          <Bloom
            mipmapBlur
            intensity={isMacOS() ? 0 : 2.0}
            kernelSize={KernelSize.LARGE}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>

        <Camera />
        <MyOrbitControl />
        <Room />
        <Moon />
        <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade speed={2} />
      </Selection>
    </Canvas>
  );
};

useGLTF.preload(MODEL_PATH.PRIMARY);

export default MyCanvas;
