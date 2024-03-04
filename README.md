# CRUD Operations with Express.js, MongoDB, and Node.js

This repository contains a basic implementation of CRUD (Create, Read, Update, Delete) operations using Express.js, MongoDB, and Node.js.__
It Interacts with the "xpsystem" collection, of an let say "players" database then add this in .env file:
```
   PORT = 3000 
   MONGO_URL = "mongodb+srv://___mongodb.net/players?retryWrites=true&w=majority&appName=__"
```

## API Specifications

```http://localhost:3000/api/user/create``` - POST a user details according to the schema__
```http://localhost:3000/api/user/getallusers``` - GET all user details__
```http://localhost:3000/api/user/update/:id``` - UPDATE an ID__
```http://localhost:3000/api/user/delete/:id``` - DELETE and ID__

### One schema example

    {
        "_id": "65e59783169acb55930518a1",
        "SurvivalTime": 4704.18701171875,
        "Kills": 851,
        "Deaths": 8,
        "Damage": 204855,
        "AnimalsReleased": 20,
        "XP": 8595,
        "Headshots": 788,
        "ConnectionTime": "10/12/2023 6:02:53 PM",
        "__v": 0
    }

## Made By

- [@ayush-ranjan-official](https://github.com/ayush-ranjan-official)
