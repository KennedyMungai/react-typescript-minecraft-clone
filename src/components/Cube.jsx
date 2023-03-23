import { useBox } from "@react-three/cannon"
import { useState } from "react"
import useStore from "../hooks/useStore"
import * as textures from '../images/textures'


const Cube = ({ position, texture }) =>
{
    const [isHovered, setIsHovered] = useState(false)

    const [ref] = useBox(() =>
    ({
        type: 'Static',
        position
    }))

    const [addCube, removeCube] = useStore((state) => [state.addCube, state.removeCube])

    const activeTexture = textures[texture + 'Texture']

    return (
        <mesh
            ref={ref}
            onClick={(e) => 
            {
                e.stopPropagation()

                // Because the geometry is a bunch of triangles not squares
                const clickedFace = Math.floor(e.faceIndex / 2)

                const { x, y, z } = ref.current.position

                if (e.altKey)
                {
                    removeCube(x, y, z)
                    return
                }
                else if (clickedFace === 0)
                {
                    addCube(x + 1, y, z)
                    return
                }
                else if (clickedFace === 1)
                {
                    addCube(x - 1, y, z)
                    return
                }
                else if (clickedFace === 2)
                {
                    addCube(x, y + 1, z)
                    return
                }
                else if (clickedFace === 3)
                {
                    addCube(x, y - 1, z)
                    return
                }
                else if (clickedFace === 4)
                {
                    addCube(x, y, z + 1)
                    return
                }
                else if (clickedFace === 5)
                {
                    addCube(x, y, z - 1)
                    return
                }
            }}
            onPointerMove={(e) => 
            {
                e.stopPropagation()
                setIsHovered(true)
            }}
            onPointerOut={(e) => 
            {
                e.stopPropagation()
                setIsHovered(false)
            }}
        >
            <boxBufferGeometry
                attach='geometry'
            />
            <meshStandardMaterial
                attach='material'
                map={activeTexture}
                transparent={true}
                color={isHovered ? 'gray' : ''}
            />
        </mesh>
    )
}

export default Cube