'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import * as THREE from 'three';

function RotatingChip() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
        }
    });

    return (
        <group>
            {/* Main chip body */}
            <Box ref={meshRef} args={[2, 2, 0.3]}>
                <meshStandardMaterial color="#00d9ff" metalness={0.8} roughness={0.2} />
            </Box>

            {/* Circuit lines */}
            {[...Array(4)].map((_, i) => (
                <Box
                    key={`h-${i}`}
                    position={[0, -0.7 + i * 0.5, 0.16]}
                    args={[1.8, 0.05, 0.05]}
                >
                    <meshStandardMaterial color="#64ffda" emissive="#64ffda" emissiveIntensity={0.5} />
                </Box>
            ))}

            {[...Array(4)].map((_, i) => (
                <Box
                    key={`v-${i}`}
                    position={[-0.7 + i * 0.5, 0, 0.16]}
                    args={[0.05, 1.8, 0.05]}
                >
                    <meshStandardMaterial color="#64ffda" emissive="#64ffda" emissiveIntensity={0.5} />
                </Box>
            ))}

            {/* Corner pins */}
            {[
                [-0.9, -0.9],
                [0.9, -0.9],
                [-0.9, 0.9],
                [0.9, 0.9],
            ].map(([x, y], i) => (
                <Box key={`pin-${i}`} position={[x, y, 0.2]} args={[0.15, 0.15, 0.1]}>
                    <meshStandardMaterial color="#00d9ff" metalness={1} roughness={0} />
                </Box>
            ))}
        </group>
    );
}

export default function FloatingChip() {
    return (
        <div className="w-full h-96 glass rounded-xl">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#64ffda" />
                <RotatingChip />
            </Canvas>
        </div>
    );
}
