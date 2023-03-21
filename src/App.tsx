import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

type Props = {}

const App = (props: Props) =>
{
  return (
    <>
      <Canvas>
        <Sky />
      </Canvas>
    </>
  )
}

export default App