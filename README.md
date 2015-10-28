# Express CRUD with Albums

## Approach

XP's programming practices focus on two major values which are somewhat related:

  1. Test-first Programming (TDD)
  1. Incremental Design

In the last problem set you worked on gaining familiarity with Express. In this problem set you will focus on the two programming practices outlined above; TDD and incremental design.

If you would like to read about this (on your own time) in more detail please read Chapters 6 and 7 in _Extreme Programming Explained: Embrace Change_. We will do our best to learn the Values, Principles and Practices of XP through experience, but a bit of reading never hurts.

This probably looks familiar:

![](wireframes/album-root-path.png)

Now that you are writing the test code _before_ the implementation code, how does your approach change? Do you inspect the wireframes any differently?

#### One way to do it

One way to start down the path of TDD is in plain English. Open up a blank text file and with your pair write a sentences like: "when a user clicks on the 'Let me see right now' link, they are taken to the albums index view". Start by just getting it down in a stream of conscious way as you discover features. Once you have a reasonable list to start from, devise a plan of attack around themes that arise from your document.

## Wireframes

Again you are free to use whatever libraries you would like so long as Express is the base framework used. The example provided in class used `monk` but adapting it for `mongoose` should not be too difficult.

_hint:_ Pay attention to the URLs.

![](wireframes/album-root-path.png)

![](wireframes/album-index.png)

![](wireframes/album-new.png)

![](wireframes/album-show.png)

![](wireframes/album-edit.png)

## Stretch goals

1. If you chose to use [`monk`](https://github.com/Automattic/monk) re-write the application using [`mongoose`](http://mongoosejs.com/docs/guide.html) (or vice versa). Make sure to commit your work and branch, or create a new repository/directory, so that you can compare your work between the two libraries.

    When you have completed this, answer the following questions with your pair:

    1. What are the differences between `monk` and `mongoose` for test setup?
    1. Why would you choose to use one of these packages over the other?

1. If you used a package like [`method-override`](https://github.com/expressjs/method-override), replace all usage of it with [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) (XHR). Do your tests still pass?
1. [Epic] Figure out how to use [Phantom.js](http://phantomjs.org/) to better emulate a browser for end-to-end testing.

## Reflection

As always, stop a few minutes before the end of the day and, working with your pair, answer the following questions:

1. How many times did you have to open the appliation in the browser to verify that something actually worked but didn't in your test?
1. Of the sentences you may have begun with, how many ended up in your final documentation? (the output of the test run)
1. What is the connection between Test Driven Development and Error Driven Development?
1. Give each other two pieces of praise based on your work together for the day. Examples of this are things like "you did an excellent job catching syntax errors while I was driving, it made me feel like you were highly engaged in solving the problem with me." or "you did a great job communicating what you were thinking and checking in with me to see if we agreed before we moved forward."
