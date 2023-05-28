import axios from "axios"

export const getUser = async (userId: string) => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        if (res.status === 200) {
            return res.data
        }
    } catch (error: any) {
        console.log("This is the error",error)
        throw new Error(error)
    }
}