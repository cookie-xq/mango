<template>
  <button class="button"
          @click="$emit('click',$event)">
    <slot/></button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.button {
  background: #f04b2b;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>
