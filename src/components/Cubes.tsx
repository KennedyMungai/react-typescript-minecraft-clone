import useStore from "../hooks/useStore"


const Cubes = () =>
{
    const [cubes] = useStore((state) =>
        [
            state.cubes
        ])

    return null
}

export default Cubes