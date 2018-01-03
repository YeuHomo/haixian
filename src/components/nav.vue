<template>
    <div class="nav">
        <div class="ma">
            <div class="logo">
                <img src="../assets/img/common/logo-top.png" alt="" @click="goRouter('index')">
            </div>
            <ul class="nav-router clearfixed">
                <li>
                    <div :class="['nav-link', router === 'index' ? 'active' : '']" @click="goRouter('index')">
                        <img src="../assets/img/common/index.png" alt="">
                    </div>
                </li>
                <li>
                    <div :class="['nav-link', router === 'us' ? 'active' : '']" @click="goRouter('us')">
                        <img src="../assets/img/common/us.png" alt="">
                    </div>
                </li>
                <li>
                    <div :class="['nav-link', router === 'brand' ? 'active' : '']" @click="goRouter('brand')">
                        <img src="../assets/img/common/brand.png" alt="">
                    </div>
                </li>
                <li>
                    <div :class="['nav-link', router === 'project' ? 'active' : '']" @click="goRouter('project')">
                        <img src="../assets/img/common/project.png" alt="">
                    </div>
                </li>
                <li>
                    <div :class="['nav-link', router === 'shop' ? 'active' : '']" @click="goRouter('shop')">
                        <img src="../assets/img/common/shop.png" alt="">
                    </div>
                </li>
                <li>
                    <div :class="['nav-link', router === 'cooperation' ? 'active' : '']" @click="goRouter('cooperation')">
                        <img src="../assets/img/common/jiameng.png" alt="">
                    </div>
                </li>
                <li>
                    <div :class="['nav-link no-hand', router === 'contact' ? 'active' : '']">
                        <img src="../assets/img/common/concat.png" alt="">
                    </div>
                </li>
                <li>
                    <div>
                        <div class="cooperation-tips">
                            <img src="../assets/img/common/mobile-1x.png" alt="">
                            全国加盟热线
                            <div class="spot"></div>
                        </div>
                        <p class="phone">400-062-1617</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ['router'],
    mounted() {
    },
    methods: {
        goRouter(link) {
            if (link === 'index') {
                location.href = '/';
            } else {
                location.href = `/views/app/${link}.html`;
            }
        }
    }
};
</script>

<style lang="sass">
  @import "nav"
</style>
