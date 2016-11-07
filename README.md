[![DUB](https://img.shields.io/dub/l/vibe-d.svg?maxAge=2592000)](LICENSE) 
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) 
[![David](https://david-dm.org/painless-local-development/painless-local-development-nodejs-with-aws-dynamodb.svg)](https://david-dm.org) 

# painless-local-development-nodejs-with-aws-dynamodb
A minimalistic repo to show how to develop locally with dynamoDB.

* [Introduction and objetives](#introduction-and-objetives)
* [Installation and Setup](#installation-and-setup)
* [Roadmap](#roadmap)

## Introduction and Objetives

This repo it's intendend to show how easy is use [Node.js](https://nodejs.org) & [AWS DynamoDB](https://aws.amazon.com/es/documentation/dynamodb/) to [Painless Local Development](https://github.com/painless-local-development).

To achieve this objetive we're going to propose some tools: [Docker](https://www.docker.com) & [DevLab](https://github.com/TechnologyAdvice/DevLab).

## Installation and Setup

* Install [Docker](https://www.docker.com) :whale:
* Install [Node.js](https://nodejs.org) with [NVM](https://github.com/creationix/nvm)
* Install Local dependencies:
```
npm install
```

* Install [DevLab](https://github.com/TechnologyAdvice/DevLab) as global dependency:
```
npm install devlab -g
```
**Note: DevLab requires Node v.4+ to run.** 

* Run and watch ouput:
```
devlab start
```

## Roadmap
- [x] Improving Readme
- [ ] Add some tests
- [ ] Turn into a REST Server permanently on to test through DynamoDB=http://localhost:8000/shell & server=http://localhost:8080
- [ ] Gain more [badges](http://shields.io/) like CodeClimate, Dependencies, ...

----------------------------------------------
Feel free to contribute using [PR](https://help.github.com/articles/using-pull-requests/) or [Issues](https://github.com/painless-local-development/painless-local-development-nodejs-with-aws-dynamodb/issues).


Another PoC from [Painless Local Development](https://github.com/painless-local-development) | 2016
