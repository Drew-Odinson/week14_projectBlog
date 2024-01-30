# Tech Blog CMS

Welcome to the Tech Blog CMS project! This content management system (CMS) allows developers to publish and share their blog posts, comment on other posts, and manage their content seamlessly. Designed with MVC architecture and built to be deployed on Heroku, it supports features like user authentication, post creation, and comments, even while offline.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [License](#license)


## Features

| | |
| --- | --- |
|- - **User Authentication:** Secure sign up/login functionality with hashed passwords. |
| -- **Blog Post Management:** Create, read, update, and delete blog posts. |
| - - **Comment System:** Leave comments on posts to engage with the community. |
| - - **MVC Paradigm:** Organized following the Model-View-Controller framework.
 |
 | - - - **Sequelize ORM:** Utilize Sequelize for database migrations and seed data.
 || -- **Handlebars.js:** Server-side templating language for rendering HTML.
 |

### Technologies Used

| Technology | Description |
| --- | --- |
| Node.js |
| Express.js |
| MySQL and Sequelize ORM |
| Express-Handlebars |
| express-session and connect-session-sequilize for authentication |
| dotenv for enviroment variable management |
| bcrpt for password hashing |
| CSS3 and Handlebars for styling and layout |


## Installation

Ensure you have Node.js and MySQL installed on your machine before you begin.

```bash

cd tech-blog-cms
npm install

```

DB_NAME='your_database_name'
DB_USER='your_database_username'
DB_PW='your_database_password'
SESSION_SECRET='your_secret_key'

npm start

Visit http://localhost:3000 in your web browser to view the application.


# Contributors

The project is in active development, and contributions are welcome. If you have suggestions or improvements, feel free to fork the repository and submit a pull request.



## License

 [MIT licensed](./LICENSE).