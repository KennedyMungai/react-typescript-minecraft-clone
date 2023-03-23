import { useEffect, useState } from "react"
import useKeyboard from "../hooks/useKeyboard"
import useStore from "../hooks/useStore"

const TextureSelector = () =>
{
    const [visible, setVisible] = useState<boolean>(false)
    const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture])
    const {
        texture1,
        texture2,
        texture3,
        texture4,
        texture5,
    } = useKeyboard()

    useEffect(() =>
    {

    }, [texture1, texture2, texture3, texture4, texture5])


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