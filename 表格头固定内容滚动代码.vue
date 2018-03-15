<template>
<div class="user_manage_wrap">
 
    <div class="meg_add_members_window">
         <div class="top">
             <div class="left">共查询到{{search_length}}名用户</div>
             <div class="right"></div>
         </div> 
         
         <table :class="[ os_windows ? 'usedetail_table_windows' : 'usedetail_table' ]">
           <thead class="fixedThead">
              <tr style="background-color:#f3f5fa">
                  <td>
                     <div style="width:80px" class="first_linetd">成员</div>
                  </td>
                  <td>
                     <div style="width:60px" class="first_linetd">部门</div>
                  </td>
                  <td>
                     <div style="width:60px" class="first_linetd">岗位</div>
                  </td>
                  <td>
                     <div style="width:120px" class="first_linetd">手机号</div>
                  </td>
                  <td>
                     <div style="width:180px" class="first_linetd">邮箱</div>
                  </td>
                  <td>
                     <div style="width:55px" class="first_linetd">选择</div>
                  </td>
              </tr>
            </thead>
            <tbody class="scrollTbody">  
              <tr class="add_td_content" v-for="item in add_search_result" :key="item.light_app_id">
                 <td >
                     <div style="width:80px">{{item.name_cn}}</div>
                 </td>
                 <td >
                     <div style="width:60px">xx</div>
                 </td>
                 <td >
                     <div style="width:60px">xx</div>
                 </td>
                 <td >
                     <div style="width:120px">{{item.phone}}</div> 
                 </td>
                 <td >
                     <div style="width:180px">{{item.email}}</div> 
                 </td>
                 <td >
                     <div :style="{width:td_content_6+'px'}">xx</div> 
                 </td>
              </tr>
            </tbody>
         </table>
    </div>
   
</div>
</template>
<script>
export default {
  components:{
   
  },
  data(){
    return {
        
        search_length:2,
        add_search_result:[],
        os_windows:false,
        td_content_6:55,


        mock_add_search_result:[
           {
               "email": "hmge@skyfieldgroup.com",
               "name_cn": "葛鹤鸣1",
               "name_en": "Carl Ge",
               "phone": "+8613520358684",
               "portal_uid": 17
           },
           {
               "email": "hmge@skyfieldgroup.com",
               "name_cn": "葛鹤鸣2",
               "name_en": "Carl Ge",
               "phone": "+8613520358684",
               "portal_uid": 17
           },
           {
               "email": "hmge@skyfieldgroup.com",
               "name_cn": "葛鹤鸣3",
               "name_en": "Carl Ge",
               "phone": "+8613520358684",
               "portal_uid": 17
           },
           {
               "email": "hmge@skyfieldgroup.com",
               "name_cn": "葛鹤鸣4",
               "name_en": "Carl Ge",
               "phone": "+8613520358684",
               "portal_uid": 17
           },
        ]
    }
  },
  mounted(){
    //console.log('mounted')
    this.check_os()  //判断操作系统
    this.add_search_result = this.mock_add_search_result
  },
  methods:{
    check_os(){  //判断操作系统切换样式
        if(navigator.userAgent.indexOf('Windows') >= 0){           
           if(this.appuse_list.length < 10){
               this.td_content_6=55
           }else{
               this.td_content_6=51
           } 
           this.os_windows = true
        }
    },
  }
}
</script>
<style lang="scss" scoped>
.user_manage_wrap{
    
    .meg_add_members_window{
        border-radius:4px;
        width:610px;
        height:322px;
        background:#ffffff;
       
        .usedetail_table{ 
            margin-top: 20px;
            margin-left: 20px;
           .fixedThead{
              display: block;
              width: 100%;
           }
           .scrollTbody{
              display: block;
              max-height: 307px;
              overflow-y: auto;
              //width: 365px;
           }
           .first_linetd{
            color:#666;
            height:30px;
            text-align:center;
            line-height:30px;
           }
           .last_linetd{
            color:#2389ff;
            height:30px;
            text-align:center;
            line-height:30px;
           }
           .add_td_content td{
            color:#333;
            height:30px;
            font-size: 12px;
            text-align:center;
            line-height:30px;
            border:1px solid #e5e5e5;
           }
        }
        .usedetail_table td{
          border-top:1px solid #e5e5e5;
          border-left:1px solid #e5e5e5;
          border-right:1px solid #e5e5e5;
        }

        .usedetail_table_windows{   
           margin-top: 20px;
           margin-left: 20px; 
           ::-webkit-scrollbar{
             width: 4px;
             height: 4px;
           }
           ::-webkit-scrollbar-thumb{
             border-radius: 2em;
             background-color: rgba(50,50,50,.3);
           }
           ::-webkit-scrollbar-track{
             border-radius: 2em;
             background-color: rgba(50,50,50,.1);
           }
           .fixedThead{
              display: block;
              width: 100%;
           }
           .scrollTbody{
              display: block;
              max-height: 307px;
              overflow-y: auto;
              width: 365px;
           }
           .first_linetd{
            color:#666;
            height:30px;
            text-align:center;
            line-height:30px;
           }
           .last_linetd{
            color:#2389ff;
            height:30px;
            text-align:center;
            line-height:30px;
           }
           .add_td_content td{
            color:#333;
            height:30px;
            font-size: 12px;
            text-align:center;
            line-height:30px;
            border:1px solid #e5e5e5;
           }
        }
        .usedetail_table_windows td{
          border-top:1px solid #e5e5e5;
          border-left:1px solid #e5e5e5;
          border-right:1px solid #e5e5e5;
        }
    }
}
</style>














