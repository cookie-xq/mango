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
  </Layout>
</template>

<style scoped lang="scss">
::v-deep .type-tabs-item {
  background: white;
  &.selected {
    background: #fdb553;
    &::after {
      display: none;
    }
  }
}
::v-deep .interval-tabs-item{
  height:48px
}
</style>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Tabs from '@/components/Tabs.vue'
import intervalList from '@/constants/intervalList'
import recordTypeList from '@/constants/recordTypeList'

@Component({
  components: { Tabs },
})
export default class Statistics extends Vue {
  type = '-'
  interval = 'day'
  intervalList = intervalList;
  typeList = recordTypeList;
}
</script>
