<!-- eslint-disable vue/v-on-event-hyphenation -->
<template>
	<form
		class="
			flex
			items-center
			w-full
			h-12
			mt-14
			border border-solid border-brand-gray-3
			rounded-3xl
		"
		@submit.prevent="searchForJobs"
	>
		<font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />

		<div class="flex flex-nowrap flex-1 h-full text-base font-light">
			<div class="relative flex items-center flex-1 h-full pr-3">
				<label class="absolute left-0 -top-10">Role</label>
				<text-input
					placeholder="Software engineer"
					data-test="role-input"
					:value="role"
					@handleInput="role = $event"
				/>
			</div>

			<span
				class="
					flex
					items-center
					h-full
					px-3
					border-l border-r border-brand-gray-3
					bg-brand-gray-2
				"
				>in</span
			>

			<div class="relative flex items-center flex-1 h-full pl-3">
				<label class="absolute left-0 -top-10">Where?</label>
				<text-input
					placeholder="Los Angeles"
					:value="location"
					data-test="location-input"
					@handleInput="location = $event"
				/>
			</div>
		</div>

		<action-button
			text="Search"
			type="secondary"
			class="rounded-r-3xl"
			data-test="form-submit-button"
		/>
	</form>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextInput.vue";

export default {
	name: "JobSearchForm",
	components: {
		ActionButton,
		TextInput,
	},
	data() {
		return {
			role: "",
			location: "",
		};
	},
	methods: {
		searchForJobs() {
			this.$router.push({
				name: "JobResults",
				query: {
					role: this.role,
					location: this.location,
				},
			});
		},
	},
};
</script>
