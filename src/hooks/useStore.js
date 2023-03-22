import { nanoid } from "nanoid";
import { create } from "zustand";


const useStore = create((set) =>
({
    texture: 'dirt',
    cubes: [
        {
            key: nanoid(),
            position: [1, 1, 1],
            texture: 'dirt'
        },
        {
            key: nanoid(),
            position: [2, 1, 5],
            texture: 'wood'
        },
    ],
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
    removeCube: () => { },
    setTexture: () => { },
    saveWorld: () => { },
    resetWorld: () => { },
}))

export default useStore