// pages/index.jsx
import dynamic from 'next/dynamic';

const Avatar3D = dynamic(() => import('../components/Avatar3D'), { ssr: false });

export default function Home() {
  return (
    <main style={{ backgroundColor: '#111', height: '100vh' }}>
      <Avatar3D />
    </main>
  );
}
