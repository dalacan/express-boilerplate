# Express.JS Boilerplate
[![Build Status](https://travis-ci.org/dalacan/express-boilerplate.svg?branch=master)](https://travis-ci.org/dalacan/express-boilerplate)

A simple Express API boilerplate with a TravisCI and docker build pipeline.

## API

### Hello World
Returns a simple "Hello World" message.

* **URL**

  /

* **Method:**

  `GET`
  
* **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `Hello World`
    
### Status endpoint
The status endpoint returns the application name, version number and description from the package.json file and the last commit sha at build time as a json response.

* **URL**

  /status

* **Method:**

  `GET`
  
* **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {

      "myapplication": [

        {

          "version": "1.0",

          "description": "package description",

          "lastcommitsha": "abc57858585"

        }

      ]

    }
    ```

# Installing locally
To run the application locally,
1. Checkout the application
2. Install the dependencies `npm install`
3. Run `npm run start`
4. Open browser and go to http://localhost:3000 and the browse should return a "Hellow World" message.

# Running the application in developer mode
Additionally, the application can be ran in developer mode to continous development and testing. To run the application in developer mode, run `npm run dev`

# Test
Unit tests can be ran by running the following command `npm run test`

Tests can be found in the /tests folder.

# Deployment
The boilerplate include a TravisCI automated build pipeline which will:
1. Run a localized test.
2. Build a test docker image and execute the unit tests.
3. Build a production docker image and publish it to the docker hub repository.

## Setting up TravisCI 
In order to publish to your docker hub registry, make sure you update your .travis.yml via Travis CLI by running the following commands:
```
travis encrypt DOCKER_USERNAME myusername --add
travis encrypt DOCKER_PASS secretsecret --add
```
# Limitations
As this is meant to be a boilerplate application, the following functionality have not been implemented:
- Logging: Not implemented
- Secure HTTP headers: Not implemented
  - Exposes the application by identifying itself as an express app which increases the risk of specifically-targeted attacks (i.e. express exploits). Recommendation: Either use Helmet or disaple X-Powered-By header.
- TLS: Not implemented
  - Data is not encrpyted in transit. Risks of packet sniffing and man-in-the-middle attacks on sensitive data. Recommendation: Implement TLS.

Additionally, the boilerplate only implements examples of GET request. To implement additional types of HTTP request methods, please refer to the Express documentation (https://expressjs.com/en/starter/basic-routing.html)  
