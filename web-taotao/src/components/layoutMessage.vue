<template>
    <div class="layoutMessage">
            <!-- <header-nav @changeContent="contentHandle"></header-nav> -->
            <header-nav></header-nav>
            <div class="main">
                <div class="mainLeft">

                    <div class="listBox" >
                        <h1>{{contents.title}}</h1>
                        <p class="colDefault">
                            时间：<span class="colInfo">{{contents.addTime}}</span> -
                            
                            阅读：<span class="colInfo">{{contents.views}}</span> -
                        </p>
                        <p>{{contents.description}}</p>
                        <p>{{contents.content}}</p>
                    </div>

                </div>
            </div>
    </div>
</template>

<script>
import Home from '@/providers/home';
import headerNav from '@/components/common/header';
export default {
  name:'layoutMessage',
  components: {
        headerNav
  },
  data(){
      return {
          contents:[]
      }
  },
  created(){
        let messagename=this.$route.params.messagename
        Home.getcontentMessage({contentid:messagename}).then((Response)=>{
                    //this.contents=Response.contents
                   
                    Response.content.addTime=new Date(+new Date(new Date(Response.content.addTime).toJSON())+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')
                    this.contents=Response.content
                },err=>{
                console.log(err)
                });
  },
  methods:{

  }

}
</script>
<style scoped>
</style>