import useStore from "../hooks/useStore"
import Cube from "./Cube"


const Cubes = () =>
{
    const [cubes] = useStore((state) =>
        [
            state.cubes
        ])

    return cubes.map(({ key, x, y, z, texture }) => 
    {
        return (
            <Cube key={key} />
        )
    })
}

export default Cubes