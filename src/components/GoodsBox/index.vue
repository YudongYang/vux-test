<template>
  <div class="weui-panel weui-panel_access"">
    <div class="weui-panel__hd" v-if="header" v-html="header"></div>
    <div class="weui-panel__bd">
      <template>
        <div v-for="item in list" class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media-box__hd weui-goods-box__pic" v-if="item.src">
            <img class="weui-media-box__thumb" :src="item.src" alt="" />
          </div>
          <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title" v-html="item.title"></h4>
            <p class="weui-media-box__desc weui-goods-box__price" v-html="getWithSign(item.price)"></p>
			<div class="weui-goods-box__stock__no" v-if="item.stock <= 0"><img class="weui-goods-box__thumb" src="../../assets/vux_logo.png" alt="" /></div>
            <group>
              <x-number class="weui-goods-box__quantity__line" :value="0" :min="0" @on-change="change"></x-number>
            </group>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { Group, XNumber, XSwitch, Divider } from 'vux'
import Money from '../../Money'

export default {
  components: {
    XNumber,
    Group,
    XSwitch,
    Divider
  },
  name: 'GoodsBox',
  props: {
    header: String,
    list: Array
  },
  computed: {

  },
  methods: {
    change (val) {
      console.log('change', val)
    },
    getWithSign (val) {
      let money = new Money(val)
      return money.getWithSign()
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/weui/widget/weui_cell/weui_cell_global';
@import '~vux/src/styles/weui/widget/weui_cell/weui_access';
@import '~vux/src/styles/weui/widget/weui_panel/weui_panel';
@import '~vux/src/styles/weui/widget/weui_media_box/weui_media_box';
.weui-panel .weui-cell:first-child:before {
  display: block;
}
.weui-media-box_appmsg .weui-goods-box__pic {
  height: 80px;
  width: 80px;
}
.weui-media-box_appmsg .weui-goods-box__price {
  color: red;
  font-size: 17px;
}
.weui-media-box_appmsg .weui-goods-box__quantity__line {
  padding: 0 0;
  border: 0 white;
}
.weui-media-box_appmsg .weui-goods-box__quantity__line .vux-cell-primary {
  border: 0;
}
.weui-panel .weui-cell:before {
  border: 0 white;
}
.weui-panel .weui-cells:before {
  border: 0 white;
}
.weui-panel .weui-cell:after {
  border: 0 white;
}
.weui-panel .weui-cells:after {
  border: 0 white;
}
.weui-media-box_appmsg .weui-goods-box__stock__no {
  width: auto;
  height: 30px;
}
.weui-goods-box__thumb {
  max-height: 100%;
}
</style>
