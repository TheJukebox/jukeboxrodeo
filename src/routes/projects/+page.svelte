<script lang="ts">
    /** @type {import('./$types').PageData} */
    import { onMount } from 'svelte';
    import { print_effect } from '../effects.ts';
    
    export let data: PageData;

    onMount(() => {
        print_effect(
            " less public/projects/projects.md",
            "projects-title",
            0
        );
    });
</script>

<div class="content">
    <h2 class="title" id="projects-title">jukebox@rodeo:~$</h2>
    {@html data.content}
</div>

<style>
    @font-face {
        font-family: 'Teko-Regular';
        font-style: normal;
        font-weight: 400;
        src: local(''), url('/fonts/Teko-Regular.ttf')
    }

    @font-face {
        font-family: 'DotGothic';
        font-style: normal;
        font-weight: 400;
        src: local(''), url('/fonts/DotGothic16-Regular.ttf')
    }

    @font-face {
        font-family: 'Workbench-Regular';
        font-style: normal;
        font-weight: 500;
        src: local(''), url('/fonts/Workbench-Regular.ttf')
    }

    div.content .title {
        font-family: 'DotGothic';
        color: #433633;
        background-color: #dbf4a7;
        padding: 3px;
        border-left: 5px solid #433633;
    }

    div.content {
        margin-top: 5%;
        margin-left: 10%;
        margin-right: 10%;
    }

    div.content :global(h1) {
        font-family: 'DotGothic';
        font-size: 3em;
        margin-bottom: 10px;
        margin-top: 0px;
    }

    div.content :global(h2) {
        font-family: 'DotGothic';
        font-size: x-large;
        margin-bottom: 3px;
        margin-top: 5px
    }

    div.content :global(h3) {
        font-family: 'DotGothic';
        margin-bottom: 3px;
        margin-top: 5px
    }

    div.content :global(h4) {
        font-family: 'DotGothic';
        margin-bottom: 3px;
        margin-top: 5px
    }

    div.content :global() {
        font-family: 'DotGothic';
    }

    div.content :global(li) {
        margin: 0px;
    }

    div.content :global(p) {
        margin: 0px;
        padding-bottom: 10px;
    }

    div.content :global(em) {
        font-family: 'DotGothic';
        color: #D8973C;
    }

    div.content :global(strong) {
        font-family: 'DotGothic';
        color: #D8973C;
    }

    div.content :global(strong em) {
        font-family: 'DotGothic';
        color: #D8973C;

    }
</style>