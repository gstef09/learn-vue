var vm = new Vue({
    el: "#app",
    data: {
        flag: true,
        fontSize:50
       
    },
    computed: {
        classObject: function(){ 
            return {
                'alert-danger': this.flag
            }
        }
    }
});