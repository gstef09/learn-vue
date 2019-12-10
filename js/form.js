var vm = new Vue({
    el: "#app",
    data: {
        errors: [],
        input: "",
        select: "",
        textArea: ""
    },
    methods: {
        sendForm: () =>{
            this.errors = [];
            if (!this.input) {
                this.errors.push("El campo input es requerido")
            }

            if (!this.select) {
                this.errors.push("El campo select es requerido")
            }

            if (!this.textArea) {
                this.errors.push("El campo textArea es requerido")
            }

        }
    },
    watch: {
        input: (new_value, old_value)=>{
            console.log(`Old value ${old_value}`);
            console.log(`New value ${new_value}`);
            
        }
    },
});