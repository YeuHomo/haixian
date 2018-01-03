<template>
    <div class="pagination" >
        <div class="left li" @click="current-- && goto(current--)" >
            <img src="../assets/img/brand/left.png" alt="">
        </div>
        <div class="page">
            <div class="li" v-for="index in pages" @click="goto(index)" :class="{'active':current == index}" :key="index">
                <span>{{index}}</span>
            </div>
        </div>
        <div class="right li" @click="current++ && goto(current++)">
            <img src="../assets/img/brand/right.png" alt="">
        </div>
    </div>
</template>

<style lang="sass">
    @import "page"
</style>

<script>
    export default {
        props: {
            total: {
                default: 0
            }
        },
        data() {
            return {
                current: 1,
                showItem: 5
            };
        },
        mounted() {
        },
        computed: {
            pages() {
                const pag = [];
                if (this.current < this.showItem) {
                    let i = Math.min(this.showItem, this.total);
                    while (i) {
                        pag.unshift(i--);
                    }
                } else {
                    let middle = this.current - Math.floor(this.showItem / 2);
                    let i = this.showItem;
                    if (middle > (this.total - this.showItem)) {
                        middle = (this.total - this.showItem) + 1;
                    }
                    while (i--) {
                        pag.push(middle++);
                    }
                }
                return pag;
            }
        },
        methods: {
            goto(index) {
                if (index === this.current) return;
                this.current = index;
                this.$emit('setPageIndex', this.current - 1);
            }
        }
    };
</script>
