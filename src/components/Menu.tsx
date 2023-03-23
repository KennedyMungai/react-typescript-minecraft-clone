import useStore from "../hooks/useStore"


const Menu = () => 
{
    const [saveWorld, resetWorld] = useStore((state) => [state.saveWorld, state.resetWorld])

    return (
        <div className="menu absolute">
            <button>Save</button>
            <button>Reset</button>
        </div>
    )
}

export default Menu