import { useEffect, useState } from "react"
import useKeyboard from "../hooks/useKeyboard"
import useStore from "../hooks/useStore"
import
    {
        dirtImg,
        glassImg,
        grassImg,
        logImg,
        woodImg
    } from "../images/images"


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

    const textures = {
        dirt,
        grass,
        glass,
        wood,
        log,
    }

    useEffect(() =>
    {
        const pressedTexture = Object.entries(textures).find(([k, v]) => v)

        if (pressedTexture)
        {
            setTexture(pressedTexture[0])
        }
    }, [textures, setTexture])


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

        </div>
    )
}

export default TextureSelector