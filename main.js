let name = new Vue({
    el: '#name',
    data: {
        seen: true,
        name: '',
        message: 'Введите имя пользователя',
    },

    methods: {
        hiden: function() {
            this.seen = !this.seen;
        }
    } 
});

let app = new Vue({
    el: '#app',
    data: {
        product: '',
        message: 'Введите название продукта',
        todos: []
    },
    methods: {
        input: function() {
            this.todos.push({text: this.product});
            this.product = '';
        },

        del: function(elArr) {
           let index = this.todos.indexOf(elArr);
            this.todos.splice(index, 1);
        }
    }

})