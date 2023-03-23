import { useEffect, useState } from "react"
import useStore from "../hooks/useStore"

const TextureSelector = () =>
{
    const [visible, setVisible] = useState<boolean>(false)
    const [activeTexture] = useStore((state) => [state.texture])

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

}

export default TextureSelector