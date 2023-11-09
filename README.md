# capstone-selfie-photographer-of-the-year

## Overview

What is your app? Brief description in a couple of sentences.

Selfie Photographer of the Year is a application that hosts a photography contest called Selfie photographer of the Year. Users can upload photos under their profile into several categories. The categories will be "Self Portrait, Underwater Selfie, AI Selfie, and Phone Selfie" The photos will be judged and prizes will be given.

### Problem

Why is your app needed? Background information around any pain points or other reasons.

Photography contests are very popular and some get worldwide recognition. The genre of "Photographer of the Year", POTY, hosts some of the most popular, including, Wildlife POTY, Landscape POTY, Nature POTY, Underwater POTY, Bird POTY, Close Up POTY, etc... The novel idea of Selfie POTY is my own and could be a very popular genre type that includes not only professional photographers but anyone with a camera "phone". The pain points could include scaling, finding users, finding sponsors for prizes, overall exposure and of course building a platform that will host all the images.

### User Profile

Who will use your app? How will they use it? Any special considerations that your app must take into account.

Users will be anyone who enjoys photography. They could be novices or professionals. There must be a profile for each user and a database to host the images.

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

Selfie POTY will be a full stack application that host users and their images into a database. The users will be able to upload one image per category. Each image uploaded will have a category associated with it which can be displayed in the recent upload gallery. There will also be a like button for users to use on other images uploaded by other users. There must be a backend database to host all the images.

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

I will use React, Express and MySql.

### APIs

List any external sources of data that will be used in your app.

I would like to classify each images using this api. https://docs.imagga.com/?node#tags

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

I am going to build a SPA with three pages. The home page is where the recent uploads will be displayed and the categories will be described. There will be login/register page for new or current users to login or register.There will also be a profile page to show the user its photos in a gallery.

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

![figma mockup](assets/images/mockup-home.png)![figma mockup](assets/images/mockup-login-register.png)![figma mockup](assets/images/mockup-profile.png)

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out.

My data will consist of users and images. I should have a 1 to many database structure with users being the one and the images are many. Each user will have a username, password, email and Id. Each image will have an Id, username_Id, likes, category, and possibly meta data.

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

"/" home will need a get request
"/upload" this will be a post request
"/login"
"/login/userId"

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.
