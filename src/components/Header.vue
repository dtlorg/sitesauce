<template>
	<header class="flex justify-between items-center px-8 py-5 z-40 sticky -top-0 border-white border-b-2" :class="{'backdrop-filter backdrop-blur': !overflow, 'fixed w-screen': overflow}">
		<a href="/" class="font-bold">
			<!-- <img src="../assets/enigma.svg" class="lg:w-auto w-6 select-none" /> -->
			CREATIVE SCIENCES.
		</a>
		<ul class="lg:flex hidden gap-6">
			<li><a class="hover:underline transition ease-in-out duration-300 cursor-pointer" href="/gallery/">Gallery</a></li>
			<li><a class="hover:underline transition ease-in-out duration-300 cursor-pointer" href="/blogs/">Blogs</a></li>
			<li><a class="hover:underline transition ease-in-out duration-300 cursor-pointer" href="">Comic Strips</a></li>
		</ul>
		<div class="block lg:hidden" @click="overflow = true">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="overflow">
				<path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="black"/>
			</svg>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
				<path d="M3 6H21V8H3V6ZM3 11H21V13H3V11ZM3 16H21V18H3V16Z" fill="black"/>
			</svg>
		</div>
	</header>
	<div class="fixed z-50 inset-0 lg:hidden" v-if="overflow">
		<div class="fixed inset-0 bg-black/20 backdrop-blur-sm" @click="overflow = false"></div>
		<div class="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold">
			<button @click="overflow = false" class="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600">
				<svg viewBox="0 0 10 10" class="w-2.5 h-2.5 overflow-visible" aria-hidden="true">
					<path d="M0 0L10 10M10 0L0 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
				</svg>
			</button>
			<ul class="flex flex-col gap-12 text-black">
				<li><a class="hover:underline transition ease-in-out duration-300 cursor-pointer" href="/gallery/">Gallery</a></li>
				<li><a class="hover:underline transition ease-in-out duration-300 cursor-pointer" href="/blogs/">Blogs</a></li>
				<li><a class="hover:underline transition ease-in-out duration-300 cursor-pointer" href="">Comic Strips</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			overflow: false
		}
	}
}
</script>

<style>
header {
	font-family: 'Montserrat', sans-serif;
}

.over-flow {
	background: rgba(256, 256, 256, 0.6);
	margin-top: 64px;
	height: calc(100vh - 64px);
}
</style>
