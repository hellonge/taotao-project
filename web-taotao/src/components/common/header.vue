<template>
    <div class="header_all">
        
        <div class="header"></div>
        <div class="boxHeader">
            <ul class="menu">
                <router-link exact to="/" tag="li">首页</router-link>
                <router-link exact to="/calender" tag="li">黄历查询</router-link>
                <!-- <router-link  exact :to="{path:'/layout/'+item.dataname}"  :key="index" v-for="(item,index) in MenuList"   @click.native ="tabHandle(item._id.toString())" tag="li">
                {{item.name}}
                </router-link> -->
                <router-link   :to="{path:'/layout/'+item._id.toString()}"  :key="index" v-for="(item,index) in MenuList" tag="li">
                {{item.name}}
                </router-link>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import Home from '@/providers/home';
export default {
  name:'Header_all',
  data(){
      return {
          MenuList: '',
        //   contents:[]
      }
  },
  watch:{
      $route(){
           this.getContent()
      }
  },
  created(){
    Home.menuList().then((Response)=>{
          this.MenuList=Response.categorys
        },err=>{
          console.log(err)
        });
    this.getContent()
  },
  methods: {
        getContent(){
            let menuName=this.$route.params.dataname
            Home.getcontents({category:menuName}).then((Response)=>{
                        //this.contents=Response.contents
                        this.$emit('changeContent',Response.contents)
                    },err=>{
                    console.log(err)
                    });
        }
        // home(){
        //     Home.getcontents({category:"5938b4ea9f08a96b8d5bd8a7"}).then((Response)=>{
        //         //this.contents=Response.contents
        //         this.$emit('getHomecontent',Response.contents)
        //     },err=>{
        //     console.log(err)
        //     });
        // },

        // tabHandle(id){
        //     Home.getcontents({category:id}).then((Response)=>{
        //         //this.contents=Response.contents
        //         this.$emit('changeContent',Response.contents)
        //     },err=>{
        //     console.log(err)
        //     });
        // }
    }
}
</script>
<style scoped>
</style>