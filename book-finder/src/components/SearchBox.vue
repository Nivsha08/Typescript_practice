<template>
    <div class="input-wrapper">
        <label for="search-box">{{ userMessage }}</label>
        <el-input id="search-box" type="text" prefix-icon="el-icon-search" 
                placeholder="Search..."
                v-model="userInput">
        </el-input>
        <el-button @click="searchBook" type="success" size="small" plain>Submit</el-button>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import * as config from '../assets/config';

@Component
export default class SearchBox extends Vue {
    private userMessage: string = config.userMessage;
    private userInput: string = "";

    private searchBook(name: string) {
        // TODO: implement
    }
}
</script>

<style lang="scss" scoped>
    .input-wrapper {
        padding: 1rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        label {
            margin: 1rem 0;
        }

        .el-button {
            margin: 1rem;
        }
    }
</style>


