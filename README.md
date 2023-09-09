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

| Landing Page | Home Page   |
| ------------ | ----------- |
| ![landing]   | ![homepage] |

| Hotel Detail | Reward Section |
| ------------ | -------------- |
| ![hotel]     | ![reward]      |

| New Hotel Page | Edit Hotel Page |
| -------------- | --------------- |
| ![new]         | ![edit]         |

| Register Page | Login Page |
| ------------- | ---------- |
| ![register]   | ![login]   |

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
├───node_modules
│   ├───.bin
│   ├───@babel
│   │   ├───code-frame
│   │   │   ├───lib
│   │   │   └───node_modules
│   │   │       ├───ansi-styles
│   │   │       ├───chalk
│   │   │       │   └───types
│   │   │       ├───color-convert
│   │   │       ├───color-name
│   │   │       ├───has-flag
│   │   │       └───supports-color
│   │   ├───helper-validator-identifier
│   │   │   ├───lib
│   │   │   └───scripts
│   │   └───highlight
│   │       ├───lib
│   │       └───node_modules
│   │           ├───ansi-styles
│   │           ├───chalk
│   │           │   └───types
│   │           ├───color-convert
│   │           ├───color-name
│   │           ├───has-flag
│   │           └───supports-color
│   ├───@hapi
│   │   ├───hoek
│   │   │   └───lib
│   │   └───topo
│   │       └───lib
│   ├───@mapbox
│   │   ├───fusspot
│   │   │   └───lib
│   │   │       └───__snapshots__
│   │   ├───mapbox-sdk
│   │   │   ├───lib
│   │   │   │   ├───browser
│   │   │   │   │   └───__tests__
│   │   │   │   ├───classes
│   │   │   │   │   └───__tests__
│   │   │   │   ├───helpers
│   │   │   │   │   └───__tests__
│   │   │   │   └───node
│   │   │   ├───services
│   │   │   │   ├───service-helpers
│   │   │   │   │   └───__tests__
│   │   │   │   │       └───fixtures
│   │   │   │   └───__tests__
│   │   │   ├───test
│   │   │   └───umd
│   │   ├───parse-mapbox-token
│   │   └───polyline
│   │       ├───bin
│   │       ├───src
│   │       └───test
│   ├───@sideway
│   │   ├───address
│   │   │   └───lib
│   │   ├───formula
│   │   │   └───lib
│   │   └───pinpoint
│   │       └───lib
│   ├───@sindresorhus
│   │   └───is
│   │       └───dist
│   ├───@szmarczak
│   │   └───http-timer
│   │       └───dist
│   │           └───source
│   ├───@types
│   │   ├───cacheable-request
│   │   ├───http-cache-semantics
│   │   ├───keyv
│   │   ├───minimist
│   │   ├───node
│   │   │   ├───assert
│   │   │   ├───dns
│   │   │   ├───fs
│   │   │   ├───readline
│   │   │   ├───stream
│   │   │   ├───timers
│   │   │   └───ts4.8
│   │   │       ├───assert
│   │   │       ├───dns
│   │   │       ├───fs
│   │   │       ├───readline
│   │   │       ├───stream
│   │   │       └───timers
│   │   ├───normalize-package-data
│   │   ├───responselike
│   │   ├───webidl-conversions
│   │   └───whatwg-url
│   │       └───dist
│   ├───accepts
│   ├───ansi-styles
│   ├───append-field
│   │   ├───lib
│   │   └───test
│   ├───array-flatten
│   ├───arrify
│   ├───async
│   │   ├───dist
│   │   └───internal
│   ├───asynckit
│   │   └───lib
│   ├───balanced-match
│   │   └───.github
│   ├───base-64
│   ├───body-parser
│   │   └───lib
│   │       └───types
│   ├───brace-expansion
│   ├───bson
│   │   ├───etc
│   │   ├───lib
│   │   ├───src
│   │   │   ├───parser
│   │   │   └───utils
│   │   └───vendor
│   │       ├───base64
│   │       └───text-encoding
│   │           └───lib
│   ├───buffer-from
│   ├───busboy
│   │   ├───.github
│   │   │   └───workflows
│   │   ├───bench
│   │   ├───lib
│   │   │   └───types
│   │   └───test
│   ├───bytes
│   ├───cacheable-lookup
│   │   └───source
│   ├───cacheable-request
│   │   └───src
│   ├───call-bind
│   │   ├───.github
│   │   └───test
│   ├───camelcase
│   ├───camelcase-keys
│   │   └───node_modules
│   │       └───quick-lru
│   ├───chalk
│   │   └───source
│   ├───clone-response
│   │   └───src
│   ├───cloudinary
│   │   ├───lib
│   │   │   ├───api_client
│   │   │   ├───cache
│   │   │   ├───provisioning
│   │   │   ├───utils
│   │   │   │   ├───encoding
│   │   │   │   │   └───sdkAnalytics
│   │   │   │   └───parsing
│   │   │   └───v2
│   │   ├───lib-es5
│   │   │   ├───api_client
│   │   │   ├───cache
│   │   │   ├───provisioning
│   │   │   ├───utils
│   │   │   │   ├───encoding
│   │   │   │   │   └───sdkAnalytics
│   │   │   │   └───parsing
│   │   │   └───v2
│   │   └───types
│   ├───cloudinary-core
│   │   └───src
│   │       ├───layer
│   │       ├───namespace
│   │       ├───sdkAnalytics
│   │       ├───tags
│   │       └───util
│   │           ├───features
│   │           │   └───transparentVideo
│   │           ├───parse
│   │           ├───transformations
│   │           └───xhr
│   ├───color-convert
│   ├───color-name
│   ├───combined-stream
│   │   └───lib
│   ├───concat-map
│   │   ├───example
│   │   └───test
│   ├───concat-stream
│   ├───connect-flash
│   │   └───lib
│   ├───content-disposition
│   ├───content-type
│   ├───cookie
│   ├───cookie-signature
│   ├───core-js
│   │   ├───actual
│   │   │   ├───array
│   │   │   │   └───virtual
│   │   │   ├───array-buffer
│   │   │   ├───async-disposable-stack
│   │   │   ├───async-iterator
│   │   │   ├───data-view
│   │   │   ├───date
│   │   │   ├───disposable-stack
│   │   │   ├───dom-collections
│   │   │   ├───dom-exception
│   │   │   ├───error
│   │   │   ├───function
│   │   │   │   └───virtual
│   │   │   ├───instance
│   │   │   ├───iterator
│   │   │   ├───json
│   │   │   ├───map
│   │   │   ├───math
│   │   │   ├───number
│   │   │   │   └───virtual
│   │   │   ├───object
│   │   │   ├───promise
│   │   │   ├───reflect
│   │   │   ├───regexp
│   │   │   ├───set
│   │   │   ├───string
│   │   │   │   └───virtual
│   │   │   ├───symbol
│   │   │   ├───typed-array
│   │   │   ├───url
│   │   │   ├───url-search-params
│   │   │   ├───weak-map
│   │   │   └───weak-set
│   │   ├───es
│   │   │   ├───array
│   │   │   │   └───virtual
│   │   │   ├───array-buffer
│   │   │   ├───data-view
│   │   │   ├───date
│   │   │   ├───error
│   │   │   ├───function
│   │   │   │   └───virtual
│   │   │   ├───instance
│   │   │   ├───json
│   │   │   ├───map
│   │   │   ├───math
│   │   │   ├───number
│   │   │   │   └───virtual
│   │   │   ├───object
│   │   │   ├───promise
│   │   │   ├───reflect
│   │   │   ├───regexp
│   │   │   ├───set
│   │   │   ├───string
│   │   │   │   └───virtual
│   │   │   ├───symbol
│   │   │   ├───typed-array
│   │   │   ├───weak-map
│   │   │   └───weak-set
│   │   ├───features
│   │   │   ├───array
│   │   │   │   └───virtual
│   │   │   ├───array-buffer
│   │   │   ├───async-disposable-stack
│   │   │   ├───async-iterator
│   │   │   ├───bigint
│   │   │   ├───data-view
│   │   │   ├───date
│   │   │   ├───disposable-stack
│   │   │   ├───dom-collections
│   │   │   ├───dom-exception
│   │   │   ├───error
│   │   │   ├───function
│   │   │   │   └───virtual
│   │   │   ├───instance
│   │   │   ├───iterator
│   │   │   ├───json
│   │   │   ├───map
│   │   │   ├───math
│   │   │   ├───number
│   │   │   │   └───virtual
│   │   │   ├───object
│   │   │   ├───observable
│   │   │   ├───promise
│   │   │   ├───reflect
│   │   │   ├───regexp
│   │   │   ├───set
│   │   │   ├───string
│   │   │   │   └───virtual
│   │   │   ├───symbol
│   │   │   ├───typed-array
│   │   │   ├───url
│   │   │   ├───url-search-params
│   │   │   ├───weak-map
│   │   │   └───weak-set
│   │   ├───full
│   │   │   ├───array
│   │   │   │   └───virtual
│   │   │   ├───array-buffer
│   │   │   ├───async-disposable-stack
│   │   │   ├───async-iterator
│   │   │   ├───bigint
│   │   │   ├───data-view
│   │   │   ├───date
│   │   │   ├───disposable-stack
│   │   │   ├───dom-collections
│   │   │   ├───dom-exception
│   │   │   ├───error
│   │   │   ├───function
│   │   │   │   └───virtual
│   │   │   ├───instance
│   │   │   ├───iterator
│   │   │   ├───json
│   │   │   ├───map
│   │   │   ├───math
│   │   │   ├───number
│   │   │   │   └───virtual
│   │   │   ├───object
│   │   │   ├───observable
│   │   │   ├───promise
│   │   │   ├───reflect
│   │   │   ├───regexp
│   │   │   ├───set
│   │   │   ├───string
│   │   │   │   └───virtual
│   │   │   ├───symbol
│   │   │   ├───typed-array
│   │   │   ├───url
│   │   │   ├───url-search-params
│   │   │   ├───weak-map
│   │   │   └───weak-set
│   │   ├───internals
│   │   ├───modules
│   │   ├───proposals
│   │   ├───stable
│   │   │   ├───array
│   │   │   │   └───virtual
│   │   │   ├───array-buffer
│   │   │   ├───data-view
│   │   │   ├───date
│   │   │   ├───dom-collections
│   │   │   ├───dom-exception
│   │   │   ├───error
│   │   │   ├───function
│   │   │   │   └───virtual
│   │   │   ├───instance
│   │   │   ├───json
│   │   │   ├───map
│   │   │   ├───math
│   │   │   ├───number
│   │   │   │   └───virtual
│   │   │   ├───object
│   │   │   ├───promise
│   │   │   ├───reflect
│   │   │   ├───regexp
│   │   │   ├───set
│   │   │   ├───string
│   │   │   │   └───virtual
│   │   │   ├───symbol
│   │   │   ├───typed-array
│   │   │   ├───url
│   │   │   ├───url-search-params
│   │   │   ├───weak-map
│   │   │   └───weak-set
│   │   ├───stage
│   │   └───web
│   ├───core-util-is
│   │   └───lib
│   ├───debug
│   │   └───src
│   ├───decamelize
│   ├───decamelize-keys
│   │   └───node_modules
│   │       └───map-obj
│   ├───decompress-response
│   │   └───node_modules
│   │       └───mimic-response
│   ├───defer-to-connect
│   │   └───dist
│   │       └───source
│   ├───delayed-stream
│   │   └───lib
│   ├───depd
│   │   └───lib
│   │       └───browser
│   ├───destroy
│   ├───dotenv
│   │   └───lib
│   ├───ee-first
│   ├───ejs
│   │   ├───bin
│   │   └───lib
│   ├───ejs-mate
│   │   └───lib
│   ├───encodeurl
│   ├───end-of-stream
│   ├───error-ex
│   ├───escape-html
│   ├───escape-string-regexp
│   ├───etag
│   ├───eventemitter3
│   │   └───umd
│   ├───express
│   │   └───lib
│   │       ├───middleware
│   │       └───router
│   ├───express-session
│   │   ├───node_modules
│   │   │   └───cookie
│   │   └───session
│   ├───filelist
│   │   └───node_modules
│   │       ├───brace-expansion
│   │       │   └───.github
│   │       └───minimatch
│   │           └───lib
│   ├───finalhandler
│   ├───find-up
│   ├───form-data
│   │   └───lib
│   ├───forwarded
│   ├───fresh
│   ├───function-bind
│   │   └───test
│   ├───generaterr
│   ├───get-intrinsic
│   │   ├───.github
│   │   └───test
│   ├───get-stream
│   ├───got
│   │   └───dist
│   │       └───source
│   │           ├───as-promise
│   │           ├───core
│   │           │   └───utils
│   │           └───utils
│   ├───hard-rejection
│   ├───has
│   │   ├───src
│   │   └───test
│   ├───has-flag
│   ├───has-proto
│   │   ├───.github
│   │   └───test
│   ├───has-symbols
│   │   ├───.github
│   │   └───test
│   │       └───shams
│   ├───hosted-git-info
│   ├───http-cache-semantics
│   ├───http-errors
│   ├───http2-wrapper
│   │   └───source
│   │       └───utils
│   ├───iconv-lite
│   │   ├───encodings
│   │   │   └───tables
│   │   └───lib
│   ├───indent-string
│   ├───inherits
│   ├───ip
│   │   └───lib
│   ├───ipaddr.js
│   │   └───lib
│   ├───is-arrayish
│   ├───is-core-module
│   │   └───test
│   ├───is-plain-obj
│   ├───isarray
│   ├───jake
│   │   ├───bin
│   │   ├───lib
│   │   │   ├───task
│   │   │   └───utils
│   │   └───test
│   │       ├───integration
│   │       │   └───jakelib
│   │       └───unit
│   ├───joi
│   │   ├───dist
│   │   └───lib
│   │       └───types
│   ├───js-tokens
│   ├───json-buffer
│   │   └───test
│   ├───json-parse-even-better-errors
│   ├───kareem
│   ├───keyv
│   │   └───src
│   ├───kind-of
│   ├───lines-and-columns
│   │   └───build
│   ├───locate-path
│   ├───lodash
│   │   └───fp
│   ├───lowercase-keys
│   ├───map-obj
│   ├───media-typer
│   ├───memory-pager
│   ├───meow
│   ├───merge-descriptors
│   ├───method-override
│   │   └───node_modules
│   │       └───debug
│   │           └───src
│   ├───methods
│   ├───mime
│   │   └───src
│   ├───mime-db
│   ├───mime-types
│   ├───mimic-response
│   ├───min-indent
│   ├───minimatch
│   ├───minimist
│   │   ├───.github
│   │   ├───example
│   │   └───test
│   ├───minimist-options
│   ├───mkdirp
│   │   └───bin
│   ├───mongodb
│   │   ├───etc
│   │   ├───lib
│   │   │   ├───bulk
│   │   │   ├───cmap
│   │   │   │   ├───auth
│   │   │   │   │   └───mongodb_oidc
│   │   │   │   ├───handshake
│   │   │   │   └───wire_protocol
│   │   │   ├───cursor
│   │   │   ├───gridfs
│   │   │   ├───operations
│   │   │   │   └───search_indexes
│   │   │   └───sdam
│   │   └───src
│   │       ├───bulk
│   │       ├───cmap
│   │       │   ├───auth
│   │       │   │   └───mongodb_oidc
│   │       │   ├───handshake
│   │       │   └───wire_protocol
│   │       ├───cursor
│   │       ├───gridfs
│   │       ├───operations
│   │       │   └───search_indexes
│   │       └───sdam
│   ├───mongodb-connection-string-url
│   │   └───lib
│   ├───mongoose
│   │   ├───dist
│   │   ├───lib
│   │   │   ├───cast
│   │   │   ├───cursor
│   │   │   ├───drivers
│   │   │   │   ├───browser
│   │   │   │   └───node-mongodb-native
│   │   │   ├───error
│   │   │   ├───helpers
│   │   │   │   ├───aggregate
│   │   │   │   ├───cursor
│   │   │   │   ├───discriminator
│   │   │   │   ├───document
│   │   │   │   ├───error
│   │   │   │   ├───indexes
│   │   │   │   ├───model
│   │   │   │   ├───path
│   │   │   │   ├───populate
│   │   │   │   ├───projection
│   │   │   │   ├───query
│   │   │   │   ├───schema
│   │   │   │   ├───schematype
│   │   │   │   ├───timestamps
│   │   │   │   ├───topology
│   │   │   │   └───update
│   │   │   ├───options
│   │   │   ├───plugins
│   │   │   ├───schema
│   │   │   │   └───operators
│   │   │   └───types
│   │   │       ├───array
│   │   │       │   └───methods
│   │   │       └───DocumentArray
│   │   │           └───methods
│   │   ├───node_modules
│   │   │   └───ms
│   │   ├───scripts
│   │   ├───tools
│   │   └───types
│   ├───mpath
│   │   ├───lib
│   │   └───test
│   ├───mquery
│   │   ├───.github
│   │   ├───lib
│   │   │   └───collection
│   │   └───node_modules
│   │       ├───debug
│   │       │   └───src
│   │       └───ms
│   ├───ms
│   ├───multer
│   │   ├───lib
│   │   └───storage
│   ├───multer-storage-cloudinary
│   │   ├───.vscode
│   │   ├───examples
│   │   │   └───simple
│   │   └───lib
│   ├───negotiator
│   │   └───lib
│   ├───normalize-package-data
│   │   └───lib
│   ├───normalize-url
│   ├───object-assign
│   ├───object-inspect
│   │   ├───.github
│   │   ├───example
│   │   └───test
│   │       └───browser
│   ├───on-finished
│   ├───on-headers
│   ├───once
│   ├───p-cancelable
│   ├───p-limit
│   ├───p-locate
│   ├───p-try
│   ├───parse-json
│   ├───parseurl
│   ├───passport
│   │   ├───lib
│   │   │   ├───errors
│   │   │   ├───framework
│   │   │   ├───http
│   │   │   ├───middleware
│   │   │   └───strategies
│   │   └───sponsors
│   ├───passport-local
│   │   └───lib
│   ├───passport-local-mongoose
│   │   └───lib
│   ├───passport-strategy
│   │   └───lib
│   ├───path-exists
│   ├───path-parse
│   ├───path-to-regexp
│   ├───pause
│   ├───process-nextick-args
│   ├───proxy-addr
│   ├───pump
│   ├───punycode
│   ├───q
│   ├───qs
│   │   ├───.github
│   │   ├───dist
│   │   ├───lib
│   │   └───test
│   ├───quick-lru
│   ├───random-bytes
│   ├───range-parser
│   ├───raw-body
│   ├───read-pkg
│   │   └───node_modules
│   │       └───type-fest
│   │           └───source
│   ├───read-pkg-up
│   │   └───node_modules
│   │       └───type-fest
│   │           └───source
│   ├───readable-stream
│   │   ├───doc
│   │   │   └───wg-meetings
│   │   ├───lib
│   │   │   └───internal
│   │   │       └───streams
│   │   └───node_modules
│   │       └───safe-buffer
│   ├───redent
│   ├───resolve
│   │   ├───.github
│   │   ├───bin
│   │   ├───example
│   │   ├───lib
│   │   └───test
│   │       ├───dotdot
│   │       │   └───abc
│   │       ├───module_dir
│   │       │   ├───xmodules
│   │       │   │   └───aaa
│   │       │   ├───ymodules
│   │       │   │   └───aaa
│   │       │   └───zmodules
│   │       │       └───bbb
│   │       ├───node_path
│   │       │   ├───x
│   │       │   │   ├───aaa
│   │       │   │   └───ccc
│   │       │   └───y
│   │       │       ├───bbb
│   │       │       └───ccc
│   │       ├───pathfilter
│   │       │   └───deep_ref
│   │       ├───precedence
│   │       │   ├───aaa
│   │       │   └───bbb
│   │       ├───resolver
│   │       │   ├───baz
│   │       │   ├───browser_field
│   │       │   ├───dot_main
│   │       │   ├───dot_slash_main
│   │       │   ├───false_main
│   │       │   ├───incorrect_main
│   │       │   ├───invalid_main
│   │       │   ├───malformed_package_json
│   │       │   ├───multirepo
│   │       │   │   └───packages
│   │       │   │       ├───package-a
│   │       │   │       └───package-b
│   │       │   ├───nested_symlinks
│   │       │   │   └───mylib
│   │       │   ├───other_path
│   │       │   │   └───lib
│   │       │   ├───quux
│   │       │   │   └───foo
│   │       │   ├───same_names
│   │       │   │   └───foo
│   │       │   ├───symlinked
│   │       │   │   ├───package
│   │       │   │   └───_
│   │       │   │       ├───node_modules
│   │       │   │       └───symlink_target
│   │       │   └───without_basedir
│   │       └───shadowed_core
│   │           └───node_modules
│   │               └───util
│   ├───resolve-alpn
│   ├───responselike
│   │   └───src
│   ├───safe-buffer
│   ├───safer-buffer
│   ├───saslprep
│   │   ├───lib
│   │   └───test
│   ├───scmp
│   │   ├───benchmark
│   │   ├───lib
│   │   └───test
│   ├───semver
│   │   └───bin
│   ├───send
│   │   └───node_modules
│   │       └───ms
│   ├───serve-static
│   ├───setprototypeof
│   │   └───test
│   ├───side-channel
│   │   ├───.github
│   │   └───test
│   ├───sift
│   │   ├───es
│   │   ├───es5m
│   │   ├───lib
│   │   └───src
│   ├───smart-buffer
│   │   ├───build
│   │   ├───docs
│   │   └───typings
│   ├───socks
│   │   ├───build
│   │   │   ├───client
│   │   │   └───common
│   │   ├───docs
│   │   │   └───examples
│   │   │       ├───javascript
│   │   │       └───typescript
│   │   └───typings
│   │       ├───client
│   │       └───common
│   ├───sparse-bitfield
│   ├───spdx-correct
│   ├───spdx-exceptions
│   ├───spdx-expression-parse
│   ├───spdx-license-ids
│   ├───statuses
│   ├───streamsearch
│   │   ├───.github
│   │   │   └───workflows
│   │   ├───lib
│   │   └───test
│   ├───string_decoder
│   │   ├───lib
│   │   └───node_modules
│   │       └───safe-buffer
│   ├───strip-indent
│   ├───supports-color
│   ├───supports-preserve-symlinks-flag
│   │   ├───.github
│   │   └───test
│   ├───toidentifier
│   ├───tr46
│   │   └───lib
│   ├───trim-newlines
│   ├───type-fest
│   │   └───source
│   ├───type-is
│   ├───typedarray
│   │   ├───example
│   │   └───test
│   │       └───server
│   ├───uid-safe
│   ├───unpipe
│   ├───util-deprecate
│   ├───utils-merge
│   ├───validate-npm-package-license
│   ├───vary
│   ├───webidl-conversions
│   │   └───lib
│   ├───whatwg-url
│   │   └───lib
│   ├───wrappy
│   ├───xtend
│   └───yargs-parser
│       └───lib
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

<!----------------------------------{ Images }--------------------------------->

<!-- [landing]: https://graph.org/file/17cea01409d517ec8614b.png
[homepage]: https://graph.org/file/5496aa1234f629edb3d63.png
[hotel]: https://graph.org/file/365f262d8114e8cd2432a.png
[reward]: https://graph.org/file/8fd4d2cac55a7667a2759.png
[login]: https://graph.org/file/55aa6c045848ddb1c19b9.png
[register]: https://graph.org/file/b13e90c173d3db9a8e219.png
[edit]: https://graph.org/file/bba7b693d62f775c91ce2.png
[new]: https://graph.org/file/5d617077c9dfdbd6e268a.png -->