import { Canvas } from '@react-three/fiber'
import React from 'react'

type Props = {}

const App = (props: Props) =>
{
  return (
    <>
      <div>Outside Canvas</div>
      <Canvas>

      </Canvas>
    </>
  )
}

export default App