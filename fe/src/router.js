import VueRouter from 'vue-router'

// import Home from './pages/Home'
import Test from './pages/Test'



const router = new VueRouter({
    routes: [{
        path: '/test',
        name:'Test',
        component:Test
    }
    ]
});

export default router