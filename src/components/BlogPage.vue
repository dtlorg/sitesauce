<template>
	<div class="dark:bg-slate-900 dark:text-white">
<header class="flex justify-between items-center px-8 py-5 z-40 sticky -top-0 dark:bg-slate-800/20 dark:text-white backdrop-filter backdrop-blur">
		<a href="/blogs/" class="font-bold flex gap-4">
			<!-- <img src="../assets/enigma.svg" class="lg:w-auto w-6 select-none" /> -->
			<span>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24" fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="hover:scale-90 transition ease-in-out duration-300 cursor-pointer">
					<path d="M21 11H6.83L10.41 7.41L9 6L3 12L9 18L10.41 16.58L6.83 13H21V11Z" fill="skyblue"/>
				</svg>
			</span>
			Back to Blogs
		</a>
	</header>

	<div class="flex flex-col gap-6 mx-6 lg:mx-60 my-6 min-h-screen ">
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
	</div>
</template>

<script>
	export default {
		mounted () {
			window.scrollTo(0, 0)
		}
	}
</script>