import { useEffect, useState } from "react"
import useStore from "../hooks/useStore"

const TextureSelector = () =>
{
    const [visible, setVisible] = useState<boolean>(false)
    const [activeTexture] = useStore((state) => [state.texture])

    useEffect(() =>
    {

    }, [activeTexture])

}

export default TextureSelector