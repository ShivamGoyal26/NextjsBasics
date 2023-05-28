import axios from "axios"

export const getAllUsers = async () => {
try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    if (res.status === 200) {
        return res.data
    }
} catch (error: any) {
    console.log("This is the error",error)
    throw new Error(error)
}
}