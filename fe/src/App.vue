<template>
    <div id="app">
        <section class="hero is-medium is-dark is-bold">
            <div class="container">
                <div class="hero-head">
                    <div class="navbar">
                        <div class="navbar-board">
                            <img src="/ziti.png">
                        </div>
                        <div class="navbar-end">
                            <div class="navbar-item">
                                登陆
                            </div>
                            <div class="navbar-item">
                                注册
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hero-body">
                    <!--<img src="/ziti.png">-->
                    <!--<h1 class="title is-size-1">-->
                    <!--重庆邮电大学-->
                    <!--</h1>-->
                    <router-link to="/" @click.native="checkActive('checkActive')"><h1 class="title is-size-1">
                        网络攻防实验平台
                    </h1></router-link>

                </div>
                <div class="hero-foot">

                    <nav class="tabs is-boxed is-fullwidth">
                        <ul>
                            <li v-for="item in testtest" :key='item.value' :class='{"is-active":item.active}'>
                                <router-link :to="item.name" @click.native="checkActive(item.name)">
                                    {{item.name}}
                                </router-link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
        <section id="main" class="container">
            <router-view></router-view>
        </section>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                testtest: [{name: "Teams", active: false},
                    {name: "Challenges", active: false},
                    {name: "Scoreboard", active: false},
                    {name: "Match", active: false},
                    {name: "Shop", active: false}]
            }
        },
        methods: {
            checkActive: function (name) {
                for (var i in this.testtest) {
                    if (this.testtest[i].name === name) {
                        this.testtest[i].active = true;
                    } else {
                        this.testtest[i].active = false;
                    }
                }
            }
        }
    }
</script>

<style scoped>
    #main {
    padding-top: 2rem;
    }
</style>