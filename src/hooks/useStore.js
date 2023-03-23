import { nanoid } from "nanoid";
import { create } from "zustand";


const useStore = create((set) =>
({
    texture: 'dirt',
    cubes: [],
    addCube: (x, y, z) =>
    {
        set((prev) => (
            {
                cubes: [
                    ...prev.Cubes,
                    {
                        key: nanoid(),
                        pos: [x, y, z],
                        texture: prev.texture
                    }
                ]
            }
        ))
    },
    removeCube: (x, y, z) =>
    {
        console.log(x, y, z)
    },
    setTexture: () => { },
    saveWorld: () => { },
    resetWorld: () => { },
}))

export default useStore