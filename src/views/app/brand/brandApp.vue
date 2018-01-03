<template>
    <div>
        <commonNav :router="'brand'"></commonNav>
        <div class="brand">
            <img src="../../../assets/img/brand/bg.png" alt="">
            <div class="banner-txt">
                <div class="ma">
                    <div class="brand-txt">
                        <p class="english">OUR NEWS</p>
                        <p class="chinese">品牌动态</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="news">
            <div class="ma">
                <div class="news-type">
                    <div class="item">
                        <div class="h3">
                            <img src="../../../assets/img/brand/list.png" alt="">
                        </div>
                        <div class="content list">
                            <ul>
                                <li :class="new_type === 1 ? 'active' : ''" @click="new_type = 1">品牌声浪</li>
                                <li :class="new_type === 2 ? 'active' : ''" @click="new_type = 2">新店开业</li>
                                <li :class="new_type === 3 ? 'active' : ''" @click="new_type = 3">福利活动</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item">
                        <div class="h3">
                            <img src="../../../assets/img/brand/poster-txt.png" alt="">
                        </div>
                        <div class="content">
                            <div class="common-show-img">
                                <img class="news-png" src="../../../assets/img/brand/new.png" alt="">
                                <img class="common-img-show" src="../../../assets/img/brand/poster.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="news-list">
                    <h2>
                        <span class="english">OUR NEWS</span>
                        <img class="chinese" src="../../../assets/img/brand/title.png" alt="">
                    </h2>
                    <ul class="clearfixed list">
                        <template v-for="i in [1,2,3,4,5,6,7,8,9]">
                            <li>
                                <div class="item">
                                    <div class="img common-show-img">
                                        <img class="common-img-show" src="../../../assets/img/common/default.png" alt="">
                                    </div>
                                    <div class="text-center">
                                        <p class="title"><span class="green">品牌声浪</span> | 武汉市王家湾店</p>
                                        <div class="line"></div>
                                        <p class="date">2017.12.21</p>
                                    </div>
                                </div>
                            </li>
                        </template>
                    </ul>
                    <commonPage :total="5" @setPageIndex="getIndex"></commonPage>
                </div>
            </div>
        </div>
        <commonBottom></commonBottom>
    </div>
</template>

<script>
    import commonPage from '../../../components/page.vue';
    import commonNav from '../../../components/nav.vue';
    import commonBottom from '../../../components/bottom.vue';
    export default {
        data() {
            return {
                new_type: 1
            };
        },
        mounted() {
        },
        methods: {
            getIndex(index) {
                console.log(index);
            }
        },
        components: {
            commonNav,
            commonPage,
            commonBottom
        }
    };
</script>

<style lang="sass">
  @import "style"
</style>
