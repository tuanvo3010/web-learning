const BREED_API = "https://dog.ceo/api/breeds/list/all";
const SUB_BREED_API = "https://dog.ceo/api/breeds/subBreed/list/"
const BREED_IMAGE_API = "https://dog.ceo/api/breeds/image/random"

export const getAllBreeds = () => {
    return axios.get(BREED_API)
}
export const getSubBreeds = (breed) => {
    return axios.get(SUB_BREED_API.replace("subBreed", breed))
}