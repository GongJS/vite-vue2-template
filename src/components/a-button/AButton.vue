<template>
  <button class="btn" :class="btnClass" :disabled="disabled">
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "AButton",
})
export default class AButton extends Vue {
  // 按键尺寸
  @Prop({
    default: "medium",
    // `'small'` / `'medium'`/ `'large'`
    type: String,
  })
  public size!: string;

  // 按键类型
  @Prop({
    default: "primary",
    // `'primary'` / `'secondary'`/ `'tertiary'` / `'danger'` / `'success'` / `'warning'` / `'info'` / `'light'` / `'dark'`
    type: String,
  })
  public type!: string;

  // 是否添加圆角
  @Prop({
    default: false,
    type: Boolean,
  })
  public round!: boolean;

  // 是否禁用
  @Prop({
    default: false,
    type: Boolean,
  })
  public disabled!: boolean;

  get btnClass() {
    return {
      "a-button": true,
      "a-button-primary": this.type === "primary",
      "a-button-secondary": this.type === "secondary",
      "a-button-text-secondary": this.type === "secondary",
      "a-button-round": this.round,
      "a-button-disabled": this.disabled,
      "a-button-size": this.size,
    };
  }
}
</script>

<style lang="less" scoped>
@import "./style/index.less";
</style>
