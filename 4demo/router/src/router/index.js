import {createRouter, createWebHistory,} from 'vue-router'

const routes =[
    {
        path:'/',
        component:()=>import("@/views/index.vue"),
    },
    {
        path:'/content',//http://localhost:5173/content?id=100&title=Jessika
        component:()=>import("@/views/content.vue"),
    },
    {
        path:'/user/:id/name/:name?', //http://localhost:5173/user/007/name/Akeelah
        name:'user',
        component:()=>import("@/views/user.vue"),
    },
    {
        path:'/vip',
        component:()=>import("@/views/vip/vip.vue"),
        children: [
            {
                path:'',
                component:()=>import("@/views/vip/default.vue"),
            },
            {
                path:'order',
                component:()=>import("@/views/vip/order.vue"),
            },
            {
                path:'info',
                component:()=>import("@/views/vip/info.vue"),
            },
        ]
    },
    {
        path:'/sip',
        redirect:{name:'user',params:{id:1002,name:"Jessika"}}
    }
]
const router = createRouter({
    history:createWebHistory(),routes
})
export default router