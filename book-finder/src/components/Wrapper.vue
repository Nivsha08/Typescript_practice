<template>
    <div class="finder-wrapper">
        <h2>Book Finder</h2>
        <el-tag type="info" size="mini">Implemented with Vue.js & Typescript</el-tag>
        <SearchBox />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import SearchBox from "./SearchBox";

@Component({
    components: {
        SearchBox
    }
})
export default class Wrapper extends Vue {}
</script>

<style lang="scss" scoped>
    .finder-wrapper {
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;

        h2 {
            margin-bottom: .3rem;
        }

        hr {
            margin: 1rem 0;
            width: 70%;
            opacity: .3;
        }
    }
</style>

