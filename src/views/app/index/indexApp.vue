<template>
    <div class="app">
        <commonNav :router="'index'"></commonNav>
        <div class="index-swiper">
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide>
                    <div class="swiper-content">
                        <img src="../../../assets/img/index/bg.png" alt="">
                        <div class="txt">
                            <div class="left">
                                <div class="img">
                                    <img src="../../../assets/img/index/swiper-txt.png" alt="">
                                </div>
                                <p class="english">SELECTED INGREDIENTS</p>
                            </div>
                            <div class="right">
                                <p>只从干净海域里挑选健康海鲜</p>
                                <p>上岸，立即送往中央卫生厨房进行处理</p>
                                <p>道道工序，全手工操作</p>
                                <p>细致呵护每一份食材</p>
                            </div>
                        </div>
                        <div class="pagination">
                            <div class="spot first active" @click="swiperTo(1)"></div>
                            <div class="spot" @click="swiperTo(2)"></div>
                            <div class="spot" @click="swiperTo(3)"></div>
                            <div class="spot" @click="swiperTo(4)"></div>
                            <div class="spot" @click="swiperTo(5)"></div>
                            <div class="spot" @click="swiperTo(6)"></div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <img src="../../../assets/img/index/bg.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../../../assets/img/index/bg.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../../../assets/img/index/bg.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../../../assets/img/index/bg.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../../../assets/img/index/bg.png" alt="">
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
                <div class="swiper-scrollbar"   slot="scrollbar"></div>
            </swiper>
        </div>
        <div class="about-us">
            <div class="ma">
                <div class="index-item us">
                    <div class="index-title title">
                        <h1 class="english">ABOUT US</h1>
                        <p class="chinese txt">关 / 于 / 我 / 们</p>
                    </div>
                    <div class="index-line"></div>
                    <div class="index-content">
                        <h3 class="content-title">简式海鲜焖面的领导品牌</h3>
                        <div class="clearfixed move">
                            <img class="fl us-bg" src="../../../assets/img/index/us.png" alt="">
                            <div class="move-detail fr">
                                <!--<video @ended="is_play = false" @click="playVideo" :class="[is_play ? 'active' : '', had_play ? 'paid' : '']" id="video" src="../../../assets/video/haixiang.mp4" width="734" height="460">-->
                                    <!--您的浏览器不支持 video 标签。-->
                                <!--</video>-->
                                <img :class="['play-button', is_play ? 'active' : '', had_play ? 'paid' : '']" src="../../../assets/img/index/play.png" alt="" @click="playVideo">
                            </div>
                        </div>
                        <div class="more" @click="goRouter('us')">
                            <img src="../../../assets/img/index/more.png" alt="">
                            <span>MORE</span>
                        </div>
                    </div>
                </div>
                <div class="news index-item">
                    <div class="index-title title">
                        <h1 class="english">OUR NEWS</h1>
                        <p class="chinese txt">品 / 牌 / 动 / 态</p>
                    </div>
                    <div class="index-content">
                        <h3 class="content-title">品牌声浪 / 新店开业 / 福利活动</h3>
                        <div class="content">
                            <div class="content-item">
                                <div class="bg">
                                    <img src="../../../assets/img/index/news1.png" alt="">
                                </div>
                                <p class="name">品牌声浪 | 首届全球发布会</p>
                            </div>
                            <div class="content-item">
                                <div class="bg">
                                    <img src="../../../assets/img/index/news2.png" alt="">
                                </div>
                                <p class="name">盛大开业 | 武汉市王家湾店</p>
                            </div>
                            <div class="content-item">
                                <div class="bg">
                                    <img src="../../../assets/img/index/news3.png" alt="">
                                </div>
                                <p class="name">软装装潢全面升级</p>
                            </div>
                        </div>
                        <div class="more" @click="goRouter('brand')">
                            <img src="../../../assets/img/index/more.png" alt="">
                            <span>MORE</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="project-show">
            <div class="ma">
                <div class="index-title title">
                    <h1 class="english">SEAFOOD NOODLES</h1>
                    <p class="chinese txt">产 / 品 / 中 / 心</p>
                </div>
                <div class="show-content">
                    <img src="../../../assets/img/brand/left.png" alt="" class="pre" @click="projectPre">
                    <img src="../../../assets/img/brand/right.png" alt="" class="next" @click="projectNext">
                    <div class="show-img">
                        <img src="../../../assets/img/index/project-left.png" alt="" class="project-left">
                        <img src="../../../assets/img/index/wave.png" alt="" class="wave-left wave">
                        <img src="../../../assets/img/index/middle.png" alt="" class="middle">
                        <img src="../../../assets/img/index/wave.png" alt="" class="wave-right wave">
                        <img src="../../../assets/img/index/project-right.png" alt="" class="project-right">
                    </div>
                    <div class="show-title">
                        <div class="show-name">
                            <div class="spot left"></div>
                            <div class="spot right"></div>
                            {{ project.name }}
                        </div>
                        <p class="show-summary">{{ type.summary_top }}</p>
                        <p class="show-summary">{{ type.summary_bottom }}</p>
                    </div>
                </div>
                <div class="more" @click="goRouter('project')">
                    <img src="../../../assets/img/index/more.png" alt="">
                    <span>MORE</span>
                </div>
            </div>
        </div>
        <div class="shop-show">
            <div class="bg">
                <img src="../../../assets/img/index/shop.jpg" alt="" class="shop-bg">
                <div class="shop-name">海鲜见面王家湾店</div>
                <div class="more" @click="goRouter('shop')">
                    <img src="../../../assets/img/index/more-white.png" alt="">
                    <span>MORE</span>
                </div>
                <div class="shop-title">
                    <p class="english">SHOP SHOW</p>
                    <p class="chinese">店 / 铺 / 展 / 示</p>
                </div>
            </div>
        </div>
        <div class="join-us">
            <div class="ma">
                <div class="index-title title">
                    <h1 class="english">JOIN US</h1>
                    <p class="chinese txt">加 / 入 / 我 / 们</p>
                </div>
                <div class="join-content">
                    <div class="join-left">
                        <img src="../../../assets/img/index/join.png" alt="">
                    </div>
                    <div class="join-right">
                        <div class="item first">
                            <img src="../../../assets/img/index/home.png" class="item-img" alt="">
                            <div class="item-name ">
                                <div class="spot left"></div>
                                <div class="spot right"></div>
                                <img src="../../../assets/img/index/home-txt.png" alt="">
                            </div>
                        </div>
                        <div class="item">
                            <img src="../../../assets/img/index/company.png" class="item-img" alt="">
                            <div class="item-name ">
                                <div class="spot left"></div>
                                <div class="spot right"></div>
                                <img src="../../../assets/img/index/company-txt.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="more" @click="goRouter('cooperation')">
                    <img src="../../../assets/img/index/more.png" alt="">
                    <span>MORE</span>
                </div>
            </div>
        </div>
        <div class="contact-us">
            <div class="ma">
                <div class="index-title title">
                    <h1 class="english">CONTACT US</h1>
                    <p class="chinese txt">联 / 系 / 我 / 们</p>
                </div>
                <div class="contact">
                    <div class="address">
                        <img src="../../../assets/img/index/logo.png" alt="" class="logo">
                        <div class="phone">
                            <p class="phone-txt clearfixed">
                                <img src="../../../assets/img/index/phone.png" class="fl">
                                <span class="fl">全国服务电话</span>
                            </p>
                            <p class="phone-number">400-062-1617</p>
                        </div>
                        <p class="address-txt">
                            地址：武汉·东西湖区·银潭路团结激光工业园9幢4楼
                            武汉乐美缘餐饮管理有限公司
                        </p>
                        <p class="link">
                            友情链接：
                            <a href="http://www.maymao.cn/">冒菜联盟</a>
                            <a> | </a>
                            <a href="http://guomincc.com/">串串加盟</a>
                        </p>
                    </div>
                    <div class="form">
                        <div class="text-center">
                            <img src="../../../assets/img/index/contact.png" alt="">
                        </div>
                        <input type="text" placeholder="姓名" class="form-input" v-model="name">
                        <input type="text" placeholder="电话" class="form-input" v-model="tel">
                        <input type="text" placeholder="省份" class="form-input" v-model="province">
                        <div class="sub" @click="sub">
                            提交留言
                        </div>
                    </div>
                    <div class="other">
                        <ul>
                            <li @click="goRouter('index')">网站首页</li>
                            <li @click="goRouter('us')">关于我们</li>
                            <li @click="goRouter('brand')">品牌动态</li>
                            <li @click="goRouter('project')">产品中心</li>
                            <li @click="goRouter('shop')">店铺展示</li>
                            <li @click="goRouter('cooperation')">加盟合作</li>
                            <li class="no-hand">联系我们</li>
                        </ul>
                        <div class="icon">
                            <a href="tencent://message/?uin=1179456802">
                                <img src="../../../assets/img/index/qq.png" alt="">
                            </a>
                            <a href="https://weibo.com/6338432011/manage">
                                <img src="../../../assets/img/index/sina.png" alt="">
                            </a>
                            <div class="wechat">
                                <div :class="['ewm', wechat_show ? 'active' : '']">
                                    <img src="../../../assets/img/index/ewm.jpg" alt="">
                                </div>
                                <img src="../../../assets/img/index/wechat.png" alt="" @click="wechat_show = !wechat_show">
                            </div>
                        </div>
                        <p>其他联系方式</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css';
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import commonNav from '../../../components/nav.vue';
    import menu from '../../../components/menu.json';
    export default {
        data() {
            return {
                swiperOption: {
                    paginationClickable: true
                },
                menu,
                type: {},
                project: {},
                project_index: 0,
                name: '',
                tel: '',
                province: '',
                is_play: false,
                had_play: false,
                wechat_show: false
            };
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper;
            },
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
            value_list() {
                return Object.values(this.total);
            }
        },
        mounted() {
            this.type = Object.assign({}, menu['stew_noodle']);
            this.project = Object.assign({}, this.value_list[this.project_index]);
        },
        components: {
            commonNav,
            swiper,
            swiperSlide
        },
        methods: {
            playVideo() {
                const video = document.getElementById('video');
                this.had_play = true;
                if (this.is_play) {
                    video.pause();
                    this.is_play = false;
                } else {
                    this.is_play = true;
                    video.play();
                }
            },
            sub() {
                this.$http.get('/ExternalForm/BrandJoinInfo', {
                    params: {
                        name: this.name,
                        tel: this.tel,
                        province: this.provice
                    }
                }).then((response) => {
                    console.log(response);
                    if (response.data.Success) {
                        alert('提交成功!');
                    } else {
                        alert('提交失败,请重试!');
                    }
                });
            },
            goRouter(router) {
                if (router === 'index') {
                    location.href = '/';
                } else {
                    location.href = `/views/app/${router}.html`;
                }
            },
            swiperTo(index) {
                console.log(index);
            },
            projectPre() {
                if (this.project_index === 0) {
                    return;
                }
                this.project_index -= 1;
                if (this.project_index < 7) {
                    this.type = Object.assign({}, menu['stew_noodle']);
                } else if (this.project_index < 14) {
                    this.type = Object.assign({}, menu['stew_rice']);
                } else if (this.project_index < 21) {
                    this.type = Object.assign({}, menu['stew_rice_noodle']);
                } else {
                    this.type = Object.assign({}, menu['fruit_juice']);
                }
                this.project = Object.assign({}, this.value_list[this.project_index]);
            },
            projectNext() {
                console.log(this.total);
                if (this.project_index === this.value_list.length - 1) {
                    return;
                }
                this.project_index += 1;
                if (this.project_index < 7) {
                    this.type = Object.assign({}, menu['stew_noodle']);
                } else if (this.project_index < 14) {
                    this.type = Object.assign({}, menu['stew_rice']);
                } else if (this.project_index < 21) {
                    this.type = Object.assign({}, menu['stew_rice_noodle']);
                } else {
                    this.type = Object.assign({}, menu['fruit_juice']);
                }
                this.project = Object.assign({}, this.value_list[this.project_index]);
            }
        }
    };
</script>

<style lang="sass">
    @import "style"
</style>
