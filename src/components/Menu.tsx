import useStore from "../hooks/useStore"


const Menu = () => 
{
    const [saveWorld, resetWorld] = useStore((state) => [state.saveWorld, state.resetWorld])
}

export default Menu