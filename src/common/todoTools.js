export default function todoTools() {

    // 从远程获取Todos
    const fetchTodos = async (todos) => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
        const remoteTodos = await response.json();
        todos.value = remoteTodos.map(todo => ({
            id: todo.id,
            content: todo.title,
            completed: todo.completed
        }));
    };

    return {
        fetchTodos
    }
}