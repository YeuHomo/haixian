<template>
    <div class="bottom">
        <div class="ma flex">
            <div class="bottom-logo">
                <img src="../assets/img/common/logo-bottom.png" alt="">
            </div>
            <div class="phone">
                <div class="mobile">
                    <img src="../assets/img/common/mobile-2x.png" alt="">
                    <span>全国服务电话</span>
                    <p class="number">
                        400-062-1617
                    </p>
                </div>
                <div class="address">
                    <span>地址：</span>
                    <p>
                        武汉·东西湖区·银潭路团结激光工业园9幢4楼
                        武汉乐美缘餐饮管理有限公司
                    </p>
                </div>
            </div>
            <div class="message">
                <div class="tips">
                    <div class="spot"></div>
                    <span>加盟我们</span>
                    <div class="spot"></div>
                </div>
                <div class="form">
                    <input type="text" placeholder="姓 名" v-model="name">
                    <input type="text" placeholder="电 话" v-model="tel">
                    <input type="text" placeholder="省 份" v-model="province">
                </div>
                <div class="btn sub" @click="sub">提交留言</div>
            </div>
            <div class="link">
                <h5>友情链接</h5>
                <p>
                    <a href="http://www.maymao.cn/">冒菜联盟</a>
                    |
                    <a href="http://guomincc.com/">串串加盟</a>
                </p>
                <div class="other-link">
                    <small>其他联系方式</small>
                    <div class="clearfixed other-btn">
                        <a href="tencent://message/?uin=1179456802">
                            <img src="../assets/img/common/qq.png" alt="">
                        </a>
                        <a class="middle" href="https://weibo.com/6338432011/manage">
                            <img src="../assets/img/common/sina.png" alt="">
                        </a>

                        <div class="wechat">
                            <div :class="['ewm', wechat_show ? 'active' : '']">
                                <img src="../assets/img/index/ewm.jpg" alt="">
                            </div>
                            <img src="../assets/img/common/wechat.png" alt="" @click="wechat_show = !wechat_show">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            tel: '',
            province: '',
            wechat_show: false
        };
    },
    mounted() {
    },
    methods: {
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
        }
    }
};
</script>

<style lang="sass">
  @import "bottom"
</style>
