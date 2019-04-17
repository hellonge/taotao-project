<template>
  <div class="layout">
      <!-- <div class="header"></div>

      <div class="boxHeader">
        <ul class="menu">
            <router-link  exact :to="{path:'/'+item.dataname}"  :key="index" v-for="(item,index) in MenuList"   @click.native ="tabHandle(item._id.toString())" tag="li">
              {{item.name}}
            </router-link>
        </ul>
      </div> -->



        <!-- <div class="header"></div>
        <div class="boxHeader">
            <ul class="menu"> -->
                <header-nav   @changeContent="contentHandle"></header-nav>
            <!-- </ul>
        </div> -->
        
      <!-- <header-nav   @changeContent="contentHandle" @getHomecontent="home"></header-nav> -->

      <div class="main">
        <div class="mainLeft">

              <div class="listBox" :key="index" v-for="(content,index) in contents">
                  <h1>{{content.title}}</h1>
                  <p class="colDefault">
                      作者：<span class="colInfo">{{content.user.username}}</span> -
                      时间：<span class="colInfo">{{content.addTime}}</span> -
                      阅读：<span class="colInfo">{{content.views}}</span> -
                  </p>
                  <p>{{content.description}}</p>
                  <!-- <div class="function"><a href="/view/?contentid={{ content._id.toString() }}">阅读全文</a></div> -->
                  <router-link tag="div" class="function" :to="{path:'/layout/'+content.category._id.toString()+'/'+content._id.toString()}" >
                    <a>阅读全文</a>
                  </router-link>
              </div>
              
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import Home from '@/providers/home';
import headerNav from '@/components/common/header';
export default {
  name: 'layout',
  components: {
      headerNav
  },
  data () {
    return {
      contents:[]
    }
  },
  created(){


  },
  methods:{
      
      contentHandle(content){
        console.log(content)
        content.map((item)=>{
            return item.addTime=new Date(+new Date(new Date(item.addTime).toJSON())+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')
        })
        
        this.contents=content;
      
      },
      // home(content){
      //   console.log(content,222)
      // }
  }  
  // methods: {
  //         tabHandle(id){
  //             Home.getcontents({category:id}).then((Response)=>{
  //               console.log(Response)
  //               this.contents=Response.contents
  //             },err=>{
  //               console.log(err)
  //             });
  //         }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
