Vue.component("my-component",{
    template:"<button @click='clickCounter'>Clicks {{counter}}</button>",
    data: ()=>{
        return {
            counter:0
        }
    },
    methods: {
    clickCounter: function(){
        this.counter ++;
    }
    },

})
var vm = new Vue({
    el:"#app",
    
})
var myComponent = {
    template:"<button @click='clickCounter'>Clicks {{counter}}</button>",
    data: ()=>{
        return {
            counter:0
        }
    },
    methods: {
    clickCounter: function(){
        this.counter ++;
    }
    }
}
var v = new Vue({
    el:"#app2",
    components:{
        'my-button':myComponent
    }
    
})