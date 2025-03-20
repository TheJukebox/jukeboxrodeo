<script>
</script>

<ul class="navbar">
    <li class="navbar-button"><a href="/">home</a></li>
    <li class="navbar-button"><a href="/content">content</li>
    <li class="navbar-button"><a href="https://gitlab.com/the_jukebox" target="blank" rel="noopener noreferrer">gitlab</a></li>
    <li class="navbar-button"><a href="https://terabytecowboy.bandcamp.com" target="blank" rel="noopener noreferrer">tunes</li>
    <li class="navbar-button"><a href="/projects">projects</li>
    <li class="navbar-title"><a href="/">jukebox.rodeo/</a></li>

</ul>

<div class="line"></div>


<body class="bg">
    <pre>
        <code># TODO: finish website</code>
    </pre>
    <slot />
</body>

<style>
    @font-face {
        font-family: 'Workbench-Regular';
        font-style: normal;
        font-weight: 500;
        src: local(''), url('/fonts/Workbench-Regular.ttf')
    }

    @font-face {
        font-family: 'Teko-Regular';
        font-style: normal;
        font-weight: 400;
        src: local(''), url('/fonts/Teko-Regular.ttf')
    }

    div.line{
        width: 100%;
        padding-top: 5px;
        border-bottom: 3px solid #433633;
    }

    ul.navbar {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #dbf4a7;
        border-left: 5px solid #433633;
    }

	ul.navbar li{
		display: inline;
        float: left;
        padding: 2px;
        margin-left: 10px;
        background-color: #dbf4a7;
        margin-top: 5px;
	}

    ul.navbar li a {
        color: #433633;
        text-decoration: none;
        font-family: 'Teko-Regular';
        font-size: larger;
    }

    ul.navbar li a:hover {
        color: #877976;
        text-decoration: none;
        font-family: 'Teko-Regular';
        font-size: larger;
    }

    ul.navbar li.navbar-title {
        float: right;
        margin-right: 10px;
        margin-top: 6px;
    }

    ul.navbar li.navbar-title a {
        font-family: 'Workbench-Regular';
        text-decoration: none;
        color: #433633;
        font-size: larger;
    }

    ul.navbar li.navbar-title a:hover {
        font-family: 'Workbench-Regular';
        text-decoration: none;
        color: #877976;
        font-size: larger;
    }

    body.bg {
        background-color: #f0f4e8;
    }
</style>
