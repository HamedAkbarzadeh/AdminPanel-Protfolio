<script setup lang="ts">
import { ref, defineModel } from 'vue'

const modelValue = defineModel<number>({ default: 0 })

function setRating(value: number) {
    modelValue.value = value
}

const props = withDefaults(defineProps<{ label?: string, labelColor?: string }>(), {
    label: '',
    labelColor: 'text-slate-900'
})
</script>

<template>
    <div class="flex flex-col gap-y-4 items-center justify-center" v-bind="$attrs">
        <label v-if="label" for="" class="text-lg font-semibold py-1" :class="labelColor">{{ label
        }}</label>
        <div class="flex gap-1">
            <template v-for="i in 5" :key="i">
                <svg @click="setRating(i)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    :class="[
                        'w-6 h-6 cursor-pointer transition-colors duration-200',
                        i <= modelValue ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-300'
                    ]">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 
             8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            </template>
        </div>
    </div>
</template>
