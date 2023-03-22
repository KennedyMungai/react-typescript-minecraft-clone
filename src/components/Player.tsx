import { useSphere } from "@react-three/cannon"
import { useThree } from "@react-three/fiber"
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
}

export default Player       