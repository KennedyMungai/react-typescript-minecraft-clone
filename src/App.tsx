import { Physics } from '@react-three/cannon'
import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Ground from './components/Ground'
import Player from './components/Player'
import './App.css'
import FPV from './components/FPV'
import Cubes from './components/Cubes'
import TextureSelector from './components/TextureSelector'
import Menu from './components/Menu'


const App = () =>
{
  return (
    <>
      <Canvas>
        <Sky
          sunPosition={[100, 100, 20]}
        />
        <ambientLight
          intensity={0.5}
        />
        <FPV />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <div className="cursor absolute centered">
        +
      </div>
      <TextureSelector />
      <Menu />
    </>
  )
}

export default App