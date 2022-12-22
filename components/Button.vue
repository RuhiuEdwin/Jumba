<template>
  <div class="drop flex items-center justify-center rounded-full bg-darkblue w-10 h-10 lg:w-16 lg:h-16 cursor-pointer ">
    <a href="https://wa.me/254786916498?text=Hello%20I%20would%20like%20to" target="_blank" class="">
        <lord-icon
            src="https://cdn.lordicon.com/hpivxauj.json"
            trigger="hover"
            colors="primary:#fff"
            style="width:6vw;height:6vw; max-width: 40px; max-height: 40px;">
        </lord-icon>
    </a>
  </div>
</template>
<script>
  export default {
    mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://cdn.lordicon.com/fudrjiwc.js')
      document.head.appendChild(recaptchaScript)
    },
  }
</script>
<style>
  .btn{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>