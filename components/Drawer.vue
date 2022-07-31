<template>
    <div class="drawer" v-if="visible">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <!-- Page content here -->
            <label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
        </div>
        <div class="drawer-side">
            <label for="my-drawer" class="drawer-overlay"></label>
            <ul class="p-4 overflow-y-auto menu w-80 bg-base-100 text-base-content">
                <slot></slot>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
interface Props {
    visible: boolean;
    width?: number
}
const emit = defineEmits<{
    (e: 'update:visible', type: boolean): void
}>()
const props = withDefaults(defineProps<Props>(), {

})
</script>