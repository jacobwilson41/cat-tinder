# cat-tinder

1. fork it and clone it
2. cd cat-tinder-noredux
3. npm install
4. npm start
5. if the app does not automatically open in chrome, navigate to localhost:3000 in chrome
6. open the developer console and click on the "toggle device toolbar button" (command+shift+M on mac)
7. at the top, switch the device to "iPhone 6/7/8"

I initially made two apps inside this repo:

- cat-tinder-redux
- cat-tinder-noredux

After going over the Redux docs, my initial thoughts were that I should not have included Redux on my resume just because I used it on one application. I pretty much was going to have to re-learn redux today which I knew was going to eat up a lot of time.

My intentions were to get an mvp working without redux and then with any spare time, attempt to implement a version with redux.

I did not have time to get to redux and I deleted the cat-tinder-redux app

The codepen that I referenced for the swipe animation can be found at https://codepen.io/suez/pen/MaeVBy?editors=1000

This coding project really exposed a hole in my skillset which is CSS - particularly placement and layout. I haven't used CSS much in my personal applications and I foolishly thought that I would be able to pick it up enough to complete interview coding challenges.

I was dead wrong!

Next steps for me is to read the docs on CSS flexbox and spend some time formatting a basic html page with flexbox.

I made some assumptions about my ability to pick up technologies on the fly that I'd only used a few times. CSS is obviously a baseline skill for front-end development and I need to get better at it FAST.

I don't like that the code for upvoting/downvoting is mixed in with the animation logic (animation-logic.js).  I want to move this into the react app somewhere.