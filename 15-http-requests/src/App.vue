<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                    <label>Mail</label>
                    <input type="text" class="form-control" v-model="user.mail">
                </div>
                <button class="btn btn-primary" @click="submit">Summit</button>
                <hr>
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users">{{ u.username }} - {{ u.mail }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: '',
                    mail: ''
                },
                users: [],
                resource: {}
            };
        },
        created() {
            this.resource = this.$resource('data.json');
        },
        methods: {
            submit() {
                // this.$http.post('data.json', this.user)
                //     .then(response => {
                //         console.log(response);
                //     }, error => {
                //         console.error(error);
                //     });

                // See: https://github.com/pagekit/vue-resource/blob/develop/docs/resource.md
                this.resource.save({}, this.user);
            },
            fetchData() {
                this.$http.get('data.json')
                    .then(response => {
                        return response.json();
                    }, error => {
                        console.error(error);
                    })
                    .then(data => {
                        const resultArray = [];
                        for (let key in data) {
                            resultArray.push(data[key]);
                        }
                        this.users = resultArray;
                    });
            }
        }
    }
</script>

<style>
</style>
