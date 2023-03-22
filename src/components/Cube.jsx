import { useBox } from "@react-three/cannon"


const Cube = ({ position, texture }) =>
{
    const [ref] = useBox(() => 
    ({
        type: 'Static',
        position
    }))
}

export default Cube