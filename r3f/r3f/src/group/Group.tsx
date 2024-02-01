import { CameraControls } from '@react-three/drei';
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Box from '../components/Box';

const COUNT = 300;
const BOX_ARRAY = new Array(30).fill(0);

const Group = () => {

    const groupRef = useRef<THREE.Group>(null);
    const cameraRef = useRef<CameraControls>(null);

    const [disableAutoRotate, setDisableAutoRotate] = useState<boolean>(false);


    const initialPositions = useMemo(() => {
        const randomPositions = new Array(COUNT * 3);
        for (let i = 0; i < COUNT * 3; i++) {
            randomPositions[i] = (Math.random() - 0.5) * 30;
        }
        return randomPositions;
    }, []);

    const [positions, setPositions] = useState<number[]>(initialPositions);

    useEffect(() => {
        if (!disableAutoRotate) {
            setPositions(initialPositions);
        }
    }, [disableAutoRotate, initialPositions]);


    useEffect(() => {
        cameraRef.current?.setTarget(0, 0, 0, true);
    }, []);

    useFrame((_, delta) => {
        if (cameraRef.current && !disableAutoRotate) {
            cameraRef.current.azimuthAngle -= THREE.MathUtils.degToRad(5 * delta);
        }
    });

    const boxes = useMemo(() => {
        return BOX_ARRAY.map((ele, idx) => {
            return (
                <Box
                    key={ele + idx}
                    position={positions.slice(idx * 3, idx * 3 + 3)}
                />
            );
        });

    }, [positions]);

    return (
        <group ref={groupRef}>
            <CameraControls
                maxDistance={100}
                ref={cameraRef}
                enabled={true}
                dollyToCursor={false}
                onStart={() => {
                    setDisableAutoRotate(true);
                }}
                onEnd={() => {
                    setDisableAutoRotate(false);
                }}
            />
            {boxes}
        </group>
    );
};

export default Group;