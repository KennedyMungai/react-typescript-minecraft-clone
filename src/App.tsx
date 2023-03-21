import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

type Props = {}

const App = (props: Props) =>
{
  return (
    <>
      <Canvas>
        <Sky
          sunPosition={[100, 100, 20]}
        />
      </Canvas>
    </>
  )
}

export default App