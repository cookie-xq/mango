<template>
    <div class="nav-wrapper">
        <div class="content">
            <slot></slot>
        </div>
        <Nav/>
    </div>
</template>

<style lang="scss" scoped>
.nav-wrapper{
    display: flex;
    border:1px solid green;
    flex-direction: column;
    min-height: 100vh;
}
.content{
    flex-grow: 1;
    overflow: auto;
    border:1px solid blue;
}
</style>