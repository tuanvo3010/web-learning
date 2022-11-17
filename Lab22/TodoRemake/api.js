const URL = {
    TODOS: "https://jsonplaceholder.typicode.com/todos?userId=1",
};
export const getAllTodos = () => {
    return axios.get(URL.TODOS);
};