<template>
    <div>
        <commonNav :router="'cooperation'"></commonNav>
        <div class="brand">
            <img src="../../../assets/img/cooperation/bg.jpg" alt="">
            <div class="banner-txt">
                <div class="ma">
                    <div class="brand-txt">
                        <p class="english">JOIN US</p>
                        <p class="chinese">加盟合作</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="ma">
            <div class="introduce-btns">
                <div :class="['btn', coo_type === 'policy' ? 'active' : '']" @click="coo_type = 'policy'">
                    <img src="../../../assets/img/cooperation/policy.png" alt="">
                </div>
                <div :class="['btn', coo_type === 'process' ? 'active' : '']" @click="coo_type = 'process'">
                    <img src="../../../assets/img/cooperation/process.png" alt="">
                </div>
            </div>
        </div>
        <div class="news">
            <div class="ma">
                <div class="news-type">
                    <div class="item">
                        <div class="h3">
                            <img src="../../../assets/img/cooperation/policy-type.png" alt="">
                        </div>
                        <div class="content list">
                            <ul>
                                <li :class="new_type === 1 ? 'active' : ''" @click="new_type = 1">品牌优势</li>
                                <li :class="new_type === 2 ? 'active' : ''" @click="new_type = 2">合作要求</li>
                                <li :class="new_type === 3 ? 'active' : ''" @click="new_type = 3">合作形式</li>
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
                <div class="news-list" v-show="coo_type === 'policy'">
                    <h2>
                        <span class="english">OUR ADVANTAGES</span>
                        <span class="chinese">品/牌/优/势</span>
                    </h2>
                    <ul class="clearfixed list">
                        <li>
                            <div class="item">
                                <div class="img">
                                    <img class="item-img1" src="../../../assets/img/cooperation/item1.jpg" alt="">
                                </div>
                                <div class="text-center">
                                    <div>
                                        <p>专业产品研发,</p>
                                        <p>保持产品竞争力</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="item">
                                <div class="img">
                                    <img class="item-img2" src="../../../assets/img/cooperation/item2.jpg" alt="">
                                </div>
                                <div class="text-center">
                                    <div>
                                        <p>自建中央厨房,</p>
                                        <p>保证产品口味稳定</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="item">
                                <div class="img">
                                    <img class="item-img3" src="../../../assets/img/cooperation/item3.jpg" alt="">
                                </div>
                                <div class="text-center">
                                    <div>
                                        <p>免费量身制定图纸,</p>
                                        <p>提供专业设计技术指导</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="item">
                                <div class="img">
                                    <img class="item-img4" src="../../../assets/img/cooperation/item4.jpg" alt="">
                                </div>
                                <div class="text-center">
                                    <div>
                                        <p>18年管理经验精英团队,</p>
                                        <p>9大部门全方位支持营运</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="item">
                                <div class="img">
                                    <img class="item-img5" src="../../../assets/img/cooperation/item5.jpg" alt="">
                                </div>
                                <div class="text-center">
                                    <div>
                                        <p>全国11个物流中心,</p>
                                        <p>现代化仓储系统,</p>
                                        <p>确保配送及时</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="item">
                                <div class="img">
                                    <img class="item-img6" src="../../../assets/img/cooperation/item6.jpg" alt="">
                                </div>
                                <div class="text-center">
                                    <div>
                                        <p>专业营销策划团队,</p>
                                        <p>互联网+推广模式</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="item">
                                <div class="img">
                                    <img class="item-img7" src="../../../assets/img/cooperation/item7.jpg" alt="">
                                </div>
                                <div class="text-center">
                                    <div>
                                        <p>资深督导一对一指导,</p>
                                        <p>定期跟踪回访运营情况</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="item">
                                <div class="img">
                                    <img class="item-img8" src="../../../assets/img/cooperation/item8.jpg" alt="">
                                </div>
                                <div class="text-center">
                                    <div>
                                        <p>实时企划活动海报,</p>
                                        <p>让店面营销更有活力</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="requires">
                        <div class="title">
                            <p class="english">COOPERATION REQUIRES</p>
                            <img src="../../../assets/img/cooperation/require-title.png" alt="" class="chinese">
                        </div>
                        <div class="claims">
                            <div class="flex">
                                <div class="claim claim1">
                                    <img src="../../../assets/img/cooperation/icon1.png" alt="">
                                    <p class="icon-title">租金成本</p>
                                    <div class="icon-summary">
                                        <p>营业额的25%以内</p>
                                    </div>
                                </div>
                                <div class="claim claim2">
                                    <img src="../../../assets/img/cooperation/icon2.png" alt="">
                                    <p class="icon-title">签约人要求</p>
                                    <div class="icon-summary">
                                        <p>认可品牌文化，服从公司管理、</p>
                                        <p>能亲力亲为参与店面的经营管理、</p>
                                        <p>能亲自参加公司组织的全程培训课程</p>
                                    </div>
                                </div>
                                <div class="claim claim3">
                                    <img src="../../../assets/img/cooperation/icon3.png" alt="">
                                    <p class="icon-title">员工要求</p>
                                    <div class="icon-summary">
                                        <p>2-6人</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex2">
                                <div class="claim claim4">
                                    <img src="../../../assets/img/cooperation/icon4.png" alt="">
                                    <p class="icon-title">适合开店位置</p>
                                    <div class="icon-summary">
                                        <p>美食街美食城、学校商圈、</p>
                                        <p>商业步行街、商业体、交通枢纽。</p>
                                    </div>
                                </div>
                                <div class="claim claim5">
                                    <img src="../../../assets/img/cooperation/icon5.png" alt="">
                                    <p class="icon-title">选址要求</p>
                                    <div class="icon-summary">
                                        <p>20-50m2，门头不小于3米，</p>
                                        <p>有上下水，用电量25kw。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cooperation-form">
                        <div class="common-title">
                            <span class="english">COOPERATION</span>
                            <img src="../../../assets/img/cooperation/form.png" alt="" class="chinese">
                        </div>
                        <div class="line"></div>
                        <img src="../../../assets/img/cooperation/cost.png" alt="" class="cost">
                        <div class="cost-summary">
                            <img src="../../../assets/img/cooperation/icon6.png" alt="" class="cost-img">
                            <img src="../../../assets/img/cooperation/icon7.png" alt="" class="cost-img">
                            <img src="../../../assets/img/cooperation/icon8.png" alt="" class="cost-img">
                            <img src="../../../assets/img/cooperation/icon9.png" alt="" class="cost-img">
                            <img src="../../../assets/img/cooperation/icon10.png" alt="" class="cost-img">
                        </div>
                        <div class="form-item">
                            <div class="item-header">
                                <div class="clearfixed">
                                    <img src="../../../assets/img/cooperation/icon11.png" alt="" class="header-icon">
                                    <div class="header">
                                        <div class="header-title">
                                            <img src="../../../assets/img/cooperation/join.png" alt="">
                                        </div>
                                        <p class="header-summary">选合适的焖面+引进优质的品牌+用心经营＝一家成功的店</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item-form">
                                <div class="form-tr form-header">
                                    <img src="../../../assets/img/cooperation/form-title1.png" alt="">
                                </div>
                                <div class="form-tr">
                                    <div class="form-td-title td">店铺类型</div>
                                    <div class="form-td-content td">形象店</div>
                                </div>
                                <div class="form-tr">
                                    <div class="form-td-title td">加盟费用</div>
                                    <div class="form-td-content td">3万</div>
                                </div>
                                <div class="form-tr">
                                    <div class="form-td-title td">保证金</div>
                                    <div class="form-td-content td">0.5万（3年合同期满解除合同后归还）</div>
                                </div>
                                <div class="form-tr">
                                    <div class="form-td-title td">品牌管理费</div>
                                    <div class="form-td-content td">0.5万/年</div>
                                </div>
                                <div class="form-tr">
                                    <div class="form-td-title td">设备费</div>
                                    <div class="form-td-content td">2万</div>
                                </div>
                                <div class="form-tr">
                                    <div class="form-td-title td">装修费</div>
                                    <div class="form-td-content td">3万（20㎡*1500元/㎡）</div>
                                </div>
                                <div class="form-tr">
                                    <div class="form-td-title td">首批物料</div>
                                    <div class="form-td-content td">1万</div>
                                </div>
                                <div class="form-tr">
                                    <div class="form-td-title td">预计投入</div>
                                    <div class="form-td-content td">10万</div>
                                </div>
                            </div>
                        </div>
                        <div class="form-item form2">
                            <div class="item-header">
                                <div class="clearfixed">
                                    <img src="../../../assets/img/cooperation/icon12.png" alt="" class="header-icon">
                                    <div class="header">
                                        <div class="header-title">
                                            <img src="../../../assets/img/cooperation/city.png" alt="">
                                        </div>
                                        <p class="header-summary">潜力市场+优质餐饮平台+用心维护品牌当地发展=优质代理</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item-form">
                                <div class="form-tr top">
                                    <div class="form-td-title td">代理区域</div>
                                    <div class="form-td-content cells">
                                        <div class="cell">直辖市</div>
                                        <div class="cell">省会城市</div>
                                        <div class="cell">地级市</div>
                                        <div class="cell">县级市</div>
                                    </div>
                                </div>
                                <div class="form-tr">
                                    <div class="form-td-title td">具体范围</div>
                                    <div class="form-td-content cells">
                                        <div class="cell">全市区</div>
                                        <div class="cell">全市区</div>
                                        <div class="cell">市区</div>
                                        <div class="cell">市区</div>
                                    </div>
                                </div>
                                <div class="form-tr">
                                    <div class="form-td-title td">代理费用</div>
                                    <div class="form-td-content cells">
                                        <div class="cell">50万</div>
                                        <div class="cell">40万</div>
                                        <div class="cell">20万</div>
                                        <div class="cell">15万</div>
                                    </div>
                                </div>
                                <div class="form-tr">
                                    <div class="form-td-title td">保证金</div>
                                    <div class="form-td-content cells">
                                        <div class="cell">5万</div>
                                        <div class="cell">4万</div>
                                        <div class="cell">2万</div>
                                        <div class="cell">2万</div>
                                    </div>
                                </div>
                                <div class="form-tr">
                                    <div class="form-td-title td">收益范围</div>
                                    <div class="form-td-content td">
                                        <div class="summary">
                                            <p>加盟费由代理商独享</p>
                                            <p>单店管理费代理商享50%</p>
                                            <p>物料返点5%</p>
                                            <p>直营店利润</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="join-process news-list" v-show="coo_type === 'process'">
                    <div class="common-title">
                        <span class="english">BEFORE JOINING</span>
                        <img src="../../../assets/img/cooperation/join-before.png" alt="" class="chinese">
                    </div>
                    <div class="before">
                        <div class="before-item">
                            <div>
                                <p>在线沟通</p>
                                <p>留言或拨打</p>
                                <p>免费咨询热线</p>
                                <p>400-062-1617；</p>
                            </div>
                        </div>
                        <img src="../../../assets/img/cooperation/arrow-right.png" alt="">
                        <div class="before-item">
                            <div>
                                <p>海鲜见面</p>
                                <p>区域招商经理</p>
                                <p>回电了解您的基本条件</p>
                                <p>和解决您的初步疑问；</p>
                            </div>
                        </div>
                        <img src="../../../assets/img/cooperation/arrow-right.png" alt="">
                        <div class="before-item">
                            <div>
                                <p>双方面谈</p>
                                <p>具体了解加盟条件</p>
                                <p>及具体细则；</p>
                            </div>
                        </div>
                        <img src="../../../assets/img/cooperation/arrow-right.png" alt="">
                        <div class="before-item">
                            <div>
                                <p>海鲜见面</p>
                                <p>店面实体考察；</p>
                            </div>
                        </div>
                    </div>
                    <div class="common-title">
                        <span class="english">AFTER JOINING</span>
                        <img src="../../../assets/img/cooperation/join-after.png" alt="" class="chinese">
                    </div>
                    <div class="after">
                        <p class="after-title start">
                            开业前期
                        </p>
                        <div class="after-items">
                            <div class="after-item">
                                <p class="item-title">选址评估</p>
                                <p class="item-content">
                                    专业门市开发人员协助
                                    选址评估,选择性价比
                                    最高立店地点
                                </p>
                            </div>
                            <img src="../../../assets/img/cooperation/arrow-right.png" alt="">
                            <div class="after-item">
                                <p class="item-title">店铺装修</p>
                                <p class="item-content">
                                    免费量身制定图纸,提
                                    供专业设计技术指导
                                </p>
                            </div>
                            <img src="../../../assets/img/cooperation/arrow-right.png" alt="">
                            <div class="after-item">
                                <p class="item-title">专业培训</p>
                                <p class="item-content">
                                    资深培训导师多对一辅
                                    导教学,有力保障您迅
                                    速掌握管理及产品制作
                                    技巧
                                </p>
                            </div>
                        </div>
                        <p class="after-title middle">
                            开业中期
                            <img src="../../../assets/img/cooperation/arrow-bottom.png" alt="">
                        </p>
                        <div class="after-items">
                            <div class="after-item">
                                <p class="item-title">责任指导</p>
                                <p class="item-content">
                                    资深营运经理一对一指
                                    导
                                </p>
                            </div>
                            <img src="../../../assets/img/cooperation/arrow-left.png" alt="">
                            <div class="after-item">
                                <p class="item-title">人员招募</p>
                                <p class="item-content">
                                    督导协助店面人员招募,
                                    量身制定开业促销方案
                                </p>
                            </div>
                            <img src="../../../assets/img/cooperation/arrow-left.png" alt="">
                            <div class="after-item">
                                <p class="item-title">设备订货</p>
                                <p class="item-content">
                                    帮助订购新店所需设备
                                    货品,全程追踪进度
                                </p>
                            </div>
                        </div>
                        <p class="after-title end">开业后期<img src="../../../assets/img/cooperation/arrow-bottom.png" alt=""></p>
                        <div class="after-items">
                            <div class="after-item">
                                <p class="item-title">新品研发</p>
                                <p class="item-content">
                                    专业产品研发,定期考
                                    察市场并研发潮流新品
                                </p>
                            </div>
                            <img src="../../../assets/img/cooperation/arrow-right.png" alt="">
                            <div class="after-item">
                                <p class="item-title">店铺促销</p>
                                <p class="item-content">
                                    提供新店开业促销方案,
                                    并提供全年营销指导
                                </p>
                            </div>
                            <img src="../../../assets/img/cooperation/arrow-right.png" alt="">
                            <div class="after-item">
                                <p class="item-title">定期回访</p>
                                <p class="item-content">
                                    区域经理定期巡视店面,
                                    了解跟踪回访店面运营
                                    情况
                                </p>
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
                new_type: 1,
                coo_type: 'policy'
            };
        },
        mounted() {
        },
        methods: {
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
