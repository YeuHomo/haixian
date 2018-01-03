<template>
</template>

<style lang="sass">
    @import "scroll"
</style>

<script>
    export default {
        props: {
            loadMore: {
                type: Function
            },
            minHight: {
                default: 200
            }
        },
        data() {
            return {
                scrollDisable: true
            };
        },
        mounted() {
            const that = this;
            window.addEventListener('scroll', function() {
                const scrollTop = document.documentElement.scrollTop;
                if (scrollTop + window.innerHeight >= document.body.clientHeight - that.minHight) {
                    if (!that.scrollDisable) {
                        that.scrollDisable = true;
                        that.$emit('loading');
                    }
                }
            });
        },
        methods: {
            canScroll() {
                this.scrollDisable = false;
            },
            cantScroll() {
                this.scrollDisable = true;
            }
        }
    };
</script>
