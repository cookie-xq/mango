<template>
  
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Tabs :dataSource="recordTypeList"
          :value.sync="record.type"/>
    <div class="notes">
      <FormItem @update:value="onUpdateNotes"
            fileName="备注"
            placehoder="在这里输入备注"/>
    </div>
    <Tags @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
  /* global RecordItem */
  import NumberPad from '@/components/Money/NumberPad.vue'
  import Types from '@/components/Money/Types.vue'
  import FormItem from '@/components/Money/FormItem.vue'
  import Tags from '@/components/Money/Tags.vue'
  import Tabs from '@/components/Tabs.vue'
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator';
  import recordTypeList from '@/constants/recordTypeList'

  @Component({
    components: {Tags, FormItem, Types, NumberPad,Tabs},
  })
  export default class Money extends Vue{
    get recordList() {
      return this.$store.state.recordList;
    }

    record: RecordItem = {
        tags: [], notes: '', type: '-', amount: 0
    };
    created() {
      this.$store.commit('fetchRecords');
    }
    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }
    onUpdateNotes(value: string){
      this.record.notes = value;
    }
    saveRecord(){
      this.$store.commit('createRecord', this.record);
    }

    recordTypeList = recordTypeList;
  }
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes{
  padding: 12px 0;
}
</style>

<style lang="scss" scoped>
</style>
