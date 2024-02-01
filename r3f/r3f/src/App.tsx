import Box from "./components/Box"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

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
          <Box position={[0, 0, 0]} />
          <OrbitControls />
        </Canvas>
      </div>
    </main>
  )
}

export default App
