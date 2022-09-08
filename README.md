# Disney++ (Disney Streaming Take Home Assessment)

This is a small demo app created for the Disney Streaming team as part
of a take-home coding assessment. The app pulls collection information from a BAM
which it then uses to populate a "home page" media scroller, similar to Disney+, 
or other such streaming apps.

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

### Improve class hierarchy for models. 
* Some of the models I created, like the different title classes under `src/models/title`, 
could be reworked to take more advantage of inheritance or polymorphism. 
It seems that they share some fields up until a
certain point where they differ (`program`, `series`, `set`, `collection`).
  

### Add shared constants for type discriminators
* The type discriminators used by `class-transformer` use strings to read
the type field and decide which class to assign. These can be pulled up into
shared constants so there aren't any magic strings. This makes the type values
easy to change later on.


### Separate webpack files into common, dev, and prod
*  The `webpack.config.js` file currently houses all the build configurations and
is geared towards a dev workflow. A separate `webpack.prod.config.js` should be
created which would optimize the build for production. A `webpack.dev.config.js` would
do the same for dev. `webpack.common.config.js` would have the shared build configs. 

### Set up app configuration infrastructure
* App configuration values like API URLs should be stored in an environment-specific 
configuration file.

### Add support to dynamically populate `SetRef` sets
* Currently, the app only renders sets that we have already received data for
from the API. It does not yet populate SetRef sets. In the interest of time, I
left this extra credit out of the scope of this implementation.

### Add title text overlay to placeholder images on image not found
* Currently, we just see a friendly Mickey when an image 404's, but 
it would be much more helpful to the user if we also display the item's
title so they know what movie/series/collection it's supposed to be.

### Add dependency injection
* The classes in this project currently know how to instantiate dependencies
such as `CollectionService`. It is best practice to follow inversion of control. 
A dependency injection framework would achieve this.