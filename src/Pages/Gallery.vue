<script setup>
import Footer from '../components/Footer.vue';
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
			GALLERY
		</a>
	</header>

	<div class="flex flex-col gap-6 mx-6 lg:mx-60 my-6" v-if="project">
		<h1 class="hover:underline transition ease-in-out duration-300 cursor-pointer text-black/40 font-bold" @click="project = false">Back to Projects</h1>

		<!-- Team info -->
		<div class="flex gap-6 lg:gap-10 my-8">
			<div class="rounded-full bg-blue-100 w-20 lg:w-32 h-20 lg:h-32"></div>
			<div class="flex flex-col justify-around">
				<div>
					<h1 class="text-base lg:text-2xl"><span class="font-bold">Project name</span> by Team name</h1>
					<h2 class="text-sm lg:text-lg">Project description</h2>
				</div>
				<h2 class="text-sm lg:text-base flex gap-2 text-blue-500">
					<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 lg:w-6 h-4 lg:h-6">
						<path
							d="M10.59 13.4099C11 13.7999 11 14.4399 10.59 14.8299C10.2 15.2199 9.56001 15.2199 9.17001 14.8299C7.22001 12.8799 7.22001 9.70995 9.17001 7.75995L12.71 4.21995C14.66 2.26995 17.83 2.26995 19.78 4.21995C21.73 6.16995 21.73 9.33995 19.78 11.2899L18.29 12.7799C18.3 11.9599 18.17 11.1399 17.89 10.3599L18.36 9.87995C19.54 8.70995 19.54 6.80995 18.36 5.63995C17.19 4.45995 15.29 4.45995 14.12 5.63995L10.59 9.16995C9.41001 10.3399 9.41001 12.2399 10.59 13.4099ZM13.41 9.16995C13.8 8.77995 14.44 8.77995 14.83 9.16995C16.78 11.1199 16.78 14.2899 14.83 16.2399L11.29 19.7799C9.34001 21.7299 6.17001 21.7299 4.22001 19.7799C2.27001 17.8299 2.27001 14.6599 4.22001 12.7099L5.71001 11.2199C5.70001 12.0399 5.83001 12.8599 6.11001 13.6499L5.64001 14.1199C4.46001 15.2899 4.46001 17.1899 5.64001 18.3599C6.81001 19.5399 8.71001 19.5399 9.88001 18.3599L13.41 14.8299C14.59 13.6599 14.59 11.7599 13.41 10.5899C13 10.1999 13 9.55995 13.41 9.16995Z"
							fill="black"/>
					</svg>
					<a href="" class="hover:underline transition ease-in-out duration-300">Project website link</a>
				</h2>
			</div>
		</div>

		<!-- Grades -->
		<div class="h-52 bg-black/5 rounded-xl">
			<h1 class="m-6 font-bold">Grades</h1>
		</div>

		<!-- Comments -->
		<div class="h-52 bg-black/5 rounded-xl">
			<h1 class="m-6 font-bold">Post a comment</h1>
		</div>
	</div>

	<div class="flex flex-col gap-12 m-6 lg:mx-60 lg:my-8" v-else>
		<div class="flex items-center border-2 bg-black/5 rounded-xl">
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="ml-6">
					<path
					d="M9.5 3C11.2239 3 12.8772 3.68482 14.0962 4.90381C15.3152 6.12279 16 7.77609 16 9.5C16 11.11 15.41 12.59 14.44 13.73L14.71 14H15.5L20.5 19L19 20.5L14 15.5V14.71L13.73 14.44C12.59 15.41 11.11 16 9.5 16C7.77609 16 6.12279 15.3152 4.90381 14.0962C3.68482 12.8772 3 11.2239 3 9.5C3 7.77609 3.68482 6.12279 4.90381 4.90381C6.12279 3.68482 7.77609 3 9.5 3V3ZM9.5 5C7 5 5 7 5 9.5C5 12 7 14 9.5 14C12 14 14 12 14 9.5C14 7 12 5 9.5 5Z"
					fill="black"/>
			</svg>
			<input type="text" placeholder="Search for a project" class="p-4 bg-transparent focus:outline-0" />
		</div>

		<h1 class="text-xl font-bold">Team Projects for Design Thinking</h1>

		<div class="grid grid-cols-1 lg:grid-cols-3 auto-rows-auto gap-6">
			<div v-for="i in 21" :key="i">
				<div
					class="flex justify-start items-end bg-black/5 h-64 rounded-xl hover:scale-90 transition-transform cursor-pointer"
					@click="project = true">
					<span class="ml-6 mb-6">Project {{ i }}</span>
				</div>
			</div>
		</div>
	</div>

	<Footer/>
</template>

<script>
export default {
  data: () => ({
    project: false
  })
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

#gallery {
	font-family: 'Montserrat', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: black;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}
</style>
