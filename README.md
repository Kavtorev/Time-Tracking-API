# Time Tracking API 🕒
## User Stories
 
- As a user, I want to be able to start tracking the new, named Task so that tracking of previously started task is stopped, and start time of the new Task is saved.
- As a user, I want to be able to stop tracking task at any moment so that the task finish time is saved.
- As a user, I want to be able to fetch current running task.

## Requirements 
 
- clean code
- test coverage
- optimization
- good documentation
- usage of design patterns
- proper storage mechanism – SQL database
- ORM
- RESTful approach
- TypeScript 

## Chosen Technologies

- ORM - [TypeORM](https://typeorm.io/#/)
- storage mechanism - [PostgreSQL](https://www.postgresql.org/)
- REST framework - [Express.js](http://expressjs.com/)
- test coverage - [Jest](https://jestjs.io/uk/) & [Supertest](https://github.com/visionmedia/supertest#readme)
- PaaS - [Heroku](https://www.heroku.com/about)

## Project structure

```bash
.
├── .gitignore
├── jest.config.js
├── ormconfig.json
├── package-lock.json
├── package.json
├── README.md
├── src
│   ├── api
│   │   └── routes
│   │       └── task.ts
│   ├── app.ts
│   ├── config
│   │   ├── app.config.ts
│   │   └── db.config.ts
│   ├── db.ts
│   ├── entity
│   │   └── Task.ts
│   ├── index.ts 
│   ├── repository
│   │   └── task.repo.ts
│   ├── tests
│   │   └── task.test.ts
│   └── utils.ts
└── tsconfig.json
```

## How to run application
**Clone the project**
    
    git clone https://github.com/Kavtorev/real-time-polls.git

**Install dependecies**

    npm install

**Setup environment variables inside .env file in a root directory and make sure no services are running on port 5000**

    NODE_ENV=development
    NAME=YOUR_USERNAME
    PASSWORD=YOUR_DB_PASSWORD
    HOST=localhost
    DB_NAME=YOUR_DB_NAME

**Execute**

    npm run dev

## How to run tests
In order to run tests, a new database has to be created. Please, take into consideration __TEST__-prefixed parameters located in [db.config.ts](https://github.com/Kavtorev/Time-Tracking-API/blob/main/src/config/db.config.ts#L9) file. Either use them or feel free to adjust your own ones.

**Execute**

    npm run test

## API
| Method | URI | Description| 
| ------ | ------ | ------ | 
| GET | /api/tasks/current  | fetches current running task (returns a negative status code if no task is running) | 
| POST | /api/tasks/current | starts tracking a new task and finishes a previously running one |
| PUT | /api/tasks/current | stops tracking current task (returns a negative status code if no task is running) |

## curl

    GET /api/tasks/current

    curl https://time-tracking-api-coding-task.herokuapp.com/api/tasks/current

    POST /api/tasks/current

    curl -d '{"name": "new_task"}' -H 'Content-Type: application/json' https://time-tracking-api-coding-task.herokuapp.com/api/tasks/current

    PUT /api/tasks/current

    curl -X PUT https://time-tracking-api-coding-task.herokuapp.com/api/tasks/current


## Questions

- Are requests supposed to be sent from the same origin?
- What is a preferable time format for the front-end guy (Dan)?
- Should I consider the customer's timezone or just stick to UTC or anything else?










