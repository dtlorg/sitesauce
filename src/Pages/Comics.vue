<script setup>
import Footer from '../components/Footer.vue';
import BlogPage from '../components/BlogPage.vue';
</script>

<template>
	<header class="flex justify-between items-center px-8 py-5 z-40 sticky -top-0 border-white border-b-2" :class="{'backdrop-filter backdrop-blur': !overflow, 'fixed w-screen': overflow}">
		<a href="/" class="font-bold flex gap-4">
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
			COMICS
		</a>
	</header>

	<div class="flex flex-col gap-12 m-6 lg:mx-60 lg:my-8">
		<h1 class="text-xl font-bold">Comic strips</h1>

			<div v-for="i in 9" :key="i">
				<div class="w-full h-52 bg-black/10 rounded-xl"></div>
			</div>
	</div>

	<Footer/>
</template>

<script>
export default {
	data: () => ({
		tblog: false
	})
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

#comics {
	font-family: 'Montserrat', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: black;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}
</style>
