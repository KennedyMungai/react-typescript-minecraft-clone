import { useEffect, useState } from "react"
import useKeyboard from "../hooks/useKeyboard"
import useStore from "../hooks/useStore"

const TextureSelector = () =>
{
    const [visible, setVisible] = useState<boolean>(false)
    const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture])
    const {
        dirt,
        grass,
        glass,
        wood,
        log,
    } = useKeyboard()

    useEffect(() =>
    {
        const pressedTexture = [dirt, grass, glass, wood, log]

        if (pressedTexture)
        {
            setTexture(pressedTexture)
        }
    }, [dirt, grass, glass, wood, log, setTexture])


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

    return (visible &&
        <div
            className="absolute centered"
        >
            TextureSelector
        </div>
    )
}

export default TextureSelector