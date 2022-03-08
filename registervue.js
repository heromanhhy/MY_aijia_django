let vm = new Vue({
    el: '#app',
    delimiters: ['[[', ']]'],
    data: {
        //v-model
        username: '',
        mobile:'',

        //v-show
        error_username: false,
        error_mobile: false,

        //error_username_message

        error_username_message: '',
        error_mobile_message: '',
    },
    methods: {
        // 用户名重复
        check_username() {
            var re = /^[a-zA-Z_\u4e00-\u9fa5][a-zA-Z0-9_\u4e00-\u9fa5_]*$/;
            if (re.test(this.username)) {
                this.error_username = false;
            } else {
                this.error_username = true;
                this.error_username_message = '';
            }
            if (this.error_username == false) {
                let url = '/users/username/' + this.username + '/count';
                axios.get(url, {
                        responseType: 'json',
                        responseEncoding: 'utf8',
                    })
                    .then(response=>{
                        if (response.data.count==1){
                            this.error_username_message='用户名重复！';
                            this.error_username= true;
                        }else{
                            this.error_username=false;
                        }
                    })
                    .catch(error=>{
                        console.log(error.response);
                    })
            
            }

        },
        // 手机号被注册
        check_mobile() {
            var re =  /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
            if (re.test(this.mobile)) {
                this.error_mobile = false;
            } else {
                this.error_mobile = true;
                this.error_mobile_message = '';
            }
            if (this.error_mobile == false) {
                let url = '/users/mobile/' + this.mobile + '/count';
                axios.get(url, {
                        responseType: 'json',
                        responseEncoding: 'utf8',
                    })
                    .then(response=>{
                        if (response.data.count==1){
                            this.error_mobile_message='手机号已经被注册过！';
                            this.error_mobile= true;
                        }else{
                            this.error_mobile=false;
                        }
                    })
                    .catch(error=>{
                        console.log(error.response);
                    })
            
            }

        },

        on_submit() {
            this.check_username()
            this.check_mobile()
            //禁用提交按钮
        }
    }

})