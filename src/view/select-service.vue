<template>
  <div>
    <flexbox :gutter="0">
	  <flexbox-item  :span="1/3">
	    <group title="Services">
		  <cell style="background:lightgray"><span slot="title"><span style="vertical-align:middle;">Animal</span></span><span slot="value"><badge text="1"></badge></span></cell>
		  <cell style="border-left:5px solid grey"><span slot="title"><span style="vertical-align:middle;">Fruit</span></span><span slot="value"></span></cell>
		  <cell style="background:lightgray"><span slot="title"><span style="vertical-align:middle;">Building</span></span><span slot="value"></span></cell>
	    </group>
	  </flexbox-item>
	  <flexbox-item :span="2/3">
	    <panel header="Fruit" :list="list" :type="type"></panel>
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

export default {
  components: {
    Flexbox,
    FlexboxItem,
    Group,
    Cell,
    Badge,
    Panel,
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      message: 'A segment of Hello World!',
      type: '1',
      list: [{
        src: 'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=95fa803e3301213fdb3e468e358e5db4/48540923dd54564e8ab250deb9de9c82d0584f05.jpg',
        title: '火龙果',
        desc: '火龙果（拉丁文名：Hylocereus undulatus Britt），又称红龙果、龙珠果、仙蜜果、玉龙果。仙人掌科、量天尺属植物。',
        url: '/component/cell'
      }, {
        src: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=9f60be7fddca7bcb6976cf7ddf600006/b2de9c82d158ccbf81ef328613d8bc3eb135413f.jpg',
        title: '提子',
        desc: '提子又称“美国葡萄”、“美国提子”，是葡萄的一类品种。以其果脆个大、甜酸适口、极耐贮运、品质佳等优点，被称为“葡萄之王”。',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息'
        }
      }]
    }
  },
  methods: {
    onIndexChange (newIndex, oldIndex) {
      console.log(newIndex, oldIndex)
    }
  }
}
</script>
