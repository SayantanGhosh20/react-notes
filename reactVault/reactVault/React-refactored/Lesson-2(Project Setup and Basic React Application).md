### Git setup (for versioning and data management)

1. [ ] Make the project directory a git repository
2. [ ] To make the directory a git repo, run command : 
	1. [ ] `git init`
3. [ ] Setup git credentials : 
	1. [ ] Use name : `git config --global user.name <userName>`
	2. [ ] User email : `git config --global user.email <email@example.com>`
4. [ ] Add origin (`github` repository) :
	1. [ ] To add origin run command, `git remote add origin <ssh-link-of-git-repo>`
	2. [ ] Example : `git@github.com:user-name/repo-name.git`
5. [ ] Verify origin : 
	1. [ ] `git remote -v`
6. [ ] Generate a SSH key in console : 
	1. [ ] `ssh-keygen -t ed25519 -C "your_email@exampl.com"`
7. [ ] Start the SSH agent : 
	1. [ ] `eval "$(ssh-agent -s)"`
8. [ ] Add the private key : 
	1. [ ] `ssh-add ~/.ssh/id_ed25519`
9. [ ] Print the public key : 
	1. [ ] `cat ~/.ssh/id_ed25519.pub`
10. [ ] Copy the SSH public key and paste it on `Github`
	1. [ ] Navigate to : `Github → Settings → SSH and GPG Keys → New SSH Key`
	2. [ ] Paste the copied key
	3. [ ] Verify the email
11. [ ] Confirm the connection and authentication in local : 
	1. [ ] `ssh -T git@github.com`
	2. [ ] Expected output : `Hi <your-username>! You've successfully authenticated...`

### Git usage

1. [ ] Check the files being tracked, untracked, created, modified, deleted, renamed etc.
2. [ ] Stage all the files : `git add .`
3. [ ] Commit the file from the staging area : `git commit -m "<commit-message>"`
4. [ ] Verify commit : `git log`
5. [ ] To push these local commits to the `Github` repo, run command : 
	1. [ ] `git push origin main`
	2. [ ] This will push the local commit to the `main` branch of the origin repository.

### `.gitignore` file setup

1. [ ] When we push our work to git (local or `Github`), we should only push essential items. 
2. [ ] Anything that we can regenerated should not be pushed to git / `Github`.
3. [ ] For a react project, an example of this is the `node_modules` directory. We can regenerate this from our `package.json` and `package-lock.json` files and thus we **SHOULD NOT*** push it. The `node_modules` directory also occupies a large amount of storage and has a large number of items in it, which can cause our repo to bloat after every new commit over time.
4. [ ] To define what we wish for git to ignore when tracking files, we create a file called `.gitignore`. In this file we define the items that we want git to ignore.
5. [ ] For `node_modules`, we will put `/node_modules` inside the `.gitignore` file (as the project progresses more items might get added to it.)
6. [ ] Not pushing the `node_modules` directory may seem counter intuitive since the contents of `node_modules` support our project, till we realize that we are still pushing `package.json` and `package-lock.json` files to the git repo and with those files we can recreate our `node_modules`.
7. [ ] To test it out : 
	1. [ ] Delete the `node_modules` directory
	2. [ ] Run command : `npm install`
	3. [ ] Now, the `node_modules` will be recreated

### Create React App (CRA) : Quick setup

1. [ ] It is an official tool that sets up a complete React project for us, without us needing to manually configure and build the project environment ourselves.
2. [ ] Think of CRA as a **project generator + preconfigured build system**.
3. [ ] To use this, run command : 
	1. [ ] Legacy method (deprecated) : `npx create-react-app my-app`
	2. [ ] Current method : `npm create vite@latest my-app -- --template react`
4. [ ] Since the modern method uses Vite, to run the project : 
	1. [ ] `cd my-app/`
	2. [ ] `npm install`
	3. [ ] `npm run dev`
	4. [ ] This will start our application at : `http://localhost:5173`
5. [ ] If we use the deprecated method then use : 
	1. [ ] `cd my-app/`
	2. [ ] `npm start`
	3. [ ] This will start our application at : `http://localhost:3000`
6. [ ] With one command, it creates a React app that already includes:
	1. [ ] React + ReactDOM setup
	2. [ ] Development server
	3. [ ] Build system (using `Webpack` under the hood)
	4. [ ] Babel for JavaScript transpilation
	5. [ ] Testing setup
	6. [ ] CSS handling
7. [ ] Core functionalities : 
	1. [ ] Zero configuration setup : 
		1. [ ] Everything is pre-configured and hidden
		2. [ ] We do not need to configure, Webpack, Babel, Dev server.
	2. [ ] Development server with hot-reload capability : 
		1. [ ] CRA starts a local server that runs **on localhost**
		2. [ ] Supports fast refresh using modern **Hot Module Reloading (HMR)**
		3. [ ] Automatically reloads page on code change (hot module reloading)
	3. [ ] Pre-configured build pipeline : 
		1. [ ] CRA internally uses, Webpack (for bundling), Babel (for transpiling modern JS), ESLint (for linting)
		2. [ ] We **do not see** this config unless we "eject"
	4. [ ] Production build optimization : 
		1. [ ] When we run : `npm run build`
		2. [ ] CRA produces : Minified JavaScript, Optimized CSS, Hashed filenames for caching, compressed assets
	5. [ ] Project structure generation : 
		1. [ ] Typical structure : 
		2. [ ]  ![[CRA-Project-Structure.png]]
		3. [ ] `public/` → directory contains static assets
		4. [ ] `src/` → root directory for our applications react code
	6. [ ] Testing setup includes : 
		1. [ ] CRA includes : `Jest`, `React Testing Library`
	7. [ ] Environment configuration (supports `.env` files) :
		1. [ ] `REACT_APP_*` variables
		2. [ ] Different configs for dev/prod
	8. [ ] "Eject" option (advanced) : 
		1. [ ] For full control, run command `npm run eject`
		2. [ ] This removes the CRA wrapper exposes all hidden configs for us to edit.(Webpack, Babel etc.)
		3. [ ] This action is **irreversible**
8. [ ] Key idea : 
	1. [ ] Create React App (CRA) = React + Build tools + dev server 
	2. [ ] Everything is pre-wired
	3. [ ]  Instead of spending time configuring webpack, we can start coding immediately.
9. [ ] Reality : 
	1. [ ] CRA is **NOT recommended** for new projects, since :
		1. [ ] Builds are slower compared to modern tools
		2. [ ] Heavy webpack-based setup
		3. [ ] Limited flexibility unless **ejected**
	2. [ ] Modern alternative : 
		1. [ ] Vite (fast, lightweight)
		2. [ ] Next.js (full-stack, SSR support)
	3. [ ] When it can be used : 
		1. [ ] Good for learning react
		2. [ ] Small to medium projects
		3. [ ] Teams that want a stable and predictable setup.
	4. [ ] When to avoid CRA : 
		1. [ ] Avoid CRA for large scale production applications
		2. [ ] Avoid CRA for performance-critical projects
		3. [ ] Avoid CRA when we need Server-Side Rendering (SSR) or advanced routing

### Package Manager : NPM

1. [ ] It is the standard package manager for the JavaScript programming language.
2. [ ] It is the default for the `Node.js` runtime
3. [ ] It provides us with various packages that we can use to develop and deploy our project.
4. [ ] These packages are also known as **dependencies**.
5. [ ] To use npm in our project we have to initialize npm in it with the command : `npm init`
6. [ ] To initialize set : 
	1. [ ] Set the package name (project name)
	2. [ ] Set the version
	3. [ ] Set the description
	4. [ ] Set the entry point (app.js)
	5. [ ] Set the test command : jest
	6. [ ] Set the git repository
	7. [ ] Set the keywords
	8. [ ] Set the author
7. [ ] This creates the artifact of : `package.json`
8. [ ] When we run `npm install` for the first time, the following artifacts are created :
	1. [ ] `node_modules`
	2. [ ] `package-lock.json`
9. [ ] `node_modules` : It is a directory that contains all the installed packages along with their transitive dependencies.
10. [ ] Dependency Types :
	1. [ ] Dev dependency : It is generally required in the development environment.
	2. [ ] Normal dependency : It is required in production.

#### `package.json`

1. [ ] This is our **project's declaration file** —it defines what our app _requires_.
2. [ ] It contains :
	1. [ ] Project metadata (project name, project version)
	2. [ ] Scripts :
		1. [ ] `npm start` OR `npm run start` : 
			1. [ ] Runs the command defined under "start"
			2. [ ] Example value (Parcel) : `parcel index.html`
			3. [ ] Example value (Create React App) : `react-scripts start`
		2. [ ] `npm run build` : 
			1. [ ] Runs the command defined under "build"
			2. [ ] Example value (Parcel) : `parcel build index.html`
			3. [ ] Example value (Create React App) : `react-scripts build`
3. [ ] Semantic Versioning (`SemVer`) : 
	1. [ ] Versioning pattern : 
		1. [ ] `Major.Minor.Patch`
		2. [ ] `1.2.3` → Major (1), Minor (2), Patch (3)
		3. [ ] Major : breaking changes
		4. [ ] Minor : new features, backward compatible
		5. [ ] Patch : bug fixes
	2. [ ] `~` : This is put in front of a version number to instruct that only compatible patch versions (`1.1.x`)  should be automatically installed.
	3. [ ] `^` : This is put in front of a version number to instruct that compatible newer minor (`1.x.x`) and patch versions (`1.1.x`) should be automatically installed.
	4. [ ] The `package.json` file can be edited by us
	5. [ ] The `package.json` file does not include sub-dependencies
	6. [ ] `package.json` file **SHOULD BE** pushed to git.

#### `package-lock.json`

1. [ ] This file is automatically generated by npm when we install a package using npm
2. [ ] It records (locks) the **exact dependency** tree that was installed 
3. [ ] It contains :
	1. [ ] **Exact versions** of packages (no ranges)
	2. [ ] Sub-dependencies (nested dependencies)
	3. [ ] Integrity hashes
	4. [ ] Resolved URLs
4. [ ] It is stricter than the specification in `package.json`
5. [ ] It is autogenerated by machine and describes the **actual installed state**
6. [ ] We should not edit the `package-lock.json` file
7. [ ] `package-lock.json` **SHOULD BE** pushed to git.
#### Why both are needed ?

1. [ ] When we run `npm install express`
	1. [ ] `package.json` → `"express": "^4.18.2"`
	2. [ ] `package-lock.json` → locks exact version + all nested deps
2. [ ] Without `package-lock.json` :
	1. [ ] Different developers may get different versions
	2. [ ] This can result in bugs due to version mismatch
3. [ ] **With** `package-lock.json`
	1. [ ] Everyone gets the same dependency version and same dependency tree
	2. [ ] This ensures **reproducible builds**

#### How npm uses these files : 

1. [ ] For command : `npm install`
	1. [ ] Reads `package.json`
	2. [ ] Uses `package-lock.json` if present
	3. [ ] Installs exact versions from lock file
2. [ ] For command `npm ci` (CI/CD pipelines)
	1. [ ] Ignores `package.json` flexibility
	2. [ ] Strictly installs from `package-lock.json`
	3. [ ] Faster and consistent

#### Jest : 

1. [ ] In our npm environment, we have defined `jest` as the value of the test parameter
2. [ ] **Jest** is a **JavaScript testing framework** used to write and run automated tests—it is especially popular in React and Node.js projects.
3. [ ] Jest helps us to : 
	1. [ ] Write test cases
	2. [ ] Run the test cases
	3. [ ] Compare expected vs actual results
	4. [ ] Report failures clearly

#### Note : 

1. [ ] `npm` is for installing packages, `npx` is for executing packages.
2. [ ] `package.json` is a configuration file for NPM
3. [ ] Manually editing `package-lock.json` can corrupt dependency tree. 
4. [ ] Deleting `package-lock.json` can cause inconsistent installs and break reproducibility
5. [ ] Create React App uses Webpack and Babel behind the scenes

### Creating a React App from Scratch (Using `npm` package)

1. [ ] CDN links are **not the preferred way** of brining react into our application as it is a costly operation and is network dependent
2. [ ] To install `react` and `react-dom` using `npm`, run commands : 
	1. [ ] `npm install react`
	2. [ ] `npm install react-dom`
3. [ ] Remove the react CDN links (script tags)
4. [ ] Modify the script tag leading to `app.js` in the `index.html` by adding `type=module`
5. [ ] In the `app.js` file, add the following lines at the top :
	1. [ ] `import React from "react";`
	2. [ ] `import ReactDOM from "react-dom/client"`

**Note :** If we do not modify the script tag by adding `type=module` then we will get the error, `browser scripts cannot have imports or exports.`

### Code

#### Target structure

```
<div id="parent">
	<div id="child1">
		<h1 id="firstHeading">Nested h1 tag</h1>
		<h1 id="secondHeading">Nested h1 tag</h1>
	</div>
	<div id="child2">
		<h1 id="thirdHeading">Nested h1 tag</h1>
		<h1 id="fourthHeading">Nested h1 tag</h1>
	</div>
</div>
```


#### `index.html`

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
</head>

<body>

    <div id="root"></div>

    <script type="module" src="./app.js"></script>

</body>
</html>
```

#### style.css

```
#heading{
    color: red;
}
```

#### `app.js`

```
import React from "react";
import ReactDOM from "react-dom/client"

const parent = React.createElement(
    "div",
    {id : "parent"},
    [
        React.createElement(
            "div",
            {id : "child1"},
            [
                React.createElement(
                "h1",
                {id : "firstHeading"},
                "First Nested h1 tag"
                ),
                React.createElement(
                    "h1",
                    {id : "secondHeading"},
                    "Second Nested h1 tag"
                )
            ]
        ),

        React.createElement(
            "div",
            {id : "child2"},
            [
                React.createElement(
	                "h1",
	                {id : "thirdHeading"},
	                "Third Nested h1 tag"
                ),
                React.createElement(
                    "h1",
                    {id : "fourthHeading"},
                    "Fourth Nested h1 tag"
                )
            ]
        )
    ]  
)

const root = ReactDOM.createRoot(document.getElementById("root"));


// render converts react elements (objects) to the required tags and attributes

root.render(parent);
```


### JavaScript Bundler (Parcel)

1. [ ] A JavaScript (JS) bundler is a development tool that organizes, optimizes and combines multiple JavaScript files and their dependencies into a few static files for the browser. It is essential for modern web applications that rely on hundreds of interconnected modules and third-party libraries.
2. [ ] There are several bundlers that we can choose from, e.g. `Vite`, `Webpack`, `Parcel`, `esbuild`, `bun`.
3. [ ] Here we are opting the `Parcel` bundler.
4. [ ] Core functionalities of parcel : 
	1. [ ] Zero functionalities : 
		1. [ ] Parcel works out of the box with no configuration file needed.
		2. [ ] Automatically detects entry points (or can be provided with one)
		3. [ ] No need for manual setup like in webpack
	2. [ ] Automatic Dependency Resolution : 
		1. [ ] Parcel builds a dependency graph by analyzing our code.
		2. [ ] Supports, HTML , CSS (`@import`, `url()`) and JS (`import`, `require`) assets references, images, fonts etc.
		3. [ ] It recursively tracks dependencies and bundles everything together.
	3. [ ] Built-in Asset transformation : 
		1. [ ] Parcel automatically transforms files without extra plugins
			1. [ ] ES6+ → ES5 (via Babel internally)
			2. [ ] TypeScript → JavaScript
			3. [ ] SCSS/SASS → CSS
			4. [ ] JSX → JavaScript (React)
		2. [ ] No manual loader configuration needed.
	4. [ ] Fast bundling with parallel processing : 
		1. [ ] Parcel uses multi-core processing :
			1. [ ] Parallel compilation
			2. [ ] Efficient caching system
			3. [ ] Incremental builds (only rebuilds changed files)
		2. [ ] This makes it significantly faster than older bundlers in many cases.
	5. [ ] Hot Module Replacement (HMR)
		1. [ ] Live updates during development
			1. [ ] Updates only changed modules
			2. [ ] Preserves application state (in many cases)
			3. [ ] No full page reload required
	6. [ ] Code Splitting : 
		1. [ ] Automatically splits bundles for optimizations :
			1. [ ] Lazy loading with dynamic (import)
			2. [ ] Separate bundles for shared dependencies 
			3. [ ] Reduces initial load time
	7. [ ] Tree Shaking :
		1. [ ] Removes unused code 
			1. [ ] Eliminates dead code
			2. [ ] Reduces bundle size
			3. [ ] Works well with ES modules
	8. [ ] Production Optimization :
		1. [ ] When we build for production (`parcel build`)
			1. [ ] Minification (JS, CSS, HTML)
			2. [ ] Scope hoisting (faster execution)
			3. [ ] Image optimization
			4. [ ] Content hashing for cache busting
	9. [ ] Built-in Development Server
		1. [ ] Parcel includes a dev server : 
			1. [ ] Runs on localhost automatically
			2. [ ] Supports HMR
			3. [ ] Easy debugging
	10. [ ] Plugin system (Extensible Architecture)
		1. [ ] Event though it is zero-config, Parcel is extensible :
			1. [ ] Custom transformers
			2. [ ] Bundlers
			3. [ ] Optimizers
	11. [ ] Environment Awareness :
		1. [ ] Parcel can adapt to environments :
			1. [ ] Development vs production builds
			2. [ ] Different optimizations based on mode
			3. [ ] Supports environment variables
	12. [ ] Support for Multiple Asset Types 
		1. [ ] Parcel trats everything as a module :
			1. [ ] HTML
			2. [ ] CSS
			3. [ ] JavaScript
			4. [ ] Images (`PNG`, `JPG`, `SVG`)
			5. [ ] Fonts
			6. [ ] WebAssembly
	13. [ ] Source Maps :
		1. [ ] Helps debugging :
			1. [ ] Maps bundled code back to original source
			2. [ ] Works automatically in development
5. [ ] Mental Model : 
	1. [ ] Input Files → Dependency Graph → Transform → Bundle → Optimize → Output
6. [ ] Advantages : 
	1. [ ] Rapid prototyping environments
	2. [ ] Projects where we want minimal config
	3. [ ] Beginners or teams avoiding complex build setups
7. [ ] Drawbacks :
	1. [ ] Highly customized enterprise pipelines
	2. [ ] Very large apps needing fine-grained control (where tools like Webpack still dominate)

### Installing `Parcel` Bundler Package

1. [ ] To install parcel, run command : `npm install -D parcel`
2. [ ] `-D` flag : marks Parcel **as a dev dependency** instead of a normal dependency

### Building our react app using the `Parcel` package

1. [ ] Run command : `npx parcel index.html`
2. [ ] Output : 
	1. [ ] `/dist` : directory contains the build created by parcel
3. [ ] `index.html` is the source file in our current project state
4. [ ] This is for a dev-build (semi-optimized)
5. [ ] This starts a server in our `localhost`

**Note :** 
- In some cases we may get an error related to entry point, to solve which, we will have to remove `main` from the `package.json`
- Parcel does Hot Module Replacement (HMR), i.e. it automatically refreshes the page when there is a change in our files. It does so using File Watching Algorithm (written in C++).
- Using parcel we can also host our application on HTTPS.
- Differential bundling : support on different browsers as well as older browsers.

### Creating a production build using the `parcel` package

1. [ ] Run command : `npx parcel build index.html`
2. [ ] If we get an error then we will have to remove `main` from the `package.json`
3. [ ] `dist` directory contains the dev-build created by parcel
4. [ ] We will have to put `/dist` and `/.parcel-cache` inside our .gitignore directory
5. [ ] Every time we run `npx parcel index.html` or `npx parcel build index.html` these directories will be recreated.

### `browserslist` package : Supporting multiple browsers

1. [ ] For our project to be production grade, we have to configure it to support multiple browsers.
2. [ ] For this we have to use the `browserslist` package
3. [ ] To install it, run command : `npm install browserlist`
4. [ ] This package is already present inside the `node_modules` directory
5. [ ] To use it, we have to edit the `package.json` file. In there, at the bottom, we have to add the browsers we want our project to support.
6. [ ] Example :
```
"browserslist" : [
"last 2 Chrome versions",
"Last 2 Firefox versions"
]
```

**Reference :** `browserslist.dev` 


### Additional Notes : 

1. [ ] Browsers **cannot run JSX directly** : Without a bundler or transpiler, we cannot use JSX unless we use tools like Babel in-browser (not recommended for production).