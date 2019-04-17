<template>
    <div class="home">
          <!-- <header-nav @changeContent="contentHandle"></header-nav> -->
          <!-- <div class="header"></div>
              <div class="boxHeader">
                  <ul class="menu"> -->
                      <header-nav ></header-nav>
                  <!-- </ul>
              </div> -->
              <!-- <router-view></router-view> -->
          </div>
</template>

<script>
import headerNav from '@/components/common/header';
export default {
  
  name:'home',
  components: {
      headerNav
  },
  data(){
      return {
          
      }
  }

}
</script>
<style scoped>
</style>