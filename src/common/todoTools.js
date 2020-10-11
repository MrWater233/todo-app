import {
    computed,
    ref
} from "vue";

export default function todoTools() {

    //Todos数组
    const todos = ref([]);

    // filter当前的状态
    const filterStatus = ref("all")

    // 完成过滤的Todo列表
    const filteredTodos = computed(() => {
        // switch (filterStatus.value) {
        //     case "done":
        //         return todos.value.filter((todo) => todo.completed);
        //     case "todo":
        //         return todos.value.filter((todo) => !todo.completed);
        //     default:
        //         return todos.value;
        // }
        return todos.value;
    });

    // 从远程获取Todos
    const fetchTodos = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
        const remoteTodos = await response.json();
        todos.value = remoteTodos.map(todo => ({
            id: todo.id,
            content: todo.title,
            completed: todo.completed
        }));
    };
    
    // 增加Todo
    const addTodo = (todo) => todos.value.push(todo);

    return {
        todos,
        filterStatus,
        filteredTodos,
        fetchTodos,
        addTodo
    }
}