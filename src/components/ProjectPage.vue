<script setup>
defineProps({
  pproject: String,
	pteam: String,
	pdesc: String,
	pmentor: String,
	plink: String
})
</script>

<template>
	<header class="flex justify-between items-center px-8 py-5 z-40 sticky -top-0 border-white border-b-2 backdrop-filter backdrop-blur">
		<a href="/gallery/" class="font-bold flex gap-4 cursor-pointer">
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
			Back to Projects
		</a>
	</header>

	<div class="flex flex-col gap-6 mx-6 lg:mx-60 my-6 min-h-screen">
		<!-- Team info -->
		<div class="flex gap-6 lg:gap-10 my-8">
			<div class="rounded-full bg-blue-100 w-20 lg:w-32 h-20 lg:h-32"></div>
			<div class="flex flex-col justify-around">
				<div>
					<h1 class="text-base lg:text-2xl w-64 lg:w-auto overflow-hidden"><span class="font-bold">{{ pproject }}</span> by {{ pteam }}</h1>
					<h2 class="text-sm lg:text-lg">Mentor: {{ pmentor }}</h2>
				</div>
				<h2 class="text-sm lg:text-base flex gap-2 text-blue-500">
					<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 lg:w-6 h-4 lg:h-6">
						<path
							d="M10.59 13.4099C11 13.7999 11 14.4399 10.59 14.8299C10.2 15.2199 9.56001 15.2199 9.17001 14.8299C7.22001 12.8799 7.22001 9.70995 9.17001 7.75995L12.71 4.21995C14.66 2.26995 17.83 2.26995 19.78 4.21995C21.73 6.16995 21.73 9.33995 19.78 11.2899L18.29 12.7799C18.3 11.9599 18.17 11.1399 17.89 10.3599L18.36 9.87995C19.54 8.70995 19.54 6.80995 18.36 5.63995C17.19 4.45995 15.29 4.45995 14.12 5.63995L10.59 9.16995C9.41001 10.3399 9.41001 12.2399 10.59 13.4099ZM13.41 9.16995C13.8 8.77995 14.44 8.77995 14.83 9.16995C16.78 11.1199 16.78 14.2899 14.83 16.2399L11.29 19.7799C9.34001 21.7299 6.17001 21.7299 4.22001 19.7799C2.27001 17.8299 2.27001 14.6599 4.22001 12.7099L5.71001 11.2199C5.70001 12.0399 5.83001 12.8599 6.11001 13.6499L5.64001 14.1199C4.46001 15.2899 4.46001 17.1899 5.64001 18.3599C6.81001 19.5399 8.71001 19.5399 9.88001 18.3599L13.41 14.8299C14.59 13.6599 14.59 11.7599 13.41 10.5899C13 10.1999 13 9.55995 13.41 9.16995Z"
							fill="black"/>
					</svg>
					<h1 @click="openURL(plink)" class="hover:underline cursor-pointer transition ease-in-out duration-300 w-64 lg:w-auto overflow-hidden">{{ pteam }} website</h1>
				</h2>
			</div>
		</div>

		<!-- Desc-->
		<div class="my-8">
			<h1 class="font-bold">Description:</h1>
			<h1 class="mt-6">{{ pdesc  }}</h1>
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
</template>

<script>
	export default {
		mounted () {
			window.scrollTo(0, 0)
		},
		methods: {
    openURL(url) {
      window.open(url);
    }
  }
	}
</script>