import { useSphere } from "@react-three/cannon"
import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { Mesh, Vector3 } from "three"
import useKeyboard from "../hooks/useKeyboard"

const JUMP_FORCE = 5
const SPEED = 5

const Player = () =>
{
    const {
        moveForward,
        moveBackward,
        jump,
        moveRight,
        moveLeft
    } = useKeyboard()

    const { camera } = useThree()
    const [ref, api] = useSphere<Mesh>(() =>
    ({
        mass: 1,
        type: 'Dynamic',
        position: [0, 1, 10]
    }))

    const position = useRef<[number, number, number]>([0, 0, 0])

    useEffect(() =>
    {
        api.position.subscribe((p) => position.current = p)
    }, [api.position])

    const velocity = useRef<[number, number, number]>([0, 0, 0])

    useEffect(() =>
    {
        api.velocity.subscribe((v) => velocity.current = v)
    }, [api.velocity])


    useFrame(() => 
    {
        camera.position.copy(new Vector3(position.current[0], position.current[1], position.current[2]))

        const direction = new Vector3()
        const frontVector = new Vector3(0, 0, ((moveBackward ? 1 : 0) - (moveForward ? 1 : 0)))
        const sideVector = new Vector3((moveLeft ? 1 : 0) - (moveRight ? 1 : 0), 0, 0)

        direction
            .subVectors(frontVector, sideVector)
            .normalize()
            .multiplyScalar(SPEED)
            .applyEuler(camera.rotation)

        if (jump && Math.abs(velocity.current[1]) < 0.05)
        {
            api.velocity.set(velocity.current[0], JUMP_FORCE, velocity.current[2])
        }
    })

    return (
        <mesh ref={ref}>

        </mesh>
    )
}

export default Player       