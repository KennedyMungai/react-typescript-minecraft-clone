import { useState } from "react"
import useStore from "../hooks/useStore"

const TextureSelector = () =>
{
    const [visible, setVisible] = useState<boolean>(false)
    const [activeTexture] = useStore((state) => [state.texture])
}

export default TextureSelector