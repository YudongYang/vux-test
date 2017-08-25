<template>
  <div>
    <flexbox :gutter="0">
	  <flexbox-item :span="3/10">
	    <group title="Services">
        <div v-for="kind in kindList">
		  <cell style="background:lightgray">
            <span slot="title">
              <span style="vertical-align:middle;">{{ kind.title }}</span>
            </span>
            <span slot="value">
              <badge text="1"></badge>
            </span>
          </cell>
        </div>
		  <cell style="border-left:5px solid grey">
            <span slot="title">
              <span style="vertical-align:middle;">Fruit</span>
            </span>
            <span slot="value"></span>
		  </cell>
	    </group>
	  </flexbox-item>
	  <flexbox-item :span="7/10">
	    <GoodsBox header="Fruit" :list="list"></GoodsBox>
	  </flexbox-item>	
    </flexbox>
	<tabbar @on-index-change="onIndexChange">
      <tabbar-item badge="2">
        <img slot="icon" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503052643299&di=20ccc4482d2c161694f5309a72dca40a&imgtype=0&src=http%3A%2F%2Fstatic.freepik.com%2Ffree-photo%2Fshopping-cart-simple_318-30856.jpg">
        <span slot="label">News</span>
      </tabbar-item>
      <tabbar-item>
        <span slot="label">总价 ： $20.00</span>
      </tabbar-item>
      <tabbar-item style="background:limegreen">
        <span slot="label" style="font-size:20px;color:white;">NEXT</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>

import { Flexbox, FlexboxItem, Group, Cell, Badge, Panel, Tabbar, TabbarItem } from 'vux'
import GoodsBox from '../components/GoodsBox'
import GoodsData from './goodsData.json'

export default {
  components: {
    Flexbox,
    FlexboxItem,
    Group,
    Cell,
    Badge,
    Panel,
    Tabbar,
    TabbarItem,
    GoodsBox
  },
  data () {
    return {
      message: 'A segment of Hello World!',
      type: '1',
      list: GoodsData.list,
      kindList: GoodsData.kind,
      selectedKind: '0'
    }
  },
  mounted () {
    console.log(GoodsData)
  },
  methods: {
    onIndexChange (newIndex, oldIndex) {
      console.log(newIndex, oldIndex)
    }
  }
}
</script>

<style lang="less">
.actity {
  border-left:5px solid grey;
  background: white;
}
.unactity {
  background: lightgray;
}
</style>
