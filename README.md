# The League App

This app allows users to create leagues for different esports. Users can give their leagues a name, description, game, and number of teams.

## Setup Steps

1. [Fork and clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone) this repository.
1. Run `npm install` to install all dependencies
1. Use `start server` to spin up the server.

## Important Links

- [Backend Repo](https://github.com/brettdoyle44/the-league-backend)
- [Deployed API](https://murmuring-stream-17692.herokuapp.com/)
- [Deployed Client](https://github.io/brettdoyle44/the-league-client)

## Planning Story

I started with the ERDs and wireframes, concentrating on the user stories of being able to create a league. From there I made sure to create the entire backend before taking on the React app.

### User Stories

- As a user I want to sign in/up
- As a user I want to Create a new league
- As a user I want to See All Leagues
- As a user I want to Edit my leagues
- As a user I want to Delete my leagues

### Technologies Used

- React
- Nodejs
- Express
- HTML/CSS
- Bootstrap
- Javascript/JSX

### Catalog of Routes

Verb         |	URI Pattern
------------ | -------------
GET | /leagues
GET | /leagues/:id
POST | /leagues
PATCH | /leagues/:id
DELETE | /leagues/:id

### Unsolved Problems

- Still need to create a way for captains to join leagues
- Would like to eventually integrate GraphQL and completely redo the styling.

## Images

#### App Screenshot:
![screenshot](https://i.imgur.com/rpvIIM6.jpg)

---

#### Wireframes:
![wireframe](https://imgur.com/Px8sUyK.jpg)
![wireframe](https://imgur.com/HUs6b2K.jpg)

---

#### ERD:
![ERD](https://imgur.com/MfkcmDu.jpg)
