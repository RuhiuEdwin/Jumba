<template>
    <a href="https://wa.me/254786916498?text=Hello%20I%20would%20like%20to" target="_blank" class="drop-shadow-lg rounded-full bg-white p-2 cursor-pointer">
        <lord-icon
            src="https://cdn.lordicon.com/hpivxauj.json"
            trigger="hover"
            colors="primary:#2516c7"
            style="width:50px;height:50px">
        </lord-icon>
    </a>
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