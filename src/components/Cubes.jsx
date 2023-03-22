import useStore from "../hooks/useStore"
import Cube from "./Cube"


const Cubes = () =>
{
    const [cubes] = useStore((state) =>
        [
            state.cubes
        ])

    return cubes.map((cube) => 
    {
        return (
            <Cube />
        )
    })
}

export default Cubes