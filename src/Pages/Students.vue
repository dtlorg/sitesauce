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
			STUDENT BLOGS
		</a>
	</header>

	<div class="flex flex-col gap-6 mx-6 lg:mx-60 my-6" v-if="tblog">
		<h1 class="hover:underline transition ease-in-out duration-300 cursor-pointer text-black/40 font-bold" @click="tblog = false">Back to Blogs</h1>

		<!-- Blog header -->
		<div class="flex gap-6 lg:gap-10 my-8">
			<div class="flex flex-col justify-around">
				<div>
					<h1 class="text-base lg:text-2xl"><span class="font-bold">Blog title</span> by Name</h1>
					<h2 class="text-sm lg:text-lg">Subtitle</h2>
				</div>
			</div>
		</div>

		<!-- Blog -->
		<div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. At aenean augue at vel viverra suspendisse ornare. Tincidunt parturient turpis platea habitant amet, elementum facilisis suspendisse. Vel amet ut sagittis, neque, eget in ornare at. Egestas sollicitudin at urna quam nibh tortor. Duis et integer lectus et, egestas varius aenean. Risus massa consequat donec vivamus. Arcu eget nisl justo a id nibh morbi.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. At aenean augue at vel viverra suspendisse ornare. Tincidunt parturient turpis platea habitant amet, elementum facilisis suspendisse. Vel amet ut sagittis, neque, eget in ornare at. Egestas sollicitudin at urna quam nibh tortor. Duis et integer lectus et, egestas varius aenean. Risus massa consequat donec vivamus. Arcu eget nisl justo a id nibh morbi.
				<br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. At aenean augue at vel viverra suspendisse ornare. Tincidunt parturient turpis platea habitant amet, elementum facilisis suspendisse. Vel amet ut sagittis, neque, eget in ornare at. Egestas sollicitudin at urna quam nibh tortor. Duis et integer lectus et, egestas varius aenean. Risus massa consequat donec vivamus. Arcu eget nisl justo a id nibh morbi.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. At aenean augue at vel viverra suspendisse ornare. Tincidunt parturient turpis platea habitant amet, elementum facilisis suspendisse. Vel amet ut sagittis, neque, eget in ornare at. Egestas sollicitudin at urna quam nibh tortor. Duis et integer lectus et, egestas varius aenean. Risus massa consequat donec vivamus. Arcu eget nisl justo a id nibh morbi.
			</p>
		</div>
	</div>

	<div class="flex flex-col gap-12 m-6 lg:mx-60 lg:my-8" v-else>
		<h1 class="text-xl font-bold">Blogs by Students</h1>

		<div class="grid grid-cols-1 lg:grid-cols-3 auto-rows-auto gap-6">
			<div v-for="i in 9" :key="i">
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

#students {
	font-family: 'Montserrat', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: black;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}
</style>
