<template>
  <div class="home">
    <TecbanAuth />

      <Nav />
      
      <header>
        <div class="user-area">
            <a href="#"></a>
            <a href="#" clas="notification"><i class="far fa-bell"></i><span class="Circle"> 3</span></a>
            <a href="#">
                <div clas="user-img">
                    <img class="user" src="../../public/demos/Ellipse 1.png"> <!-- Profile picture / DB -->
                </div>
                <a href="build/login.html">Sair</a>      
          </a>
        </div>
      </header>
      <div id="content-area">
          <div class="heading">
                <div class="cards">
                    <div class="card">
                        <div>
                            <h1>Compras Desta Fatura</h1>
                            <p>Visualize seu gasto mensal</p>
                            <img class="graphic" src="../../public/assets/graphic.png">
                            <h2>Total: R$ 1500,00</h2>
                        </div>
                    </div>
                    <div class="card">
                        <div class="texto">
                            <h1>Empréstimos</h1>
                            <p>Conheça os melhores  planos para organizar sua vida financeira1</p>
                            <a href="build/404.html" class="button">Planejar</a>
                        </div>
                        <div class="texto">
                            <h1>Investimentos</h1>
                            <p>Saiba como ter seu investimentos na palma da sua mão!</p>
                            <a href="#" class="button">Investir</a>
                        </div>
                      </div>
                  </div>
            </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TecbanAuth from '@/components/TecbanAuth.vue'
import Nav  from '@/components/Nav.vue'
export default {
  data() {
    return {
      do_consentiment: false
    }
  },
  name: 'Home',
  components: {
    TecbanAuth,
    Nav
  }
}
</script>
