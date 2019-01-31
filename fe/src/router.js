import VueRouter from 'vue-router'

import Home from './pages/Home'
// import Test from './pages/Test'
// import App from './App'
import Teams from './pages/Teams'
import Challenges from "./pages/Challenges";
import Scoreboard from "./pages/Scoreboard";
import Match from "./pages/Match"
import Shop from "./pages/Shop"


const router = new VueRouter({
    routes: [{
        path: '/Teams',
        name:'Teams',
        component:Teams
    },{
        path: '/Challenges',
        name:'Challenges',
        component:Challenges
    },{
        path: '/Scoreboard',
        name:'Scoreboard',
        component:Scoreboard
    },{
        path: '/Match',
        name:'Match',
        component:Match
    },{
        path: '/Shop',
        name:'Shop',
        component:Shop
    },{
        path:'/',
        name:'/Home',
        component:Home
    }
    ]
});

export default router