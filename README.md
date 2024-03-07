# CRUD Operations with Express.js, MongoDB, and Node.js

This repository contains a basic implementation of CRUD (Create, Read, Update, Delete) operations using Express.js, MongoDB, and Node.js.<br />
It Interacts with the "xpsystem" collection, of an let say "players" database then add this in .env file:
```
   PORT = 3000 
   MONGO_URL = "mongodb+srv://___mongodb.net/players?retryWrites=true&w=majority&appName=__"
```

## API Specifications

```http://localhost:3000/api/user/create``` - POST a user details according to the schema<br />
```http://localhost:3000/api/user/getallusers``` - GET all user details<br />
```http://localhost:3000/api/user/update/:id``` - UPDATE (PUT) an ID<br />
```http://localhost:3000/api/user/delete/:id``` - DELETE and ID<br />

### One schema example

    {
        "_id": "0x7b92f1157336797Ef60b6a103790e67de09F2019",
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
    
    Note: 
    1. _id represents wallet address of user, if not specified in schema, it will take some random unique value of objectID type.
    2. The versionKey is a property set on each document when first created by Mongoose. This keys value contains the internal revision of the document. The name of this document property is configurable. The default is __v = 0.

    If this conflicts with your application you can configure as such:

    new Schema({..}, { versionKey: '_somethingElse' }) or versionKey: false    
  

## Made By

- [@ayush-ranjan-official](https://github.com/ayush-ranjan-official)
