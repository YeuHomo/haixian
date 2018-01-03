<template>
    <div>
        <commonNav :router="'contact'"></commonNav>
        <commonBottom></commonBottom>
    </div>
</template>

<script>
    import commonNav from '../../../components/nav.vue';
    import commonBottom from '../../../components/bottom.vue';
    export default {
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
