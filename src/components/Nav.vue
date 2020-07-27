<template>
    <div class="navbar">

        <div id="sideMenu">
            <img id="side-logo" src="../../public/assets/desenrola_logo.png">
            <nav>
            <router-link to="/panel" id="active"> <i class="fas fa-dollar-sign"></i>Consumo </router-link>
            <router-link to="/dicas"> <i class="fas fa-lightbulb"></i>Dicas </router-link>
            <router-link to="/emprestimos"> <i class="fas fa-hand-holding-usd"></i>Empréstimos </router-link>
            <router-link to="/investimentos"> <i class="fas fa-wallet"></i>Investimentos </router-link>
            <router-link to="/cupons"> <i class="fas fa-receipt"></i>Cupons </router-link>
            <router-link to="/configuracoes"> <i class="fas fa-cog"></i>Configurações </router-link>           
            </nav>
        </div>

    </div>
</template>