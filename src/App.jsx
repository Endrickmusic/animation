import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"

import "./index.css"

import Model from "./Model"
import Interface from "./Interface.jsx"

export default function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 4], fov: 50 }}>
        <Environment files="./textures/envmap.hdr" />
        <color attach="background" args={["#eeeeee"]} />
        <OrbitControls />
        <directionalLight
          position={[-5, 5, 5]}
          castShadow
          shadow-mapSize={1024}
        />
        <Model />
        <mesh
          rotation={[-0.5 * Math.PI, 0, 0]}
          position={[0, -0.81, 0]}
          receiveShadow
        >
          <planeGeometry args={[10, 10, 1, 1]} />
          <shadowMaterial transparent opacity={0.2} />
        </mesh>
      </Canvas>
      <Interface />
    </>
  )
}
