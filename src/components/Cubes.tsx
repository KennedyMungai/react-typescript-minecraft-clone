import useStore from "../hooks/useStore"


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