'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Plane } from '@react-three/drei';
import * as THREE from 'three';

function WaveMesh() {
    const meshRef = useRef<THREE.Mesh>(null);

    // Create a grid of points
    const { geometry, colors } = useMemo(() => {
        const geometry = new THREE.PlaneGeometry(15, 15, 64, 64);
        const count = geometry.attributes.position.count;
        const colors = new Float32Array(count * 3);

        // Initial colors
        for (let i = 0; i < count; i++) {
            colors[i * 3] = 0;     // R
            colors[i * 3 + 1] = 0.85; // G (cyan-ish)
            colors[i * 3 + 2] = 1; // B
        }

        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        return { geometry, colors };
    }, []);

    useFrame((state) => {
        if (meshRef.current) {
            const { clock } = state;
            const time = clock.getElapsedTime();

            const positions = meshRef.current.geometry.attributes.position;
            const count = positions.count;

            for (let i = 0; i < count; i++) {
                const x = positions.getX(i);
                const y = positions.getY(i);

                // Calculate wave height
                const z = Math.sin(x * 0.5 + time) * 0.5 +
                    Math.sin(y * 0.5 + time * 0.8) * 0.5;

                positions.setZ(i, z);
            }

            positions.needsUpdate = true;
            meshRef.current.rotation.x = -Math.PI / 3;
            meshRef.current.rotation.z = time * 0.05;
        }
    });

    return (
        <mesh ref={meshRef} geometry={geometry}>
            <meshStandardMaterial
                wireframe
                color="#00d9ff"
                transparent
                opacity={0.15}
                side={THREE.DoubleSide}
            />
        </mesh>
    );
}

export default function WaveBackground() {
    return (
        <div className="absolute inset-0 -z-20 overflow-hidden">
            <Canvas camera={{ position: [0, 4, 4], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <WaveMesh />
            </Canvas>
        </div>
    );
}
