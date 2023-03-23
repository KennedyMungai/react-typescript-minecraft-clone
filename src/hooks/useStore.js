import { nanoid } from "nanoid";
import { create } from "zustand";


const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key))
const setLocalStorage = (key, value) => JSON.stringify(window.localStorage.setItem(key, value))


const useStore = create((set) =>
({
    texture: 'dirt',
    cubes: [],
    addCube: (x, y, z) =>
    {
        set((prev) => (
            {
                cubes: [
                    ...prev.cubes,
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
        set((prev) => (
            {
                cubes: prev.cubes.filter(cube => 
                {
                    const [X, Y, Z] = cube.position
                    return X !== x || Y !== y || Z !== z
                })
            }
        ))
    },
    setTexture: (texture) => 
    {
        set(() => 
        {

        })
    },
    saveWorld: () => { },
    resetWorld: () => { },
}))

export default useStore