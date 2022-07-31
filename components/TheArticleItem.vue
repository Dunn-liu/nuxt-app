<template>
    <div>

    </div>
</template>
<script setup lang="ts">
interface Props {
    data: {
        id?: number;
        [key: string]: any
    }
}
const props = withDefaults(defineProps<Props>(), {
    data: () => ({})
})

</script>