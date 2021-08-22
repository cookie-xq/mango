<template>
    <div>
      <label class="formItem">
        <span class="name">{{this.fileName}}</span>
        <input type="text"
              :value = "value"
              @input="onValueChanged($event.target.value)"
              :placeholder="placehoder" />
        
      </label>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import { Component, Prop } from "vue-property-decorator";

  @Component
  export default class FormItem extends Vue{
    @Prop({default:''}) value!:string;

    @Prop({required:true}) fileName!:string;
    @Prop() placehoder?:string;

    onValueChanged(value:string){
      this.$emit('update:value',value);
    }
    
  }
</script>

<style lang="scss" scoped>
  .formItem {
    font-size: 14px;
    padding-left: 16px;
    .name {
      padding-right: 16px;
    }
    input {
      line-height: 40px;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }
</style>