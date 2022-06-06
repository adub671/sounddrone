##About

SoundDrone is a clone of SoundCloud's basic functionalities. A website where you can add song's and playlist and browse through the stream and add songs to playlist.

##How To use

1. Clone This Repository
2. npm install within the backend and frontend folder
3. create a database with a corresponding .env file in the backend root
4. run these commands:
    npx dotenv sequelize db:seed:undo:all
    npx dotenv sequelize db:migrate:undo:all
    npx dotenv sequelize db:migrate
    npx dotenv sequelize db:seed:all
5. npm start within backend / then npm start within frontend
6. App is ready to Launch!

Visit sounddrone.heroku.com for a live demo