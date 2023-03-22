import { usePlane } from '@react-three/cannon'
import { Mesh, NearestFilter, RepeatWrapping } from 'three'
import useStore from '../hooks/useStore'
import { groundTexture } from '../images/textures'


const Ground = () =>
{
    const [ref] = usePlane<Mesh>(() =>
    ({
        rotation: [-Math.PI / 2, 0, 0], position: [0, 0, 0]
    }))

    const [addCube] = useStore((state) => [state.addCube])

    groundTexture.magFilter = NearestFilter
    groundTexture.wrapS = RepeatWrapping
    groundTexture.wrapT = RepeatWrapping
    groundTexture.repeat.set(100, 100)

    return (
        <mesh
            ref={ref}
            onClick={(e) =>
            {
                e.stopPropagation()
            }}
        >
            <planeBufferGeometry
                attach='geometry'
                args={[100, 100]}
            />
            <meshStandardMaterial
                attach='material'
                map={groundTexture}
            />
        </mesh >
    )
}

export default Ground