<script setup>
import Footer from '../components/Footer.vue';
import BlogPage from '../components/BlogPage.vue';
import axios from 'axios';
</script>

<template>
	<BlogPage v-if="tblog"/>
	<div v-else>
		<header class="flex justify-between items-center px-8 py-5 z-40 sticky -top-0 border-white border-b-2 backdrop-filter backdrop-blur">
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
				LEADERBOARD
			</a>
		</header>

		<div class="flex flex-col gap-12 m-6 lg:mx-60 lg:my-8">
			<h1 class="text-xl font-bold">LeaderBoard</h1>

			<div class="flex flex-col divide-y-2 divide-dashed">
				<ul class="grid grid-cols-4 py-6 gap-6">
					<li class="font-bold">Project</li>
					<li class="font-bold">Team</li>
					<li class="font-bold">Mentor</li>
					<li class="font-bold place-self-center">Grade</li>
				</ul>
				<ul class="grid grid-cols-4 gap-6 py-3 items-center" v-for="(i, ind) in teams" :key="i">
					<li><h1 class="overflow-clip">{{ i.project }}</h1></li>
					<li><h1 class="overflow-clip">{{ i.team }}</h1></li>
					<li><h1 class="overflow-clip">{{ i.mentor }}</h1></li>
					<li class="place-self-center"><h1 class="overflow-clip">{{ i.Grade }}</h1></li>
				</ul>
			</div>
		</div>
	</div>

	<Footer/>
</template>

<script>
export default {
	data: () => ({
		tblog: false,
		teams: []
	}),
	mounted() {
		axios
			.get("https://raw.githubusercontent.com/dtlorg/sitesauce/json/teams.json")
			.then((res) => {
				this.teams = res.data
			})
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

#leaderboard {
	font-family: 'Montserrat', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: black;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}
</style>
