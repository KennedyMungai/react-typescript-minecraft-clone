import { useBox } from "@react-three/cannon"
import * as textures from '../images/textures'


const Cube = ({ position, texture }) =>
{
    const [ref] = useBox(() =>
    ({
        type: 'Static',
        position
    }))

    const active_texture = textures[texture + 'Texture']

    console.log('active texture', active_texture)

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