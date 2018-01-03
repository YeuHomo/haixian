<template>
    <div>
        <commonNav :router="'project'"></commonNav>
        <div class="brand">
            <img src="../../../assets/img/project/bg.jpg" alt="">
            <div class="banner-txt">
                <div class="ma">
                    <div class="brand-txt">
                        <p class="english">SEAFOOD NOODLES</p>
                        <p class="chinese">产品中心</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="news">
            <div class="ma">
                <div class="news-type">
                    <div class="item">
                        <div class="h3">
                            <img src="../../../assets/img/project/project.png" alt="">
                        </div>
                        <div class="content list">
                            <ul class="project-menu">
                                <template v-for="(value, key) in menu">
                                    <li>
                                        <p class="type-title">{{ value.name }}</p>
                                        <ul class="type-content clearfixed">
                                            <template v-for="(child, child_key) in value.children">
                                                <li class="type-name" @click="setProject(key, child_key)">
                                                    <div class="spot"></div>
                                                    {{ child.name }}
                                                </li>
                                            </template>
                                        </ul>
                                    </li>
                                </template>
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
                    <h2 class="common-title">
                        <span class="english">RISOTTO</span>
                        <span class="chinese txt">{{ type.title }}</span>
                    </h2>
                    <div class="summary-dec">
                        <p>{{ type.summary_top }}</p>
                        <p>{{ type.summary_bottom }}</p>
                    </div>
                    <div class="summary">
                        <div :class="['left', summary ? 'active' : '']" @click="summary = !summary">
                            <img src="../../../assets/img/project/project-bg.png" alt="">
                        </div>
                        <div class="right">
                            <div class="right-title">{{ project.name }}</div>
                            <div class="item-title">
                                <img src="../../../assets/img/project/spot.png" alt="">
                                <span>菜品介绍</span>
                            </div>
                            <div class="right-summary">
                                <template v-for="value in project.summary">
                                    <p>{{ value }}</p>
                                </template>
                            </div>
                            <div class="item-title" v-show="project['material'] && project['material'].length > 0">
                                <img src="../../../assets/img/project/spot.png" alt="">
                                <span>食材使用</span>
                            </div>
                            <div class="data">
                                <template v-for="value in project.material">
                                    <div>
                                        <div class="outer">
                                            <div class="common-show-img">
                                                <img src="../../../assets/img/project/xia.png" alt="" class="common-img-show">
                                            </div>
                                        </div>
                                        {{ meterial[value] }}
                                    </div>
                                </template>
                                <!--<div>-->
                                <!--<div class="outer">-->
                                <!--<div class="common-show-img">-->
                                <!--<img src="../../../assets/img/project/xia.png" alt="" class="common-img-show">-->
                                <!--</div>-->
                                <!--</div>-->
                                <!--鲜 虾-->
                                <!--</div>-->
                                <!--<div>-->
                                <!--<div class="outer">-->
                                <!--<div class="common-show-img">-->
                                <!--<img src="../../../assets/img/project/rice.png" alt="" class="common-img-show">-->
                                <!--</div>-->
                                <!--</div>-->
                                <!--米 饭-->
                                <!--</div>-->
                                <!--<div>-->
                                <!--<div class="outer">-->
                                <!--<div class="common-show-img">-->
                                <!--<img src="../../../assets/img/project/source.png" alt="" class="common-img-show">-->
                                <!--</div>-->
                                <!--</div>-->
                                <!--时 蔬-->
                                <!--</div>-->
                            </div>
                        </div>
                    </div>
                    <div class="page">
                        <img src="../../../assets/img/brand/left.png" alt="" class="pre">
                        <div class="clearfixed items">
                            <div class="item fl active">
                                <img src="../../../assets/img/project/item.png" class="item-top" alt="">
                                <img src="../../../assets/img/project/item-bg.png" class="item-bottom" alt="">
                            </div>
                            <div  class="fl item-middle">
                                <img src="../../../assets/img/project/wave.png" alt="">
                            </div>
                            <div class="item fl">
                                <img src="../../../assets/img/project/item.png" class="item-top" alt="">
                                <img src="../../../assets/img/project/item-bg.png" class="item-bottom" alt="">
                            </div>
                            <div  class="fl item-middle">
                                <img src="../../../assets/img/project/wave.png" alt="">
                            </div>
                            <div class="item fl">
                                <img src="../../../assets/img/project/item.png" class="item-top" alt="">
                                <img src="../../../assets/img/project/item-bg.png" class="item-bottom" alt="">
                            </div>
                            <div  class="fl item-middle">
                                <img src="../../../assets/img/project/wave.png" alt="">
                            </div>
                            <div class="item fl">
                                <img src="../../../assets/img/project/item.png" class="item-top" alt="">
                                <img src="../../../assets/img/project/item-bg.png" class="item-bottom" alt="">
                            </div>
                            <div  class="fl item-middle">
                                <img src="../../../assets/img/project/wave.png" alt="">
                            </div>
                            <div class="item fl">
                                <img src="../../../assets/img/project/item.png" class="item-top" alt="">
                                <img src="../../../assets/img/project/item-bg.png" class="item-bottom" alt="">
                            </div>
                        </div>
                        <img src="../../../assets/img/brand/right.png" alt="" class="next">
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
    import menu from '../../../components/menu.json';
    export default {
        data() {
            return {
                new_type: 1,
                menu,
                project: {},
                type: '',
                meterial: {
                    'sixty': '花 甲',
                    'scallop': '扇 贝',
                    'shrimp': '基围虾',
                    'sixty&lingbo': '花甲&凌波鱼',
                    'sixty&shrimp': '花甲&基围虾',
                    'sixty&crab_legs': '基围虾&蟹脚',
                    'seafood': '全料海鲜',
                    'chinese_noodle': '中式面',
                    'seasonal_vegetable': '时 蔬',
                    'rice': '米 饭',
                    'lingbo&shrimp': '凌波鱼&基围虾',
                    'scallop&squid': '扇贝&鱿鱼',
                    'squid': '鱿 鱼',
                    'rice_noodle': '米 线',
                    'lingbo': '凌波鱼',
                    'lingbo&sixty': '凌波鱼&花甲'
                },
                current: 1,
                showItem: 5,
                summary: false
            };
        },
        mounted() {
            this.type = Object.assign({}, menu['stew_noodle']);
            this.project = Object.assign({}, menu['stew_noodle'].children['garlic_sixty']);
        },
        computed: {
            total() {
                let l = {};
                for (let i in menu) {
                    l = Object.assign({}, l, menu[i].children);
                }
                return l;
            },
            key_list() {
                return Object.keys(this.total);
            },
            pages() {
                const pag = [];
                const total = this.key_list.length;
                if (this.current < this.showItem) {
                    let i = Math.min(this.showItem, total);
                    while (i) {
                        pag.unshift(i--);
                    }
                } else {
                    let middle = this.current - Math.floor(this.showItem / 2);
                    let i = this.showItem;
                    if (middle > (total - this.showItem)) {
                        middle = (total - this.showItem) + 1;
                    }
                    while (i--) {
                        pag.push(middle++);
                    }
                }
                return pag;
            }
        },
        methods: {
            test() {
                this.$http.get('/ExternalForm/BrandJoinInfo', {
                    params: {
                        name: 'zxc',
                        tel: 15726940179,
                        province: '浙江'
                    }
                }).then((response) => {
                    console.log(response);
                });
            },
            getIndex(index) {
                console.log(index);
            },
            setProject(type, child) {
                console.log(this.total);
                console.log(this.pages);
                this.project = Object.assign({}, menu[type].children[child]);
                this.type = Object.assign({}, menu[type]);
            }
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
