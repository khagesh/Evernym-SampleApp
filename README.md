#Pivotal manager
Welcome to voice controlled Pivotal

### Steps to run this application
Install global packages `npm install -g bower gulp karma-cli tsd@next`

run `npm install`, this will also trigger all frontend dependencies installation using bower

run `tsd install angular jasmine angular-mocks webspeechapi -ros`: Install all TypeScript symbol files required for angular modules

##Features
- Voice controlled. Just talk with application and tell application you story name using your voice.
- Create story on Pivotal tracker using the profile token and Pivotal v5 APIs

##Technical Features
- On demand loading for all modules and services except the core of framework
- Control the application on the basis of state and not the route, using ui-router
- Not a single global variable, not even `app` ;)
- Layered bundling of files for each modules
- Promise resolving of dynamically loaded files
- Gulp for faster build process than grunt. Personal preference for gulp because of syntax.
- Unit beside each component
- TypeScript integration for all the components of Project
- Bower for frontend dependencies, npm and node for all dev related dependencies
- karma with jasmine for test runner

##Improvements
- Single Exception handler, an exception decorator
- Interceptor for loading image/spinner
- More unit tests