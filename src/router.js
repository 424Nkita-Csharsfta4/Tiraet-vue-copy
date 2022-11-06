import { createRouter,createWebHashHistory } from "vue-router";
import Mouse from './components/Mouse.vue';
import Main from './components/Main.vue';


  const  routes =[
        //{path:'/app',component:App,alias:'/'},
        {path:"/mouse",
        name:"Mouse",
        component:Mouse},
        {path:"/about",
        name:"Main",
        component:Main
    },];
    const router = createRouter({
        history: createWebHashHistory(),
        routes,
      });
      
      export default router;
