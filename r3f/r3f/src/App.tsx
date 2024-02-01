import Box from "./components/Box"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { randomPosition } from "./utils/RandomPosition"


function App() {

  return (
    <main>
      <div style={{width : "100vw", height : "100vh"}}>
        <Canvas
          camera={{
            position: [0, 0, 10],
          }}
        >
          <ambientLight />
          <Box position={randomPosition()} />
          <Box position={randomPosition()} />

          <OrbitControls />
        </Canvas>
      </div>
    </main>
  )
}

export default App
