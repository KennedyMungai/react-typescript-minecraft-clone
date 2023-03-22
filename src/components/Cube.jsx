import { useBox } from "@react-three/cannon"
import * as textures from '../images/textures'


const Cube = ({ position, texture }) =>
{
    const [ref] = useBox(() =>
    ({
        type: 'Static',
        position
    }))

    const activeTexture = textures[texture + 'Texture']

    console.log('active texture', activeTexture)

    return (
        <mesh ref={ref}>
            <boxBufferGeometry
                attach='geometry'
            />
            <meshStandardMaterial
                attach='material'
                color='hotpink'
                map={activeTexture}
            />
        </mesh>
    )
}

export default Cube