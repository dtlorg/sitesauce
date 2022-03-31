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

		<div class="flex flex-col gap-6">
			<div class="flex justify-between">
				<h1 class="font-bold text-2xl">Blogs</h1>
				<h1 class="text-blue-600 hover:underline transition ease-in-out duration-300 cursor-pointer">See all</h1>
			</div>
			<div class="grid grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-6">
				<div v-for="i in 3" :key="i">
					<div class="flex flex-col justify-between bg-black/5 h-64 rounded-xl">
						<div class="bg-black/10 p-6 rounded-t-xl">
							Date {{ i }}
						</div>
						<div class="p-6">
							<button
								type="button"
								class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg hover:scale-90 transition-transform cursor-pointer"
								@click="tblog = true">
								Read More
							</button>
						</div>
					</div>
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
