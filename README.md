#Voice Controlled Pivotal manager
Welcome to voice controlled Pivotal

### Steps to run this application
Install global packages `npm install -g bower gulp karma-cli tsd@next`

run `npm install`, this will also trigger all frontend dependencies installation using bower

run `tsd install angular jasmine angular-mocks webspeechapi -ros`: Install all TypeScript symbol files required for angular modules

##Features
- Voice controlled. Give voice commands to application to create user story on Pivotal. 
Can be extended for other commands as well, as of now it works only to create new user story using voice commands.

##Technical Features
- Create story on Pivotal tracker using the profile token and Pivotal v5 APIs
- On demand loading for all modules and services, except the core of the application
- Control the application on the basis of state and not the route, using ui-router
- Not a single global variable, not even `app` ;)
- Layered bundling of files for each modules
- Promise resolving of dynamically loaded files
- Gulp for faster build process than grunt. Personal preference for gulp because of syntax.
- Unit test beside each component
- TypeScript integration for all the components of Project
- Bower for frontend dependencies, npm for all dev related dependencies
- karma with jasmine for test runner

##TODO
- Single Exception handler, an exception decorator
- Interceptor for loading image/spinner
- More unit tests