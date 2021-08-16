<template>
    <div class="nav">
        <router-link to="/money">记账</router-link>
        |
        <router-link to="/labels">标签</router-link>
        |
        <router-link to="/statistics">统计</router-link>
    </div>
</template>

<script lang="ts">
import x from '@/assets/icons/label.svg'
import y from '@/assets/icons/money.svg'
import z from '@/assets/icons/statistics.svg'


export default {};
</script>

<style lang="scss" scoped>
.nav{
    border:1px solid red;
}
</style>