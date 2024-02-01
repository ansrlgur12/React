import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useState, useRef, useEffect } from "react";
import { CustomBoxProps } from "../types/Box";

const COLOR_OPTIONS = [
  "red", 
  "yellow", 
  "beige", 
  "blue", 
  "green", 
  "purple"
];


export default function Box({position}: CustomBoxProps) {
  const [x, y, z] = position;
  const meshRef = useRef<THREE.Mesh>(null!);
  const animatedGroupRef = useRef<THREE.Group>(null);


  // const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let frameId: number;

    const updateLookAt = () => {
      if (animatedGroupRef.current) {
        animatedGroupRef.current.lookAt(x * 2, y * 2, z * 2);
      } else {
        frameId = requestAnimationFrame(updateLookAt);
      }
    };

    updateLookAt();

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [x, y, z]);

  useFrame(() => {
    meshRef.current.rotation.x += 0.02;
    meshRef.current.rotation.y += 0.01;
    meshRef.current.rotation.z += 0.03;
  });

  const randomColor = COLOR_OPTIONS[Math.floor(Math.random() * COLOR_OPTIONS.length)];

  return (
    <mesh
      ref={meshRef}
      scale={active ? 1.5 : 1}
      position={[x,y,z]}
      onClick={() => setActive(!active)}
      // onPointerOver={() => setHover(true)}
      // onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[4, 4, 4]} />
       <meshStandardMaterial color={randomColor} />
    </mesh>
  );
}