<template src="./Homepage.html"></template>

<style lang="scss" src="./Homepage.scss" scoped></style>

<script>
import Loader from '@/components/Loader/Loader';
import NavBar from '@/components/NavBar/NavBar';

export default {
  name: 'Homepage',
  components: {
		Loader,
		NavBar,
  },
  data() {
    return {
      loading: true,
      color: "#5dc596",
      size: "50px"
    }
  },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 2000)
  }
};
</script>
