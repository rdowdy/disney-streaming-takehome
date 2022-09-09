# Disney++ (Disney Streaming Take Home Assessment)

This is a small demo app created for the Disney Streaming team as part
of a take-home coding assessment. The app pulls collection information from a BAM
which it then uses to populate a "home page" media scroller, similar to Disney+, 
or other such streaming apps.

![Screenshot of homepage](assets/homepage-screenshot.png)

## Requirements

- Create a page that consumes the home page API and renders the pre-populated data
onto the screen.
- The focused tile must be scaled up.
- The app should support navigation similar to a remote control, e.g.
up/down/left/right/enter/back/etc. Avoid mouse input.
- Minimum layout should be multiple rows of data, but please feel free to add in your
own design ideas as well!

## ✨ Disney Magic ✨

**ALERT:** There is a 15% chance of magic in the forecast today.
Be on the lookout for a hidden mickey on the page headers. You might
have to refresh the page to find him!

## Installation

Locally, the app can be run with:  
`yarn install`  
`yarn start`

To build the app for distribution, run:   
`yarn run build`

## Deployment

The app is Dockerized and deployed on Heroku at
https://disney-takehome.herokuapp.com/

## Areas In Need Of Improvement

### Add unit tests
* There are currently no unit tests. I made the decision not to include
unit tests for this because I knew that the project would already consume a large 
portion of my nights and weekends, and I wanted to limit the scope of time. 
If given more time, I consider unit tests to be part of the Definition of Done, 
and would employ TDD to develop a project/feature/bug.

### Improve class hierarchy for models. 
* Some of the models I created, like the different title classes under `src/models/title`, 
could be reworked to take more advantage of inheritance or polymorphism. 
It seems that they share some fields up until a
certain point where they differ (`program`, `series`, `set`, `collection`).


### Separate webpack files into common, dev, and prod
*  The `webpack.config.js` file currently houses all the build configurations and
is geared towards a dev workflow. A separate `webpack.prod.config.js` should be
created which would optimize the build for production. A `webpack.dev.config.js` would
do the same for dev. `webpack.common.config.js` would have the shared build configs. 

### Set up app configuration infrastructure
* App configuration values like API URLs should be stored in an environment-specific 
configuration file.

### Add support to dynamically populated `SetRef` sets
* Currently, the set renders set refs, but it populates them all on page load. 
Support still needs to be added for dynamically loading them as they scroll
into view.

### Add title text overlay to placeholder images on image not found
* Currently, we just see a friendly Mickey when an image 404's, but 
it would be much more helpful to the user if we also display the item's
title so they know what movie/series/collection it's supposed to be.

### Add dependency injection
* The classes in this project currently know how to instantiate dependencies
such as `CollectionService`. It is best practice to follow inversion of control. 
A dependency injection framework would achieve this. Dependency injection is also
critical to isolating classes when unit testing them.

### Set up a proper backend
* The app is currently served up by `webpack-dev-server` which is not 
a sustainable or secure option for serving the app in a real production scenario.