var vm = new Vue({
    el: "#app",
    data: {},

    beforeCreate: () => {
        console.log('Before create');

    },
    beforeMount: () => {
        console.log('Before mount');
    },
    created: () => {
        console.log('created');
    },

})