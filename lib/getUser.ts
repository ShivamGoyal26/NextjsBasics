import axios from "axios";

export const getUser = async (userId: string) => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (res.status === 200) {
      if (res?.data) {
        return res.data;
      } else {
        return undefined;
      }
    }
  } catch (error: any) {
    console.log("This is the error", error);
    return undefined;
  }
};
