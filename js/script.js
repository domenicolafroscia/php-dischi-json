const { createApp } = Vue;

createApp({
    data() {
        return {
            todoList : [],
            apiUrl   : 'server.php'
        }
    },
    created() {
        axios.get(this.apiUrl).then((resp) => {
        this.todoList = resp.data;
        })
    },
    methods: {

    }

}).mount('#app')