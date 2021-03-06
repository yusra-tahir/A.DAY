# LAP 2 Project

# A.DAY

A habit-tracking application that allows users to securely register, login and track a habit. User can track and choose the frequency at which they want to track the habit andmark as complete for the day. Users should be able to see habits completed for the day and see their most recent completion streak.

## Installation

- Install docker
- Fork/clone the repository
- Open new terminal and navigate to folder `cd A.DAY`

### Technologies Used:

- NPM
- Express
- Node.js
- Javascript
- Bootstrap
- HTML/CSS
- MongoDB
- Docker

## Usage

**bash \_scripts/startDev.sh**

- starts client, api & db services
- runs db migrations
- seeds db for development
- serves client on localhost:8080
- serves api on localhost:3000

**bash \_scripts/startTest.sh**

- starts api & db services
- runs db migrations
- attaches to api container and triggers full test run
- no ports mapped to local host

**bash \_scripts/teardown.sh**

- stop all running services
- removes containers
- removes volumes

## Changelog

# controllers

{Aafthab - iAmash412}

the files for the functions have been created, however further work is required.

# models

{Aafthab - iAmash412}

the required Class have been created in order to make the functions for avaiable controllers.

!ATTENTION IS REQUIRED TO THE CLASS AS I NEED ASSISTANCE IN ORDER TO UNDERSTAND HOW DATA IS RETIEVED FROM DATA BASE!

# routers

{Aafthab - iAmash412}

Created the relevent routes need for the app in the routers folder.

# db

{Aafthab - iAmash412}

_PARENT TABLE_

- A Table for Tracker was created in the database.
  Relevent elements have been created and have been connected with a one to one relationship with the child tables.

_CHILD TABLE_

- A Table for Habits was created in the database.
- A Table for Users was created in the database.

[x]

#

[x]

## Test Coverage

## Bugs

[x]

## Wins & Challenges

### Wins

### Challenges

## Future Features

## Contributors

- [Andrew Kennedy](https://github.com/akennedy205)
- [David Quigley](https://github.com/AverKill)
- [Aafthab Ashraff](https://github.com/iAmash412)
