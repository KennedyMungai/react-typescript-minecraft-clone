import { useSphere } from "@react-three/cannon"
import { useThree } from "@react-three/fiber"
import { useRef } from "react"
import { Mesh } from "three"


const Player = () =>
{
    const { camera } = useThree()
    const [ref] = useSphere<Mesh>(() =>
    ({
        mass: 1,
        type: 'Dynamic',
        position: [0, 0, 0]
    }))

    const position = useRef<[int, int, int]>([0, 0, 0])

    return (
        <mesh ref={ref}>

        </mesh>
    )
}

export default Player       