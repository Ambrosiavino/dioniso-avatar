import dynamic from 'next/dynamic';

const Avatar3D = dynamic(() => import('../components/Avatar3D'), { ssr: false });

export default function Home() {
  return (
    <main className="bg-black">
      <Avatar3D />
    </main>
  );
}
