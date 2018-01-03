<template>
    <div>
        <commonNav :router="'us'"></commonNav>
        <div class="brand">
            <img src="../../../assets/img/us/brand.jpg" alt="">
            <div class="banner-txt">
                <div class="ma">
                    <div class="brand-txt">
                        <p class="english">ABOUT US</p>
                        <p class="chinese">关于我们</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="introduce">
            <div class="ma">
                <div class="introduce-btns">
                    <div :class="['btn', intro_type === 'brand' ? 'active' : '']" @click="intro_type = 'brand'">
                        <img src="../../../assets/img/brand/brand-summary.png" alt="">
                    </div>
                    <div :class="['btn', intro_type === 'company' ? 'active' : '']" @click="intro_type = 'company'">
                        <img src="../../../assets/img/brand/company-summary.png" alt="">
                    </div>
                </div>
                <div class="clearfixed all-summary">
                    <div :class="['brand-summary summary', intro_type === 'brand' ? 'active' : '']">
                        <div class="item">
                            <h3 class="title">/ <span>一家专做海鲜焖面的体验店</span> /</h3>
                            <div class="content ui-bg-pink">
                                <div class="content-txt">
                                    <div class="line"></div>
                                    <pre>
                                海鲜见面，以面为基础，搭配各类海鲜，不断革新食材，
                                在极简舒适的北欧风用餐环境里给消费者带来前所未有的味蕾饕餮之旅。
                                足不出户，便可享受世界海鲜美食。
                                致力于打造简式海鲜焖面领导品牌的海鲜见面，
                                以“一人食”餐饮为核心，同时满足大众的快时尚消费理念。
                                除专研海鲜焖面外，还不断丰富产品类别，
                                提供多款风味米线和海鲜烩饭，满足食客们的各类美食需求。
                                截止目前，海鲜见面已遍布全国30多座城市，近百家店。
                            </pre>
                                </div>
                                <img src="../../../assets/img/us/brand1.png" alt="">
                            </div>
                        </div>
                        <div class="item">
                            <h3 class="title">/ <span>品牌缘起</span> /</h3>
                            <div class="content ui-bg-gray">
                                <img src="../../../assets/img/us/brand2.png" alt="">
                                <div class="content-txt">
                                    <div class="line"></div>
                                    <pre>
                                海鲜，作为大自然馈赠给人类的礼物，
                                成为沿海地区人们最为喜爱烹饪的食材。
                                爱吃海鲜的人钟情于它的鲜味和营养价值。
                                对于内陆消费者来说，海鲜是价格偏高的低频消费品，
                                几十元便能吃到一份美味海鲜，成为内陆吃货的向往和期待。
                                正是基于这样的产品需求，“海鲜见面”品牌应运而生，
                                瞄准海鲜焖面这一细分品类，
                                以面为基础，搭配各类海鲜，明档明厨，
                                3分钟即可品尝到一碗鲜味浓郁的海鲜焖面。
                            </pre>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <h3 class="title">/ <span>品牌理念</span> /</h3>
                            <div class="content last ui-bg-light-green">
                                <div class="content-txt">
                            <pre>
                                海鲜见面，起于海，不止于鲜。
                                对于每一位食客来说，新鲜是一种健康的生活方式。
                                来自干净海域的新鲜食材，在透明式的中央厨房里，
                                经过道道工序，全手工操作，让每一份食材的制作，
                                宛如艺术品般呈现在每一位食客面前。
                            </pre>
                                </div>
                                <img src="../../../assets/img/us/brand3.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div :class="['company-summary summary', intro_type === 'company' ? 'active' : '']">
                        <div class="item company">
                            <img src="../../../assets/img/us/compan1.png" alt="">
                            <div class="content">
                                <h3 class="title">COMPANY</h3>
                                <div class="line"></div>
                                <pre>
                            海鲜见面依托于拥有
                            18年餐饮管理连锁经验的集团总部。
                            坐落于素有“江城”
                            美誉的湖北武汉，
                            公司大楼位处武汉市金银潭大道，
                            是一栋集智能化、信息化、现代化、
                            物流仓库于一体、品牌集中展示的
                            多功能综合生态办公楼，
                            拥有现代化大型物流配送中心，
                            综合面积6000多平方米。
                        </pre>
                            </div>
                        </div>
                        <div class="item strength">
                            <img src="../../../assets/img/us/company2.png" alt="">
                            <div class="content">
                                <h3 class="title">STRENGTH</h3>
                                <div class="line"></div>
                                <pre>
                            海鲜见面整合行业内全球最顶尖的
                            原料生产厂家与产品生产基地，保证产品品质。
                            同时，拥有18年餐饮运作经验，
                            配有产品研发中心，全面了解市场需求，
                            不断创新产品形式，
                            确保产品能够迎合消费者口味，
                            致力于打造简式海鲜焖面的领导品牌。
                        </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <commonBottom></commonBottom>
    </div>
</template>

<script>
    import commonNav from '../../../components/nav.vue';
    import commonBottom from '../../../components/bottom.vue';
    export default {
        data() {
            return {
                intro_type: 'brand'
            };
        },
        mounted() {
        },
        components: {
            commonNav,
            commonBottom
        }
    };
</script>

<style lang="sass">
    @import "style"
</style>
