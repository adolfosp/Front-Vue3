<template>
  <header class="header bg-brand-main">
      <div class="header-group">
          <div class="flex items-center justify-between py-10">
              <div class="w-28 lg:w-36">
                <img class="w-full px-6 py-1" src="../../assets/imgs/logo_white.png" alt="logo">
              </div>
              <div class="flex">
                <button class="mx-6 px-6 py-2 font-bold bg-white rounded-full text-brand-main focus:outline-none">Entrar</button>
                <button class="px-6 py-2 mx-2 font-bold rounded-full bg-white text-black focus:outline-none">Criar uma conta</button>
              </div>
          </div>
          <div class="flex flex-col mt-28 items-center">
              <h1 class="text-4xl font-black text-white mx-6">
                Tenha um feedback <br> E faça seus clientes mais <br class="hidden lg:inline-block">felizes!
              </h1>
              <p class="text-lg font-medium text-white mx-6">
                  Receba ideias, reclamações e feedbacks com um <br class="hidden lg:inline-block">simples widget na página
              </p>
              <div>
                <button class="mx-6 px-6 py-2 my-5 font-bold bg-white rounded-full text-brand-main focus:outline-none">Crie uma conta grátis</button>
              </div>
          </div>
      </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
  .header{
    @import bg-braind-main w-full flex justify-center;
    height: 489px;

  }

  .header-group{
    @import flex flex-col w-4/5 max-w-6xl;
  }

  @media (min-width:640px) {
      .header-group{
        background-image: url("../../assets/imgs/balao.png");
        background-size: 428px;
        background-position:  80% 100%;
        background-repeat: no-repeat;
      }
  }
</style>
