<script setup>
import axios from 'axios';
import Footer from '../components/Footer.vue';
import ProjectPage from '../components/ProjectPage.vue';
defineProps({
	pproject: String,
	pteam: String,
	pdesc: String,
	pmentor: String,
	plink: String
})
</script>

<template>
	<div>
		<header class="flex justify-between items-center px-8 py-5 z-40 sticky -top-0 border-white border-b-2 backdrop-filter backdrop-blur">
			<a href="/" class="font-bold flex gap-4">
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
		<section>
			<div class="flex flex-col gap-12 m-6 lg:mx-60 lg:my-8 min-h-screen">
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
					<input type="text"  v-model="search" placeholder="Search for a project" class="p-4 bg-transparent focus:outline-0 w-full" />
				</div>

				<h1 class="text-xl font-bold">Team Projects for Design Thinking</h1>

				<div class="grid grid-cols-1 lg:grid-cols-3 auto-rows-auto gap-6">
						<div
							v-for="i in filteredPrs"
							:key="i"
							class="flex justify-start items-end bg-black/5 h-64 rounded-xl hover:scale-90 transition-transform cursor-pointer"
							@click="openURL(i.website)"
							@mouseenter="proj = true,
							pproject = i.project,
								pteam = i.team,
								plink = i.website,
								pmentor = i.mentor,
								pdesc = i.desc">
							<div class="flex flex-col gap-2">
								<span class="ml-6 w-52 overflow-hidden font-bold">{{ i.project }}</span>
								<span class="ml-6 mb-6 w-52 overflow-hidden">{{ i.team }}</span>
							</div>
						</div>
				</div>
			</div>
		</section>

		<transition name="fade">
			<div class="fixed right-0 top-0 z-50 flex h-screen w-screen lg:w-96 overflow-y-scroll rounded-xl" v-if="proj" style="background-color: #F2F2F2;" :class="{'fade-enter-active': proj}">
				<div class="flex flex-col mx-6 my-6 min-h-screen">
				<!-- Team info -->
				<span class="font-bold flex gap-4" @click="proj = !proj">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24" fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="hover:scale-90 transition ease-in-out duration-300 cursor-pointer">
						<path d="M21 11H6.83L10.41 7.41L9 6L3 12L9 18L10.41 16.58L6.83 13H21V11Z" fill="black"/>
					</svg>
				</span>
				<div class="flex my-8">
					<div class="flex flex-col gap-4 w-full">
						<div class="bg-black/10 w-full h-32 rounded-xl"></div>
						<div>
							<h1 class="text-base w-64 lg:w-auto overflow-hidden"><span class="font-bold">{{ pproject }}</span><br>{{ pteam }}</h1>
							<h2 class="text-s">Mentor: {{ pmentor }}</h2>
							<h1 @click="openURL(plink)" class="text-blue-500 hover:underline cursor-pointer transition ease-in-out duration-300 w-64 lg:w-auto overflow-hidden">{{ pteam }} website</h1>
						</div>
					</div>
				</div>

				<!-- Desc-->
				<div class="my-8">
					<h1 class="font-bold">Description:</h1>
					<h1 class="mt-6">{{ pdesc }}</h1>
				</div>

				<!-- Comments -->
				<div>
					<h1 class="font-bold">Post a comment</h1>
					<div class="h-52 my-6">
						<textarea class="bg-black/5 rounded-xl p-4 w-full focus:outline-none" name="" rows="5" />
						<button class="mt-4 bg-slate-900 hover:bg-slate-700 focus:outline-none text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto">Submit</button>
					</div>
				</div>
			</div>
			</div>
			</transition>
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
		pdesc: '',
		search: "",
		proj: false
	}),
	mounted() {
		axios
			.get("https://raw.githubusercontent.com/dtlorg/sitesauce/json/teams.json")
			.then((res) => {
				this.prs = res.data
			})
	},
	methods: {
		openURL(url) {
			window.open(url);
		}
	},
	computed: {
		filteredPrs: function() {
			var prs = this.prs;
			var search = this.search;

			if (!search) {
				return prs;
			}

			var searchString = search.trim().toLocaleLowerCase()

			prs = prs.filter(function(item) {
				if(item.team.toLocaleLowerCase().indexOf(searchString) !== -1
					|| item.mentor.toLocaleLowerCase().indexOf(searchString) !== -1
					|| item.project.toLocaleLowerCase().indexOf(searchString) !== -1
					|| item.desc.toLocaleLowerCase().indexOf(searchString) !== -1) {
					return item;
				}
			})

			return prs;
		}
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

::-webkit-scrollbar {
	width: 0px;
	background: transparent;
}

#gallery {
	font-family: 'Montserrat', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: black;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
