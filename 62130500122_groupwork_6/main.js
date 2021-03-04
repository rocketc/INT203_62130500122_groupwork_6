const constraints = {
    username: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    password: {
        presence: true,
        length: {
            minimum: 7,
            maximum: 10,
            message: "must be character and numeric between 7-10"
        }
        
    },
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    title: {
        presence: true,
    },
    languageselect: {
        presence: true
    }
}

const app =Vue.createApp({
    data() {
        return {
            formdata: {
                username: null,
                email: null,
                password: null,
                firstname: null,
                lastname: null,
                title: null,
                languageselect: null,
            },
            language_lists: [{lang_id: 1, lang_name:'English'},
                            {lang_id: 2, lang_name: 'Thai'},
                            {lang_id: 3, lang_name: 'Chinese'}],
            errors: null,
            images: "images/11.jpg",
            name: "Chutipa Jatujinda",
            job: "Student",
        }
    },
    methods: {
        checkForm(e){
            console.log(this.formdata)
            this.errors = validate(this.formdata, 
                                    constraints)
            if(!this.validPassword(this.password)){
                this.errors.push('Password must include at least one number, character, uppercase, special character')
            }
            if(!this.errors){
                alert( "Your profile is updated successfully.")
            }
            // this.errors = validate({username: this.username,
            //                         email: this.email,
            //                         password: this.password,
            //                         firstname: this.firstname,
            //                         lastname: this.lastname,
            //                         title: this.title,
            //                         languageselect: this.languageselect},
            //                         constraints)
            // if(this.errors){
            //     e.preventDefault();
            // }
        },
        validPassword(password){
            var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,10}$/;
            return pass.test(password);
        }
    }
})

app.mount('#app')


