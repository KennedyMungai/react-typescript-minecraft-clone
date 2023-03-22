import { useSphere } from "@react-three/cannon"
import { useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"
import { Mesh, Vector3 } from "three"


const Player = () =>
{
    const { camera } = useThree()
    const [ref] = useSphere<Mesh>(() =>
    ({
        mass: 1,
        type: 'Dynamic',
        position: [0, 0, 0]
    }))

    const position = useRef<[number, number, number]>([0, 0, 0])

    useFrame(() => 
    {
        camera.position.copy(new Vector3(position.current[0], position.current[1], position.current[2]))
    })

    return (
        <mesh ref={ref}>

        </mesh>
    )
}

export default Player       