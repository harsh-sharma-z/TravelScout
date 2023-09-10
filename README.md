<div align="center">
  
![][views] ![][stars] ![][forks] ![][issues] ![][license] ![][repo-size]
  
<!-- logo/title -->
  
<br>
<picture>
  <source media="(prefers-color-scheme: dark, (width:600px))" srcset="./public/assets/travel-scout-logo.png">
  <source media="(prefers-color-scheme: light,(width:600px))" srcset="./public/assets/travel-scout-img.png">
  <img src="./public/assets/travel-scout-logo.png" width="600px" alt="triphive">
</picture>
<br>
  
### 🏕️A campsite review website where you can find beautiful campsites and leave reviews📝 for others to check.
## ⚙️Dependencies Used

---

**[<kbd> <br> **@mapbox/mapbox-sdk** ^0.15.0 <br> </kbd>][mapbox]**&nbsp;&nbsp;
**[<kbd> <br> **cloudinary:** ^1.36.1 <br> </kbd>][cloudinary]**&nbsp;&nbsp;
**[<kbd> <br> **passport:** ^0.6.0 <br> </kbd>][passport]**&nbsp;&nbsp;
**[<kbd> <br> **multer:** ^1.4.5-lts.1 <br> </kbd>][multer]**&nbsp;&nbsp;
**[<kbd> <br> **express:** ^4.18.2 <br> </kbd>][express]**&nbsp;&nbsp;
**[<kbd> <br> **mongoose:** ^6.9.2 <br> </kbd>][mongoose]**&nbsp;&nbsp;
**[<kbd> <br> **path:** ^0.12.7 <br> </kbd>][path]**&nbsp;&nbsp;
**[<kbd> <br> **joi:** ^17.9.1 <br> </kbd>][joi]**&nbsp;&nbsp;
**[<kbd> <br> **ejs:** ^3.1.9 <br> </kbd>][ejs]**&nbsp;&nbsp;
**[<kbd> <br> **sanitize-html:** ^2.10.0 <br> </kbd>][sanitize-html]**&nbsp;&nbsp;
**[<kbd> <br> **express-mongo-sanitize:** ^2.2.0 <br> </kbd>][express-mongo-sanitize]**&nbsp;&nbsp;

---

## 📸 Screen Shots

<details>
<summary align=center>
  
  #### 🔽Click to Expand

</Summary>
<br>

| Landing/Home Page      | Campgrounds Page   |
| ---------------------  | -----------------  |
| ![landing]             | ![homepage]        |

| Campground Detail |
| ------------------| 
| ![campgrounds]    | 

| New Campground Page | Edit Campground Page |
| ------------------- | -------------------- |
| ![new]              | ![edit]              |

| SignUp Page   | Login Page |
| ------------- | ---------- |
| ![signup]     | ![login]   |

<br>
</details>
</div>
<div align='center'>

## 🛠️Building from Source

</div>

- ⬇️Fetch latest source code from master branch.

```console

$ git clone https://github.com/harsh-sharma-z/TravelScout.git
$ cd TravelScout

```

- 👌Create **.env** file & add your own **CONFIGS**

```js

SESSION_SECRET = <Your_session_secret>
MONGO_URI = <Your_database_url>
PORT = <Port_number>

CLOUDINARY_CLOUD_NAME = <Your_cloud_name>
CLOUDINARY_API_KEY = <Your_api_key>
CLOUDINARY_SECRET = <Your_secret>

MAPBOX_TOKEN = <Your_Mapbox_Token>

```

- 👟Run the Website with 🆚Code **or** 💻Command Line :

```console

$ yarn
$ yarn start

```

<div align="center">

## 📂Directory Structure

</div>

<details >
  <summary align=center>
  
  #### 🔽Click to Expand
  </Summary>

```
├───cloudinary
├───controllers
├───models
├───public
│   ├───assets
│   ├───css
│   └───js
├───routes
├───seeds
├───utils
└───views
    ├───campgrounds
    ├───layouts
    ├───partials
    └───users
```

</details>

<div align='center'>

## ☢️Contributors

[![][contributors]][contributors-graph]

_Note: It may take up to 24h for the [contrib.rocks][contrib-rocks] plugin to update because it's refreshed once a day._

</div>

<p align="center">
<img width="150%" src="https://camo.githubusercontent.com/6038c8f1fd8f60de75477470e5a87210e9256202e01dfba9986446304a0f0254/68747470733a2f2f63617073756c652d72656e6465722e76657263656c2e6170702f6170693f747970653d776176696e6726636f6c6f723d6772616469656e74266865696768743d36302673656374696f6e3d666f6f746572">
</p>

<!----------------------------------{ Labels }--------------------------------->

[views]: https://komarev.com/ghpvc/?username=harsh-sharma-z&label=view%20counter&color=red&style=flat
[repo-size]: https://img.shields.io/github/repo-size/harsh-sharma-z/TravelScout
[issues]: https://img.shields.io/github/issues-raw/harsh-sharma-z/TravelScout
[license]: https://img.shields.io/github/license/harsh-sharma-z/TravelScout
[forks]: https://img.shields.io/github/forks/harsh-sharma-z/TravelScout?style=flat
[stars]: https://img.shields.io/github/stars/harsh-sharma-z/TravelScout
[contributors]: https://contrib.rocks/image?repo=harsh-sharma-z/TravelScout&max=500
[contributors-graph]: https://github.com/harsh-sharma-z/TravelScout/graphs/contributors
[contrib-rocks]: https://contrib.rocks/preview?repo=harsh-sharma-z%2FTravelScout

<!-----------------------------{ Dependencies Used }---------------------------->

[mapbox]: https://www.npmjs.com/package/@mapbox/mapbox-sdk
[cloudinary]: https://www.npmjs.com/package/cloudinary
[passport]: https://www.npmjs.com/package/passport
[multer]: https://www.npmjs.com/package/multer
[express]: https://www.npmjs.com/package/express
[mongoose]: https://www.npmjs.com/package/mongoose
[path]: https://www.npmjs.com/package/path
[joi]: https://www.npmjs.com/package/joi
[ejs]: https://www.npmjs.com/package/ejs
[sanitize-html]: https://www.npmjs.com/package/sanitize-html
[express-mongo-sanitize]: https://www.npmjs.com/package/express-mongo-sanitize

<!--------------------------------{ Images }--------------------------------->

[landing]: https://graph.org/file/2b8ce745721ed04551b70.png
[homepage]: https://graph.org/file/d547cc114374bdd3a579a.png
[campgrounds]: https://graph.org/file/8aeecf28a625742e67c61.png
[login]: https://graph.org/file/1d5ccb389cd223707e51b.png
[signup]: https://graph.org/file/8b4053b901caeb4411fe0.png
[edit]: https://graph.org/file/6245b465ed289deefd1eb.png
[new]: https://graph.org/file/eb1ac72e5848f167f8d39.png