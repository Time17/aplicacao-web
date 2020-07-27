<template>
    <div class="consent">
    
    <p>Realizando autenticação...</p>

    </div>
</template>

<script>
export default {
    props: ["uri"],
    mounted() {
        if(this.$route.params.uri)
            open(this.$route.params.uri, "autorizacao", "width=450,height=600")
        else 
            this.$router.push({name: "Panel"})
    },
}
</script>