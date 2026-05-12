import EvilEye from './components/EvilEye'

export default function App() {
  return (
    <div className="w-screen h-screen bg-black ">
      <EvilEye
        eyeColor="#F97316"
        intensity={0.5}
        pupilSize={1.05}
        irisWidth={0.8}
        glowIntensity={0}
        scale={0.8}
        noiseScale={1.1}
        pupilFollow={2}
        flameSpeed={1}
        backgroundColor="#000000"
      />
    </div>
  )
}