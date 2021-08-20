<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="typeList" :value.sync="type" />
    <Tabs
      class-prefix="interval"
      :data-source="intervalList"
      :value.sync="interval"
    />
    <ol>
      <li v-for="(group, index) in result" :key="index">
        <h3 class="title">{{ group.title }}</h3>
        <ol>
          <li v-for="item in group.items" :key="item.id" class="record">
            <span>{{tagString(item.tags)}}</span>
            <!-- <span v-for="value in item.tags" :key="value.id">{{tagString(value)}}</span> -->
            <span class="notes">{{ item.notes }}</span>
            <span>￥{{ item.amount }} </span>
          </li>
        </ol>
      </li>
    </ol>
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
  /* eslint-disable no-undef */
  tagString(tags: Tag[]) {
    
    if(tags.length === 0){
      return '无'
    }else{
      let arr = []
      for(let i = 0; i<tags.length; i++){
        arr.push(tags[i].name)
      }
      return arr.join(',')
    }
  }
  get recordList() {
    return (this.$store.state as RootState).recordList
  }
  get result() {
    const { recordList } = this
    type HashTableValue = { title: string; items: RecordList[] }
    const hashTable: { [key: string]: HashTableValue } = {}
    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createdAt!.split('T')
      hashTable[date] = hashTable[date] || { title: date, items: [] }
      hashTable[date].items.push(recordList[i])
    }
    return hashTable
  }
  beforeCreate() {
    this.$store.commit('fetchRecords')
  }

  type = '-'
  interval = 'day'
  intervalList = intervalList
  typeList = recordTypeList
}
</script>

<style scoped lang="scss">
%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.title {
  @extend %item;
}
.record {
  background: white;
  @extend %item;
}
.notes {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}
</style>

<style scoped lang="scss">
::v-deep {
  .type-tabs-item {
    background: white;
    &.selected {
      background: #c4c4c4;
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
