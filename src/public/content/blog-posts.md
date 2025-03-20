## I built a blog posts feature

I built the blog feature. After some trouble with async, I eventually got it working the way I wanted. This solution really only works for text, but it basically goes like this:

- I open up the source code on my local machine and write some markdown content in `src/public/content`.
    - `npm run dev` for a live preview that I can refresh. 
- The contents of `src/public/content` is shown on [https://jukebox.rodeo/content]() as pretend `ls -la -t` output.
    - Sorted by date - I need to add some other sorting options and think about what happens for a large volume of posts.
- You click one of those items and you're routed to `https://jukebox.rodeo/content/[post]`, where `[post]` is the filename of the post.
    - This is the Svelte implementation of dynamic routing, so I just have a template for what a blog post should look like.

This isn't the most future-proof solution and it means my Digital Ocean app is getting redeployed every time I make a new post. It does get me off the ground and helped me decide on some more of the style of the site, so I'm still happy I put the effort in.

### \#TODO:

There's still some work that needs doing before I think this is actually functioning enough that I can back off developing the project for a bit:

- I need codeblocks that actually look good.
- I want to add a previous/next post option. Much like the `cd ../` for "back" (it just takes you to `/content`, try it out up top), I want to make it part of the theme...
    - maybe two more `cd`s in the pretend terminal history to some env vars? `$NEXT_POST` and `$PREV_POST`?
- Some metadata about the posts would be good - I can bring in the date/time.

I think it would be worth writing up how I implemented the site, even though the source is available, in case people run into some of the problems I did along the way. Next post I'll break down the fake `ls -la` from `/content` and then I'll feel satisfied I contributed something to the wall of noise.