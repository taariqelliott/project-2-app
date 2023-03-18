## Project Choice (Tell us which project you're doing!)
> A name for your Project  
SongByCountry

## Project Description
> Include:<br />
> General App Idea/Purpose<br />
Allow users to add, browse, and play music by country  

> Models including field names and their datatypes<br />
models will include the song name, genre, country, year etc

> A list of routes (e.g. `POST /pins/ allows users to post a picture of a pin`)<br />

index - /songfinder/ --- will display just a home page and each country will have their own index 

new - /songfinder/new --- will allow users to add new songs to database

destroy - /songfinder/:id --- will allow users to delete song from db

update - /songfinder/:id will allow users to update the info for a song

create - /songfinder/ --- will aid in creating/posting new songs

edit - /songfinder/:id will allow users to update the info for a song

show - /songfinder/:id will display the certian song and all of it's information

## Wireframes
> Wireframes with basic page layouts<br />
> Copy and paste or drag and drop your images here.
![Untitled_Artwork 3](https://media.git.generalassemb.ly/user/46396/files/96332dbb-300b-491c-9f47-ff32c20e4c7d)
![Untitled_Artwork](https://media.git.generalassemb.ly/user/46396/files/96fc7975-c6b0-4ce9-9595-728e6b337a1b)
![Untitled_Artwork 1](https://media.git.generalassemb.ly/user/46396/files/e791f6e1-0c94-44c1-9dcf-d8f31899f712)
![Untitled_Artwork 2](https://media.git.generalassemb.ly/user/46396/files/fe63aa4e-b0c3-4535-9d4f-c301bced38df)


## User Stories
> User stories detailing app functionality<br />
> Add user stories following the _As a [type of user], I want [what the user wants], so that [what it helps accomplish]_ format.

As a user I want to be ablet browse songs, so that I can learn about new music. 
As a user I want to be able to isolate certain songs so I can learn more about each.
As a user I want to have the ability to update songs just in case I enter the wrong information.
As a user I want to have each song dynamically in a list so I can see all of the data for that type of song.

### MVP Goals
A music app that has full CRUD capabilities with no errors

### Stretch Goals
Users can log in
Users can get randomy generated suggestions based off the songs they like


### Issues
Multer Integration
Search Integration

### Things To Change & Add
Ability to add images and music files 
Custom music player
User Registration
Better Styling

