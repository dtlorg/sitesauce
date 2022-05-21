<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import axios from 'axios';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import BlogPage from '../components/BlogPage.vue';
import ProjectPage from '../components/ProjectPage.vue';
</script>

<template>
	<ProjectPage v-if="project" :pproject="pproject" :pteam="pteam" :plink="plink" :pmentor="pmentor" :pdesc="pdesc" />
	<BlogPage v-else-if="tblog"/>
	<div class="flex flex-col" v-else>
		<Header />

		<div class="flex flex-col gap-12 mx-6 lg:mx-60 my-8">
			<carousel :items-to-show="1" :autoplay="3000" :transition="600" :wrap-around="true" class="bg-black/5 rounded-xl">
				<slide v-for="slide in rands" :key="slide.team">
					<div class="flex justify-center items-end h-64 cursor-pointer">
						<div class="flex flex-col gap-2">
							<span class="ml-6 w-52 font-bold">{{ slide.project }}</span>
							<span class="ml-6 mb-6 w-52">{{ slide.team }}</span>
						</div>
					</div>
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
					<h1 class="font-bold text-2xl">Projects</h1>
					<h1 class="text-blue-600 hover:underline transition ease-in-out duration-300"><a href="/gallery/">See all</a></h1>
				</div>
				<div class="grid grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-6">
					<div
						v-for="i in prs"
						:key="i"
						class="flex h-64 rounded-xl hover:scale-90 transition-transform cursor-pointer"
							:style="{backgroundImage: 'url('+ i.img +')', backgroundSize: 'cover', backgroundColor: 'rgba(255, 0, 0, 0.5)',backgroundPosition: 'center'}"
						@click="openURL(i.website)"
							@mouseenter="proj = true,
							pproject = i.project,
								pteam = i.team,
								plink = i.website,
								pmentor = i.mentor,
								pdesc = i.desc,
								pimg = i.img">
							<div class="self-end bottom-0 flex flex-col w-full py-2 m-4 bg-white rounded-lg shadow-lg">
								<span class="ml-6 w-52 overflow-hidden font-bold text-sm">{{ i.project }}</span>
								<span class="ml-6 w-52 overflow-hidden text-sm">{{ i.team }}</span>
							</div>
					</div>
				</div>
			</div>

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
						<img :src="pimg" class="w-full rounded-xl">
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
	</div>

	<Footer/>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

export default {
	name: 'App',
	data: () => ({
		tblog: false,
		project: false,
		prs: [],
		rands: [],
		pproject: '',
		ptean: '',
		plink: '',
		pmentor: '',
		pdesc: '',
		pimg: '',
		proj: false
	}),
	components: {
		Carousel,
		Slide,
		Navigation,
	},
	methods: {
		openURL(url) {
			window.open(url);
		}
	},
	mounted() {
		axios
			.get("https://raw.githubusercontent.com/dtlorg/sitesauce/json/teams.json")
			.then((res) => {
				var t = []
				t = res.data
				for(let s = 0; s < 3; s++) {
					this.prs[s] = t[s]
				}
			})

			this.rands = this.prs
	}
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

::-webkit-scrollbar {
	width: 0px;
	background: transparent;
}

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

.fade-enter-active, .fade-leave-active {
	transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
