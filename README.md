# Summit County Animal Shelter Website

The Summit County Animal Shelter is a solo, full-stack web development project, built on React and Node, using Sequelize, PostgreSQL, and Jasmine for testing. Hosted on Heroku, built with responsive flex-box and custom CSS, v1.0 was built in a span of two weeks, including wireframes, mock-ups and code dev.

Live site: https://sumco-animal-shelter.herokuapp.com/

---

### TL;DR - [Just let me have it.](Local Configuration:)

---

### v1.0 Features include:
-Available animal list and animal profiles
-User sorting by animal type, size, and age.
-Admin access for adding and editing animal profiles. To create an admin account in your own project db, set user `role = 1` in the user table. Contact me for admin user info on the live site.

### Upcoming Features:
Check out the [live project board](https://trello.com/b/uo5gYHdQ/animal-shelter-app).
-General user account allowing potential-adopters to "favorite" animals and save search settings
-Accept PayPal donation
-Chat feature so that users can get quick answers form shelter staff
-Online adoption application
-Calendar for shelter events, clinics and trainings.

---

### Local Configuration:
(This assumes you have [Node/NPM](http://www.nodejs.org)and [React](https://reactjs.org) already installed on your system.)
Open up terminal, and let's get going!

1. Run `git clone https://github.com/lauren4c/sumco-animal-shelter.git` to download the project.

2. `cd` into the root directory `sumco-animal-shelter`.

3. Run `npm install` to install the server-side dependancies. Then `cd shelter-fe` and run `npm install` a second time to install the client-side dependencies.

4. Head back to the root directory `cd ..` and set up the database: `sequelize db:create sumco-dev` followed by `sequelize db:migrate`

5. This project uses `express session`, so let's get that set up locally, too. Enter `touch .env` while in the root directory, then add `cookieSecret=" <enter a string of your choice here> "` to the `.env` file.

6. Finally, in the root directory run `npm run dev` to start the client and back-end side servers. It should open up the site in your browser automatically, but you can always go to http://localhost:3000 manually.

##### Happy Hacking!
