<template>
    <div class="login">
        
        <div id="container" class="center txt-center">
            <a href="../index.html"><img id="logo" src="../../public/assets/desenrola_logo.png"></a>
            <h1>Login</h1>
            <h2>Seja bem vindo ao Desenrola</h2>
            <form class="form-group"> <!-- Insert back feature -->
                <input type="text" class="form-control form-padding input-lg" id="login_input" v-model="email" placeholder="Digite seu email ou user...">
                <input type="password" class="form-control form-padding input-lg" id="password_input" v-model="password" placeholder="Digite sua senha...">
                <div class="dpl-block">
                    <a href="#"><h5>Esqueceu a senha?</h5></a>
                    <a href="../../sign_up.html"><h5>Não possui conta? Cadastre-se</h5></a>
                </div>
                <button v-on:click="login" class="btn btn-lg login-btn dpl-block form-padding">LOGIN</button>
            </form>     
        </div>
        <div id="bg">
            <img id="shape_top" class="pos-fix shape" src="../../public/assets/shape_1.svg">
            <img id="shape_bottom" class="pos-fix shape" src="../../public/assets/shape_2.svg">
        </div>

    </div>
</template>


<script>
import fixtures from '../shared/fixtures'

export default {
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        login() {
            if(fixtures.fakeUser.email == this.email && fixtures.fakeUser.password == this.password)
                this.$router.push('/panel')
            else
                alert("Usuário ou senha não conferem... Por favor, tente novamente!")
        }
    },
}
</script>