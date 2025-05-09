import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function DionisoModel() {
  const { scene } = useGLTF('/dioniso.glb');
  return <primitive object={scene} scale={1.5} />;
}

export default function Avatar3D() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} />
        <OrbitControls enableZoom={false} />
        <DionisoModel />
      </Canvas>
    </div>
  );
}

useGLTF.preload('/dioniso.glb');

