import { useBox } from "@react-three/cannon"
import useStore from "../hooks/useStore"
import * as textures from '../images/textures'


const Cube = ({ position, texture }) =>
{
    const [ref] = useBox(() =>
    ({
        type: 'Static',
        position
    }))

    const [addCube, removeCube] = useStore((state) => [state.addCube, state.removeCube])

    const activeTexture = textures[texture + 'Texture']

    console.log('active texture', activeTexture)

    return (
        <mesh
            ref={ref}
            onClick={(e) => 
            {
                e.stopPropagation()

                // Because the geometry is a bunch of triangles not squares
                const clickedFace = Math.floor(e.faceIndex / 2)
            }}
        >
            <boxBufferGeometry
                attach='geometry'
            />
            <meshStandardMaterial
                attach='material'
                map={activeTexture}
            />
        </mesh>
    )
}

export default Cube