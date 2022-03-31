<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import BlogPage from '../components/BlogPage.vue';
</script>

<template>
	<header class="flex justify-between items-center px-8 py-5 z-40 sticky -top-0 border-white border-b-2" :class="{'backdrop-filter backdrop-blur': !overflow, 'fixed w-screen': overflow}" v-if="tblog" @click="tblog = false">
		<div class="font-bold flex gap-4 cursor-pointer">
			<!-- <img src="../assets/enigma.svg" class="lg:w-auto w-6 select-none" /> -->
			<span>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24" fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="hover:scale-90 transition ease-in-out duration-300 cursor-pointer">
					<path d="M21 11H6.83L10.41 7.41L9 6L3 12L9 18L10.41 16.58L6.83 13H21V11Z" fill="black"/>
				</svg>
			</span>
			BLOGS
		</div>
	</header>
	<Header v-else/>

	<BlogPage v-if="tblog"/>

	<div class="flex flex-col gap-12 mx-6 lg:mx-60 my-8" v-else>
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
				<h1 class="text-blue-600 hover:underline transition ease-in-out duration-300"><a href="/blogs/">See all</a></h1>
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

		<div class="flex flex-col gap-6">
			<div class="flex justify-between">
				<h1 class="font-bold text-2xl">Comic Strips</h1>
				<h1 class="text-blue-600 hover:underline transition ease-in-out duration-300"><a href="/comics/">See all</a></h1>
			</div>
			<div class="w-full h-52 bg-black/10 rounded-xl">
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
	data: () => ({
		tblog: false
	}),
	components: {
		Carousel,
		Slide,
		Navigation,
	}
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
