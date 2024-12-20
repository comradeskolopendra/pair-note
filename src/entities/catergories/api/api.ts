
export const getCategories = (): Promise<string[]> => {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000, ["Фильмы", "Места", "События"])
    })
}