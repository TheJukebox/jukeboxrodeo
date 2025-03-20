<script lang="ts">
    import { onMount } from 'svelte';
    import { print_effect } from '../../effects.ts';
    import 'highlight.js/styles/a11y-light.css';

    export let data;

    onMount(() => {
        print_effect(
            ' less public/content/' + data.title,
            'content_title',
            0
        );
    });
</script>

<div class="content">
    <h2 class="title">jukebox@rodeo:~$ cd <a href="/content">../</a></h2>
    <h2 class="title" id="content_title">jukebox@rodeo:~$</h2>
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

    div.content :global(h1) {
        font-family: 'DotGothic';
        font-size: 3em;
        margin-bottom: 0;
        margin-top: 0;
    }

    div.content :global(h2) {
        font-family: 'DotGothic';
        font-size: x-large;
        margin-bottom: 0;
        margin-top: 0;
    }

    div.content :global(h3) {
        font-family: 'DotGothic';
        margin-bottom: 0;
        margin-top: 0;
    }

    div.content :global(h4) {
        font-family: 'DotGothic';
        margin-bottom: 0;
        margin-top: 0;
    }

    div.content {
        margin-top: 5%;
        margin-left: 10%;
        margin-right: 10%;
        font-family: 'DotGothic';
        font-size: larger;
    }

    div.content a {
        color: #62929E;
        text-decoration: none;
        font-family: 'DotGothic';
        padding-right: 25%;
    }

    div.content a:hover {
        color: #FF9000;
        text-decoration: none;
        font-family: 'DotGothic';
    }
</style>