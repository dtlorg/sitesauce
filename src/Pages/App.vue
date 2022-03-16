<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
	<Header/>

	<div class="flex flex-col gap-12 mx-6 lg:mx-60 my-8">
		<carousel :items-to-show="1" :autoplay="3000" :transition="600" :wrap-around="true" class="bg-black/5 rounded-xl">
			<slide v-for="slide in 10" :key="slide">
				<img src="../assets/logo.png" class="p-12">
			</slide>

			<template #addons>
				<navigation />
			</template>
		</carousel>

		<div>
			<h1 class="text-4xl font-bold">Design Thinking</h1>
			<h2 class="text-2xl">The course website landing page</h2>
		</div>

		<div class="grid grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-6">
			<div v-for="i in 5" :key="i">
				<div class="flex justify-start items-end bg-black/5 h-64 rounded-xl hover:scale-90 transition-transform cursor-pointer">
				<span class="ml-6 mb-6 font-bold">Title {{ i }}</span>
				</div>
			</div>
		</div>
	</div>

	<Footer/>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

export default {
	name: 'App',
	components: {
		Carousel,
		Slide,
		Navigation,
	},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

#app {
	font-family: 'Montserrat', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: black;
	min-height: 100vh;
}

.carousel__icon {
	color: black;
}

.carousel__pagination-item {
	color: black;
}
</style>
