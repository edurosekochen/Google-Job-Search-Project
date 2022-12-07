<template>
	<img :src="imageLink" class="w-8 h-8 object-contain rounded-3xl" />
</template>

<script lang="ts" >
import { defineComponent } from "vue";

interface Data {
	imageLink: string;
}

export default defineComponent({
	name: "ProfileImage",
	data(): Data {
		return {
			imageLink:
				"https://www.pngitem.com/pimgs/m/487-4876417_link-head-png-toon-link-face-png-transparent.png",
		};
	},
});
</script>

