<template>
    <div class="dicas">

        <Nav />
        
        <header>
        <div class="user-area">
            <a href="#"></a>
            <a href="#" clas="notification"><i class="far fa-bell"></i><span class="Circle"> 3</span></a>
            <a href="#">
                <div clas="user-img">
                    <img class="user" src="../../public/demos/Ellipse 1.png">
                </div>
                <a href="../build/login.html">Sair</a>      
            </a>
        </div>
        </header>
        <div id="content-area">
            <div class="heading">
            <div class="cards">
                <div class="card">
                    <div class="gráfico">
                        <h1>Marcos, As Melhores Dicas São As 
                            Formuladas Especialmente Para Você!</h1>
                        <p>Para saber mais clique no card!</p>
                        <img class="cards" src="../../public/assets/cards.svg">
                    </div>
                </div>
            </div>
            </div>
        </div>
                
    </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
export default {
    components: {
        Nav
    }
}
</script>