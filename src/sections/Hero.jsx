/* eslint-disable react/no-unknown-property */
import { Leva, useControls } from "leva";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import WorkSpace from "../components/WorkSpace";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { calculateSizes } from "../constants/index.js";
import { useMediaQuery } from "react-responsive";
const Hero = () => {
  //   const x = useControls("WorkSpace", {
  //     positionX: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     positionY: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     positionZ: {
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationX: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationY: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //     },
  //     rotationZ: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //     },
  //     scale: {
  //       value: 1,
  //       min: 0.1,
  //       max: 10,
  //     },
  //   });

  const isSmall = useMediaQuery({ maxWidth: 660 });
  const isMobile = useMediaQuery({ maxWidth: 938 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-40 mt-40 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-sofadione">
          Hi, I am Debiprasad<span className="waving-hand">👋🏻</span>
        </p>
        <p className="hero_tag text-gray_gradient">A Software Developer</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Leva hidden />
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <WorkSpace
              //   position={[x.positionX, x.positionY, x.positionZ]}
              //   rotation={[x.rotationX, x.rotationY, x.rotationZ]}
              //   scale={[x.scale, x.scale, x.scale]}
              position={sizes.deskPosition}
              rotation={sizes.deskRotation}
              scale={sizes.deskScale}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
