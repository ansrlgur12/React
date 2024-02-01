import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Group from "./group/Group";
import "./App.css";



function App() {

  return (
    <div style={{width: "100vw", height: "100vh"}}>
      <Canvas>
        <color attach="background" args={["black"]}></color>
        <ambientLight />
        <OrbitControls />
        <Group />
      </Canvas>
    </div>
  )
}

export default App
