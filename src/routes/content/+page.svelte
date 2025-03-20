<script lang="ts">
    import { print_effect } from '../effects.ts';
    import { onMount } from 'svelte';
    export let data;

    onMount(() => {
        print_effect(
            " ls -la public/content -t",
            "ls_title",
            0
        );
    });
    
</script>

<div class="post_history" data-sveltekit-reload>
    <h2 class="title" id="ls_title">jukebox@rodeo:~$</h2>
    <h3>
        <span class="file_stats">drw-r--r-- 2 jukebox jukebox</span>
        <span class="file_size">4096</span> 
        Feb 04
        <a class="post_link" href="content/">
            .
        </a>
        <br>
        <span class="file_stats">drw-r--r-- 4 jukebox jukebox
            <span class="file_size">4096</span>
            Feb 04
            <a class="post_link" href="..">
                ..
            </a>
        </span>
        <br>
        {#each data.posts as post}
            -rw-r--r-- 1 jukebox jukebox
            <span class="file_size">{post.size}</span> 
            {post.date}
            <a class="post_link" href="content/{post.name}">
                {post.name}
            </a>
            <br>
        {/each}
    </h3>
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

    div.post_history {
        margin-top: 5%;
        margin-left: 10%;
        margin-right: 10%;
    }

    div.post_history span.file_size {
        display: inline-block;
        text-align: right;
        min-width: 4ch;
    }

    div.post_history a.post_link {
        color: #62929E;
        text-decoration: none;
        font-family: 'DotGothic';
        padding-right: 25%;
    }

    div.post_history a.post_link:hover {
        color: #FF9000;
        text-decoration: none;
        font-family: 'DotGothic';
    }

    div.post_history .title {
        font-family: 'DotGothic';
        color: #433633;
        background-color: #dbf4a7;
        padding: 3px;
        border-left: 5px solid #433633;
    }

    div.post_history :global(h1) {
        font-family: 'DotGothic';
        font-size: 3em;
        margin-bottom: 0;
        margin-top: 0;
    }

    div.post_history :global(h2) {
        font-family: 'DotGothic';
        font-size: x-large;
        margin-bottom: 0;
        margin-top: 0;
    }

    div.post_history :global(h3) {
        font-family: 'DotGothic';
        margin-bottom: 0;
        margin-top: 0;
    }

    div.post_history :global(h4) {
        font-family: 'DotGothic';
        margin-bottom: 0;
        margin-top: 0;
    }
</style>
