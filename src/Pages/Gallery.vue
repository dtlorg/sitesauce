<script setup>
import Footer from '../components/Footer.vue';
import ProjectPage from '../components/ProjectPage.vue';
</script>

<template>
	<header class="flex justify-between items-center px-8 py-5 z-40 sticky -top-0 border-white border-b-2" :class="{'backdrop-filter backdrop-blur': !overflow, 'fixed w-screen': overflow}">
		<div class="font-bold flex gap-4 cursor-pointer" v-if="project"  @click="project = false">
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
		</div>

		<a href="/" class="font-bold flex gap-4" v-else>
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

	<ProjectPage v-if="project" :pproject="pproject" :pteam="pteam" :plink="plink" :pmentor="pmentor" :pdesc="pdesc" />

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
				<div
					v-for="i in prs"
					:key="i"
					class="flex justify-start items-end bg-black/5 h-64 rounded-xl hover:scale-90 transition-transform cursor-pointer"
					@click="project = true,
						pproject = i.project,
						pteam = i.team,
						plink = i.website,
						pmentor = i.mentor,
						pdesc = i.desc">
					<span class="ml-6 mb-6 w-52 overflow-hidden">{{ i.team }}</span>
				</div>
		</div>
	</div>

	<Footer/>
</template>

<script>
export default {
  data: () => ({
    project: false,
		prs: null,
		pproject: '',
		ptean: '',
		plink: '',
		pmentor: '',
		pdesc: ''
  }),
	created() {
		this.axios.get("https://raw.githubusercontent.com/dtlorg/sitesauce/json/teams.json").then((res) => {
			this.prs = res.data
			console.log(res.data)
		})
	}
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
