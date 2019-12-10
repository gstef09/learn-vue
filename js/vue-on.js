var vm = new Vue({
    el: "#app",
    data: {},
    methods: {
        send: () => {
            alert('Send!')
        },
        eventClick: () => {
            alert('Clicked!')
        },
        copyText: ()=>{
            alert('Copied!')
        }
    },
})