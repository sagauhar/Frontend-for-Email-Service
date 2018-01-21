# Frontend project for Email Service

This project is to provide a User Interface for the 
[Email Services](https://github.com/sagauhar?tab=repositories) developed.

![Application.png](http://d1iwbnyjdxvj6u.cloudfront.net/Application.png)

## Technologies

The thinking behind choosing technologies was to pick those ones which are not only being used extensively in the market but also are easy to implement in short amount of time.

For this, I chose [Angular 2](https://angular.io/) and [Bootstrap 3](https://getbootstrap.com/).

The project also uses [NPM](https://www.npmjs.com/) and [JSPM](https://jspm.io/) for modules management.

Typescript is also used to make the code understandable and easy to manage when it comes to making changes in future.

## Configuration

This project has only one configuration which is to provide the end points of Email Service. The configuration is located in the /app/services/email.service.ts file. It has a variable called **EMAIL_SERVICE_URL** which can be changed to any other endpoint as long as it follows the same WS specifications.

## Build

In order to build the code, you need to download or clone the [code](https://github.com/sagauhar/Frontend-for-Email-Service).

To clone the code, you will require Git on your machine. Once installed, you can follow the GitHub instructions on the repository page for further instructions.

Once, the code is downloaded and available on a machine, you need to install Node and NPM version [6.12.x](https://nodejs.org/dist/latest-v6.x/).

To confirm, the node installation, you should run **node -v** and **npm -v** on terminal or command prompt depending on your operating system.

You will now need jspm which can be easily installed by doing a **npm install jspm**.

After this, you are set to build.

Run the following bunch of commands in order to fully build:

```
jspm install
npm install
npm install live-server -g
jspm bundle-sfx app --minify
```

In the above commands, live-server is used to run the service locally. The last command is to create a javascript bundle which makes it easy to copy or deploy the project to a server.

## Running the Project locally

To run the project locally, just type live-server on the root of the project and it should open a new browser window on http://localhost:8080. The application should load and you should be able to use it.

## Deployment

In order to deploy the project, just grab the following files and copy to your Web Server:

```
index.html
build.js
css -> index.css
```

## Architectural Design

I have used AWS as my cloud provider for the whole assignment. The UI is deployed on an S3 bucket in Sydney region. It is behind a CloudFront distribution also so that the Edge nodes make it faster for the users around the world.

The files were manually copied to the bucket which ideally, could have been a set of AWS CLI commands but due to shortage of time, couldn't execute it.

## Testing

Since, the application didn't have much code in it and the fact that I wanted to concentrate more on the backend side, I haven't done any unit testing.

But, the application is deployed and can be tested by going to the following urls i.e. one for each backend per language:

- http://d1iwbnyjdxvj6u.cloudfront.net/email-java/index.html#/email-form
- http://d1iwbnyjdxvj6u.cloudfront.net/email-node/index.html#/email-form
