import { useBox } from "@react-three/cannon"


const Cube = ({ position, texture }) =>
{
    const [ref] = useBox(() =>
    ({
        type: 'Static',
        position
    }))

    const active_texture = textures[texture]

    console.log(active_texture)

    return (
        <mesh ref={ref}>
            <boxBufferGeometry
                attach='geometry'
            />
            <meshStandardMaterial
                attach='material'
                color='hotpink'
            />
        </mesh>
    )
}

export default Cube