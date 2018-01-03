<template>
    <div>
        <commonNav :router="'shop'"></commonNav>
        <div class="brand">
            <img src="../../../assets/img/show/bg.png" alt="">
            <div class="banner-txt">
                <div class="ma">
                    <div class="brand-txt">
                        <p class="english">SHOP SHOW</p>
                        <p class="chinese">店铺展示</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="news">
            <div class="ma">
                <div class="news-type">
                    <div class="item">
                        <div class="h3">
                            <img src="../../../assets/img/show/shop.png" alt="">
                        </div>
                        <div class="content list">
                            <ul>
                                <li>海鲜见面·佰港城店</li>
                                <li>海鲜见面·王家湾店</li>
                                <li>海鲜见面·洪山广场店</li>
                                <li>海鲜见面·众圆广场店</li>
                                <li>海鲜见面·奥山广场店</li>
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
                        <span class="english">STORE IMAGE</span>
                        <img src="../../../assets/img/show/title.png" alt="" class="chinese">
                    </h2>
                    <div class="shop-swiper">
                        <img src="../../../assets/img/show/cs.png" alt="">
                        <div class="swiper-pagition">
                            <div class="spot active"></div>
                            <div class="spot"></div>
                            <div class="spot"></div>
                        </div>
                    </div>
                    <ul class="clearfixed list">
                        <li>
                            <div class="item">
                                <div class="img common-show-img">
                                    <img class="common-img-show" src="../../../assets/img/show/shop1.png" alt="">
                                </div>
                            </div>
                            <p class="name">海鲜见面·佰港城店</p>
                        </li>
                        <li>
                            <div class="item">
                                <div class="img common-show-img">
                                    <img class="common-img-show" src="../../../assets/img/show/shop2.png" alt="">
                                </div>
                            </div>
                            <p class="name">海鲜见面·中南路地铁站店</p>
                        </li>
                        <li>
                            <div class="item">
                                <div class="img common-show-img">
                                    <img class="common-img-show" src="../../../assets/img/show/shop3.png" alt="">
                                </div>
                            </div>
                            <p class="name">海鲜见面 · 洪山广场地铁站店</p>
                        </li>
                        <li>
                            <div class="item">
                                <div class="img common-show-img">
                                    <img class="common-img-show" src="../../../assets/img/show/shop4.png" alt="">
                                </div>
                            </div>
                            <p class="name">海鲜见面 · 王家湾店</p>
                        </li>
                        <li>
                            <div class="item">
                                <div class="img common-show-img">
                                    <img class="common-img-show" src="../../../assets/img/show/shop5.png" alt="">
                                </div>
                            </div>
                            <p class="name">海鲜见面 · 洪山广场地铁站店</p>
                        </li>
                        <li>
                            <div class="item">
                                <div class="img common-show-img">
                                    <img class="common-img-show" src="../../../assets/img/show/shop6.png" alt="">
                                </div>
                            </div>
                            <p class="name">海鲜见面 · 王家湾店</p>
                        </li>
                    </ul>
                    <commonPage :total="3" @setPageIndex="getIndex"></commonPage>
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
