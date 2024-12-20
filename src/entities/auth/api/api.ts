export const loginUser = (username: string, password: string): Promise<boolean> => {
    return new Promise((resolve) => {
        const formatedUsername = username.trim().toLowerCase();
        if (["rion", "lightning"].includes(formatedUsername) && password === "admin") {
            return setTimeout(resolve, 1000, true);
        } else {
            return setTimeout(resolve, 1000, false);
        }
    })
}