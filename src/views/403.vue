<template>
  <div>
    <div class="box">
      <a-alert
        type="error"
        message="403"
        description="服务器拒绝了你的请求"
        banner
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.box {
  width: 300px;
  margin: 0 auto;
  text-align: center;
}
</style>
