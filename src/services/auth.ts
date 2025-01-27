"use server";

export const loginUser = async (prev: unknown, formData: FormData) => {
  try {
    const { username, email, password } = Object.fromEntries(formData);

    if (!username || !email || !password) {
      return { message: "Please fill all of the fields" };
    }

    return { message: "Login successfully :)" };
  } catch (error) {
    return { message: "Please check your connection" };
  }
};
