# wdi-project-two

<img src="public/images/nice-rocks-home-page.png" width="auto" height="170">
### An Express full stack server side travel review site

Nice rocks is a geotourism review app aimed at geologists and general tourists alike. It allows users to add geotourism site that they have been to so other users can rate and review them. Interesting geological information is also collected for each of the sites and users who are geologists can edit any sites geological information with a similar idea to Wikipedia.

## Table of Contents
* [Brief](#brief)
* [Tech Used](#tech)
* [Process](#process)
* [Challenges](#challenges)
* [Wins](#wins)
* [Next Up](#next)

* [Click](https://nice-rocks.herokuapp.com/) to view site

## <a name="brief"></a>Brief
You should create a platform for reviewing restaurants (**or something else**), (think a mini version of [Tripadvisor restaurants](https://www.tripadvisor.co.uk/Restaurants) that meets the following minimum criteria:

Technical Requirements:

- **Have at least 2 models** – one representing a user and one that represents the main resource of your app.
- **Include relationships** - embedded or referenced. Make sure you take the time to consider the best approach before building out your models.
- **The app should include authentication** - with encrypted passwords & an authorization flow.
- **Have complete RESTful routes** for at least one of your resources with all CRUD actions.
- **Include wireframes** - that you designed before building the app.
- Have semantically clean HTML - you make sure you write HTML that makes structural sense rather than thinking about how it might look, which is the job of CSS.
- Be deployed online and accessible to the public.

MVP Deliverables:
- Has a User model and user authentication.
- Has models for Restaurants and Reviews.
- Allow users to add, edit and delete restaurants and reviews.
- Users can only delete their own reviews or restaurants added.
- Is styled with Bulma, but doesn't look like Bulma.

<hr>

## <a name="tech"></a>Technologies Used:

`Express.js`
`MongoDB`
`EJS`
`Mongoose`
`bcrypt`
`Vanilla Javascript`
`SASS (SCSS)`
`Bulma`
`CSS3`
`HTML5`
`Git`
`Atom`
`GitHub`
`Trello`

<hr>

## <a name="process"></a>The Process
### Planning

I approached this project by first planning out what the webpage required and how it would function. The goal was a to keep to a simple MVP and then to add to that if time allowed. Being my first full stack web page I have built, I started by deciding on what my models would be and what information they would  contain. I then planned out the wireframes for each of the primary pages, `login` `home` `index` `show` `new site` `add review` etc. During this proces I created a [trello](https://trello.com/b/fMUjQhId) board and listed out all the tasks required to reach MVP.

### The Build

Being a server side web app I decided to begin he build with the models. I completed both models with respective controllers for all the restful routes they would require. I built very basic `EJS` pages which only displayed the JSON data on the browser screen so I could be sure that the correct data was being received before diving into the client side build.

Once the server was serving up the correct data I began building the client side views and creating the pages I had wireframed during the planning stages.

Authentication was an important part of the app as it determined what the users can do on the page. We used session cookies for this and .....



<hr>

## <a name="challenges"></a>Challenges



<hr>

## <a name="wins"></a>Wins

A big in for me during this project was being able to correctly redirect the user back to the page that may have sent them to login, if they where wanting to edit or create new reviews or sites. This was not part of the immediate scope of project but meant that the user experience become smooth and crisp.

My favourite piece of code (shown below) is very simple but add a nice touch to the user experience. It simply passes the login page (session new) the url of the page that refered it to login allowing the login page to correctly redirect to user to that page rather than always back to a fixed location.


```Javascript
    function sessionNew( req, res ){
      const prevPage = req.headers.referer;
      res.render('sessions/new', { prevPage });
    }
```

<hr>

## <a name="next"></a>Next up
