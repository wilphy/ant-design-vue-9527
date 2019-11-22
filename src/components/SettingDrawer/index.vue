<template>
  <div>
    <a-drawer
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
      width="300px"
    >
      <template v-slot:handle>
        <div class="handle" @click="visible = !visible">
          <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
        </div>
      </template>

      <div>
        <div>
          <a-radio-group
            :value="$route.query.navTheme || 'dark'"
            @change="e => handleSettingChange('navTheme', e.target.value)"
          >
            <h2>整体风格定制</h2>
            <a-radio :style="radioStyle" value="dark">黑色</a-radio>
            <a-radio :style="radioStyle" value="light">白色</a-radio>
          </a-radio-group>
          <a-radio-group
            :value="$route.query.navLayout || 'left'"
            @change="e => handleSettingChange('navLayout', e.target.value)"
          >
            <h2>导航模式</h2>
            <a-radio :style="radioStyle" value="left">左侧导航</a-radio>
            <a-radio :style="radioStyle" value="top">顶部导航</a-radio>
          </a-radio-group>
        </div>
      </div>
    </a-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    onClose() {
      this.visible = false;
    },
    handleSettingChange(type, value) {
      this.$router.push({ query: { ...this.$route.query, [type]: value } });
    }
  }
};
</script>

<style>
.handle {
  position: absolute;
  top: 240px;
  right: 300px;
  width: 48px;
  height: 48px;
  background: #e9e;
  color: #fff;
  font-size: 20px;
  text-align: center;
  line-height: 48px;
  border-radius: 16px;
}
</style>
