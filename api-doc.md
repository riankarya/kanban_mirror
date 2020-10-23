# hacktiv-garden-server

​
List of available endpoints:
​
- `POST users/register`
- `POST users/login`
- `POST users/googleLogin`
- `POST /tasks`
- `GET /tasks`
- `GET /tasks/:id`
- `PUT /tasks/:id`
- `PATCH /tasks/:id`
- `DELETE /tasks/:id`

### POST /users/register

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "id": "integer",
  "email": "string"
}
```

### POST /users/login

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 200
- body:
  ​

```json
{
    "token": "jwt string"
}
```

### POST /users/googleLogin

Request:

- data:

```json
{
  "tokenGoogle": "string"
}
```

Response:

- status: 200
- body:
  ​

```json
{
    "token": "jwt string"
}
```

### POST /tasks

Request:

- data:

```json
{
  "title": "string",
  "description": "string",
  "category": "string",
  "UserId": "integer"
}
```

Response:

- status: 201
- body:
  ​

```json
{
    "data": "instance task"
}
```

### GET /tasks

description: 
  get all task from database

Request:

- headers: token (string)
- UserId: current logged in user id

Response:

- status: 200
- body: array of object (task)


### GET /tasks/:id

description: 
  get one task by id from database

Request:

- headers: token (string)
```json
{
    "id": "req.params.id",
}
```

Response:

- status: 200
- body: object (task)


### PUT /tasks/:id

description: 
  edit task to database

Request:

- headers: token (string)
```json
{
    "id": "req.params.id",
    "title": "string",
    "description": "string",
    "category": "string"
}
```

Response:

- status: 200
- body: object (task after edit)


### PATCH /tasks/:id

description: 
  edit category to database

Request:

- headers: token (string)
```json
{
    "id": "req.params.id",
    "category": "string"
}
```

Response:

- status: 200
- body: object (task after status edit)


### DELETE /tasks/:id

description: 
  delete task from database

Request:

- headers: token (string)
```json
{
    "id": "req.params.id"
}
```

Response:

- status: 200
- body: object (deleted task)
