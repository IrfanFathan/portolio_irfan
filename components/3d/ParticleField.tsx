'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles() {
    const ref = useRef<THREE.Points>(null);
    const [particlesPosition, setParticlesPosition] = useState<Float32Array | null>(null);

    useEffect(() => {
        const positions = new Float32Array(2000 * 3);
        for (let i = 0; i < 2000; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setParticlesPosition(positions);
    }, []);

    useFrame((state) => {
        if (ref.current) {
            // Basic rotation
            ref.current.rotation.x = state.clock.elapsedTime * 0.05;
            ref.current.rotation.y = state.clock.elapsedTime * 0.075;

            // Mouse interaction
            const mouseX = state.mouse.x * 2; // -1 to 1 range scaled
            const mouseY = state.mouse.y * 2;

            // Lerp rotation towards mouse position for subtle interactive effect
            ref.current.rotation.x += (mouseY * 0.1 - ref.current.rotation.x) * 0.05;
            ref.current.rotation.y += (mouseX * 0.1 - ref.current.rotation.y) * 0.05;
        }
    });

    if (!particlesPosition) return null;

    return (
        <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#333333"
                size={0.02}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.6}
            />
        </Points>
    );
}

export default function ParticleField() {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <Particles />
            </Canvas>
        </div>
    );
}
