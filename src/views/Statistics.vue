<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="typeList" :value.sync="type" />
    <Tabs
      class-prefix="interval"
      :data-source="intervalList"
      :value.sync="interval"
    />
    <div>
      type: {{ type }}
      <br />
      interval: {{ interval }}
    </div>
    <div>
      <ol>
        <li v-for="(group, index) in result" :key="index">
          <h3>{{group.title}}</h3>
          <ol>
            <li v-for="item in group.items" :key="item.id">
              {{ item.amount }}{{ item.createdAt }}
            </li>
          </ol>
        </li>
      </ol>
    </div>
  </Layout>
</template>

<script lang="ts">
/* eslint-disable no-undef */
/* global RecordItem */
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Tabs from '@/components/Tabs.vue'
import intervalList from '@/constants/intervalList'
import recordTypeList from '@/constants/recordTypeList'

@Component({
  components: { Tabs },
})
export default class Statistics extends Vue {
  get recordList(){
    return this.$store.state.recordList;
  }

  get result(){
    const {recordList} = this;
    type HashTableValue = { title: string,items: RecordList[] };
    const hashTable: {[key: string]: HashTableValue} = {};
    for(let i = 0; i< recordList.length; i++){
      const[date,time] =  recordList[i].createdAt!.split('T');
      hashTable[date] = hashTable[date] || {title:date,items:[]};
      hashTable[date].items.push(recordList[i]);
    }
    return hashTable;
  }

  beforeCreate(){
    this.$store.commit('fetchRecords')
  }

  type = '-'
  interval = 'day'
  intervalList = intervalList
  typeList = recordTypeList
}
</script>

<style scoped lang="scss">
::v-deep {
  .type-tabs-item {
    background: white;
    &.selected {
      background: #fdb553;
      &::after {
        display: none;
      }
    }
  }
  .interval-tabs-item {
    height: 48px;
  }
}
</style>
