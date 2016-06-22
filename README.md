# Archimgur

## Tools
* React Native
* Redux
  * with react-redux bindings
* Redux Thunk
* [Remote Redux DevTools](https://github.com/zalmoxisus/remote-redux-devtools)
  * launch DevTools with this handy [Chrome app](https://chrome.google.com/webstore/detail/remotedev/faicmgpfiaijcedapokpbdejaodbelph)
* [Moment.js](http://momentjs.com/) to assist with converting time

## Initial (One Time Only) Setup
#### Clone the repo and install dependencies
```
> git clone https://github.com/AndrewTHuang/archimgur.git
> cd archimgur
> npm install
```

#### Run the build process in Xcode
Open the project in Xcode (v7.0 or higher)
```
> open ios/archimgur.xcodeproj

Press `Command-R` to build the app
```

Upon successful build, Simulator will automatically launch the app (while running React packager on port 8081).

## Subsequent Usage
After the initial build, there is no need for Xcode if you're just playing around with the app in Simulator. To do so, follow these steps:

```
> npm start (this will run React packager on port 8081)

Open Simulator (Command-Space bar + 'simulator')
Swipe to the second screen
Tap on the `archimgur` icon
```
