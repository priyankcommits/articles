<script>
/* Component for showing loading animation */
export default {
  name: 'loader',
  props: {
    repeat: {
      default: 4,
    },
    canShow: {
      default: true,
    }
  }
}
</script>

<template>
<div class="timeline-wrapper" v-show='canShow'>
  <div class="timeline-item">
    <div class="animated-background" v-for='i in repeat'>
      <div class="background-masker header-top"></div>
    </div>
  </div>
</div>
</template>

<style>
@-webkit-keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

@keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

.timeline-wrapper {
  background-color: #fff;
  color: #141823;
  padding: 20px;
}

.timeline-item {
  background: #fff;
  height: 400px;
  margin: 0 auto;
}

.animated-background {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-name: placeHolderShimmer;
  animation-name: placeHolderShimmer;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: #eeeeee;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(8%, #eeeeee),
    color-stop(18%, #dddddd),
    color-stop(33%, #eeeeee)
  );
  background: -webkit-linear-gradient(
    left,
    #eeeeee 0%,
    #dddddd 50%,
    #eeeeee 75%
  );
  background: linear-gradient(to right, #eeeeee 0%, #dddddd 50%, #eeeeee 75%);
  -webkit-background-size: 800px 104px;
  background-size: 800px 104px;
  height: 96px;
  position: relative;
}

.background-masker {
  background: #fff;
  position: absolute;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.background-masker.header-top {
  top: 0;
  left: 0px;
  right: 0;
  height: 10px;
}
</style>