<template>
    <td class="py-4 px-6 border-b border-gray-200">
        <span class="text-white py-1 px-2 rounded-full text-xs font-bold"
            :class="isActive == 'ACTIVE' ? 'bg-green-500' : 'bg-red-500'">
            {{ isActive == 'ACTIVE' ? 'Enable' : 'Disable' }}
        </span>
    </td>
</template>

<script setup lang="ts">
defineProps<{ isActive: string }>()
</script>
