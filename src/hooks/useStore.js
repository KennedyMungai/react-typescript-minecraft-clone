import { create } from "zustand";


const useStore = create((set) =>
({
    texture: 'dirt',
    cubes: [],
    addCube: (x, y, z) =>
    {
        set((prev) => (
            {
                cubes: [...prevCubes, { key: }]
            }
        ))
    },
    removeCube: () => { },
    setTexture: () => { },
    saveWorld: () => { },
    resetWorld: () => { },
}))

export default useStore