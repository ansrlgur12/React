import Box from "./components/Box"
import { Canvas } from "@react-three/fiber"

function App() {

  return (
    <main>
      <div>
        <Canvas
          camera={{
            position: [0, 0, 10],
          }}
        >
          <ambientLight />
          <Box position={[0, 0, 0]} />
        </Canvas>
      </div>
    </main>
  )
}

export default App
