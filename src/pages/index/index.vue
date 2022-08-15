<template>
  <view class="index">
    <nut-cell :style="{ padding: '40px 18px' }">
      <nut-range
        v-model="value"
        :min="0"
        :max="100"
        @change="onChange"
      ></nut-range>
    </nut-cell>
  </view>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  name: "Index",
  components: {},
  setup() {
    const state = reactive({
      value: 10,
    });

    const onChange = (value) => {
      console.log(value);
    };

    return {
      ...toRefs(state),
      onChange,
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  height: 180px;
  margin-bottom: 20px;
  .nut-swiper-item {
    line-height: 180px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.index {
  .content {
    padding: 0 17px 0;
    .log-out {
      width: calc(100% - 34px);
      padding: 24px 0;
      position: fixed;
      font-size: 17px;
      bottom: 20px;
    }
  }
}
</style>
