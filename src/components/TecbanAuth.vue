<template>
    <div class="painel">
        
        
    <button v-on:click="getUserAccounts">Acessar Dadso minhas contas</button> <br><br>
    <button v-on:click="getUserBalances">Acessar Saldos </button> <br> <br>
    <button v-on:click="getProducts">Lista de Produtos </button> <br> <br>
    <button v-on:click="getDirectDebits">Lista de DEBITOS </button> <br>
    <button v-on:click="getOffers">Lista de OFERTAS  </button> <br>
    <a v-on:click="consentiment" class="button">Autorizo utilização dos meus dados bancários</a>



    </div>
</template>


<script>
import axios from 'axios'
import fixtures from '../shared/fixtures'

export default {
    data() {
        return {
            response_consentiment : {},
        }
    },
    mounted() {
        // if(this.viewConsentmentStatus() === "AwaitingAuthorisation")
        //     this.consentiment()
    },
    methods: {
        consentiment(){
            var data = { grant_type: "client_credentials", scope: "accounts openid" }
            axios.post(`${this.$api_url}/credentials`, data)
            .then(res => {
                localStorage.setItem("token", res.data.access_token)
                localStorage.setItem("basic_token", res.data.basic_token)
                this.getConsentiment()
            })
        },
        getConsentiment() {
            var data = fixtures.consentimento
            var token = localStorage.getItem("token")
            axios.post(`${this.$api_url}/consentiment`, {data, token})
            .then(async res => {
                this.response_consentiment = res.data
                localStorage.setItem("consentId", this.response_consentiment.Data.ConsentId)
                await this.redirectToAuth()
            })
        },
        viewConsentmentStatus() {
            var token = localStorage.getItem("token")
            var consentId = localStorage.getItem('consentId') 

            axios.get(`${this.$api_url}/consentiment/view/${consentId}?token=${token}`)
            .then(res => {
                console.log(JSON.parse(res.data).Data.Status)
                return JSON.parse(res.data).Data.Status
            })
        },
        redirectToAuth() {
            var basic_token = localStorage.getItem("basic_token")
            var consentId = localStorage.getItem("consentId")
            
            axios.get(`${this.$api_url}/redirect?token=${basic_token}&consentId=${consentId}`)
            .then(res => {
                this.$router.push({ name: "Consent", params: { uri: res.data } })
            })
        },
        generateToken() {
            var basic_token = localStorage.getItem("basic_token")
            var token = localStorage.getItem("token")
            var code = localStorage.getItem("code")
            axios.post(`${this.$api_url}/generate-token`, {token:basic_token, data: {grant_type:'authorization_code', scope: 'accounts ', code:code, redirect_uri: 'http://www.google.co.uk/'}})
            .then(async res => {
                console.log(res.data)
            })
        },
        getUserAccounts() {
            var token = localStorage.getItem("access_token")
            
            axios.get(`${this.$api_url}/accounts?token=${token}`)
            .then(res => {
                console.log(res.data.Data.Account.map(account => {
                    return {
                        profile: account.Account,
                        currency: account.Currency,
                        nickname: account.Nickname
                    }
                }))
            })
        },
        getUserBalances() {
            var token = localStorage.getItem("access_token")
            
            axios.get(`${this.$api_url}/balances?token=${token}`)
            .then(res => {
                console.log(res.data.Data.Balance)
            })
        },
        getProducts() {
            var token = localStorage.getItem("access_token")
            
            axios.get(`${this.$api_url}/products?token=${token}`)
            .then(res => {
                console.log(res.data.Data.Product.map(item => item.BCA))
            })
        },
        getDirectDebits() {
            var token = localStorage.getItem("access_token")
            
            axios.get(`${this.$api_url}/direct-debits?token=${token}`)
            .then(res => {
                console.log(res.data.Data.DirectDebit.map(debit => {
                    return {
                        amount : debit.Amount,
                        name: debit.Name
                    }
                }))
            })
        },
        getOffers() {
            var token = localStorage.getItem("access_token")
            
            axios.get(`${this.$api_url}/offers?token=${token}`)
            .then(res => {
                console.log(res.data.Data.Offer)
            })
        }
    },
}
</script>