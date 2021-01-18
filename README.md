# school_api

## Project Setup
```
npm install
```

```
Run db.sql in project root
```

### Create a .env file in root
```
NODE_ENV = development
SERVER_PORT = 3000

DB_HOST = ''
DB_NAME = ''
DB_USERNAME = ''
DB_PASSWORD = ''
```

## Compiles and hot-reloads for development
```
npm run dev
```

# API Routes
| Description         | Route          | Method | Body                                                   |
|---------------------|----------------|--------|--------------------------------------------------------|
| Fetch All Schools   | /schools       | GET    |                                                        |
| Fetch Single School | /schools/:id   | GET    |                                                        |
| Create School       | /schools/      | POST   | { "name": String, "address": String, "phone": String } |
| Update School       | /schools/:id   | PUT    | { "name": String, "address": String, "phone": String } |
| Delete School       | /schools/:id   | DELETE |                                                        |

# TODO
- [ ] Setup sequelize migrations
- [ ] Create student model, controller & routes
- [ ] Create instructor model, controller & routes
- [ ] Create course model, controller & routes
- [ ] Create department model, controller & routes
