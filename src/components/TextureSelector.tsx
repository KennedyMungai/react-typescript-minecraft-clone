import { useEffect, useState } from "react"
import useKeyboard from "../hooks/useKeyboard"
import useStore from "../hooks/useStore"

const TextureSelector = () =>
{
    const [visible, setVisible] = useState<boolean>(false)
    const [activeTexture] = useStore((state) => [state.texture])
    const actions = useKeyboard()

    useEffect(() =>
    {
        const visibilityTimeout = setTimeout(() => 
        {
            setVisible(false)
        }, 2000)

        setVisible(true)

        return () => 
        {
            clearTimeout(visibilityTimeout)
        }
    }, [activeTexture])

    return visible && (
        <div
            className="absolute centered"
        >
            TextureSelector
        </div>
    )
}

export default TextureSelector