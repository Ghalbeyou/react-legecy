# React Legacy

React Legacy is a lightweight React framework designed for building single-page applications (SPAs) with client-side routing using hash-based URLs. It provides a simple and intuitive way to create interactive web applications with a focus on legacy browser support.

## Features

- Client-side routing with hash-based URLs
- Dynamic content loading based on URL hash
- Server-side routing for API endpoints
- Static file serving using Express
- Error handling and 404 page support

## Installation

To use React Legacy, you need to have Node.js and npm (Node Package Manager) installed on your machine.
> **Tip:** Please don't install the package only on the project folder, first remove the project folder and outside of the project folder, run the commands below.

1. Install the npm package:

   ```shell
   npm i react-legecy -g
   ```
2. Run npx command:
   ```shell
   npx create-react-legecy
   ```
3. Give it all the inputs. then:
   ```shell
   cd appname
   ```

⚠️ **Attention**: Please replace appname with your app name in the start.


## Usage
So, lets see how to use this bad boy!

⚠️ **Attention**:  Usage/use here means how to start server.

1. Open the folder of **your app** and run:
```shell
node index.js
```
2. Wait until the server runs
3. Open localhost:3000 in your browser


### How to change the port?
> **Tip**: Please change the port for production.

1. Open **`index.js`** and edit the part `const port = 3000;`
where it said 3000, to your custom port. 
> **Tip**: Recommended port is 80 for production. 443 is good too.

## Structure
The project structure of React Legacy is as follows:

- `app/`: Contains the static files for your application, including HTML templates and CSS styles.
-  `app/index.html`: The main HTML template file.
- `pages/`: Directory to store individual HTML pages for different routes.
- `index.js`: The server-side code responsible for serving static files and handling API routes.
- `api/`: Directroy to store api callback functions.
- `package.json`: Configuration file for npm dependencies and project metadata.

## Contributing
Contributions to React Legacy are **welcome**! If you find a bug, have an enhancement idea, or want to contribute new features, please open an issue or submit a pull request on the GitHub repository.

## License
React Legacy is released under the MIT License. See the [LICENSE](LICENSE) file for more details.

