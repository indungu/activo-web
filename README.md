<a href="https://codeclimate.com/repos/5b11612164263d02a60010c7/maintainability"><img src="https://api.codeclimate.com/v1/badges/5cdf56c6e98065a2d063/maintainability" /></a>

# Activo Web
This web application serves as a convenient window for relevant stakeholders to record and monitor Andelan assets across all locations.

<br />
<br />

<img width="1440" alt="Activo-Web-screenshot" src="./src/assets/images/landingpage.png">
<br />

# Table of Contents
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Testing](#testing)
- [FAQ](#faqs)


## Technology Stack
- Typescript
- React
- SCSS
- Redux
- NodeJS
- Webpack
- Jest
- Enzyme
- Nightwatch


## Installation

1. Install [`Node JS`](https://nodejs.org/en/).
2. To clone, run `git clone https://github.com/andela/activo-web.git`.
3. `cd` into the root of the **project directory**.
4. Install [`yarn`](https://yarnpkg.com/en/docs/install#mac-stable).
5. Run `yarn install` on the terminal to install dependecies.
6. Create a `.env` file in the root directory of the application. Example of the content of a `.env` file is shown in the `.env.example`
7. Setup local development server.
  - In your terminal, execute the following command:
    ```bash
      sudo nano /etc/hosts
    ```
    Otherwise, you can open your hosts file in your editor of choice.
  - Add the following line to your `hosts` file:

    ```bash
      127.0.0.1 activo-dev.andela.com
    ```
  - Save changes and quit the editor.
8. To start the application run `yarn start:dev`


## Testing

**End To End tests** - Run `test:e2e` on the terminal while within the **project root directory**. End to End testing is achieved through use of `http-server` and `Nightwatch` packages. `http-server` is used to create a simple web server and `Nightwatch` is used for the browser automation. They will both be installed when you run `yarn install`

**Unit tests** - Run `test:unit` on the terminal while within the **project root directory**. Unit testing is achieved through the use of `jest` package. `jest` is used to test javascript code in React applications.


### Support or Contribution
For any suggestions or contributions please do not hesistate to contact the owners of this repository.

Contributions to this project are welcomed by all, If you need to contribute, follow the steps below
* **Fork** the repository
* Follow [Installation and Setup](#installation) as explained earlier
* Create a branch off `develop` for the feature you wish to add
* Make neccessary changes, commit and raise a pull request against develop, conventions can be found on the [wiki page](https://github.com/andela/activo-web/wiki).
**Note** when making contributions, please endevour to follow the [Airbnb](https://github.com/airbnb/javascript) javascript style guide. Also make sure to follow the [Engineering playbook](https://github.com/andela/engineering-playbook/tree/master/5.%20Developing/Conventions) for conventions. 


## FAQ
See the activo-web [wiki](https://github.com/andela/activo-web/wiki)
