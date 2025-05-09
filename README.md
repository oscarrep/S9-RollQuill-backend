# RollQuill Backend API

This is the backend API repository for the RollQuill application. It provides database connectivity and CRUD operations for managing users and characters in the RollQuill app.

## Project Overview

The RollQuill Backend API serves as the data layer for the RollQuill application, handling all database operations and providing endpoints for the frontend to interact with the data.

## Functionalities

- **Database Connection**: Secure connection to MongoDB using Mongoose
- **User Management**: Create, read, update, and delete user data
- **Character Management**: Create, read, update, and delete character data
- **RESTful API**: Well-structured endpoints for frontend communication

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS (Cross-Origin Resource Sharing)
- dotenv (Environment Variables)
- Postman

## Requirements

- Node.js
- MongoDB Server
- Visual Studio Code or similar IDE

## Installation Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rollquill-backend.git
   cd rollquill-backend
   ```

2. Install dependencies:
   ```
   npm i
   npm i nodejs express mongoDB mongoose cors
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   CONNECT_STR=mongodb_connection_string
   PORT=3000
   API_CHARACTERS=/api/characters
   API_USERS=/api/users
   ```

5. Start the server:
   ```
   npm run dev
   ```

## API Endpoints

### Players

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get a specific user
- `GET /api/users/firebase/:uid` - Get a user by Firebase UID
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update a user
- `PATCH /api/users/:id/add-character` - Add a character to a use
- `DELETE /api/users/:id` - Delete a user

### Games

- `GET /api/characters` - Get all characters
- `GET /api/characters/:id` - Get a specific character
- `POST /api/characters` - Create a new character
- `PUT /api/characters/:id` - Update a character
- `DELETE /api/characters/:id` - Delete a character

## Database Schema

### User
- fireUid (Unique Firebase UID)
- premium (Boolean)
- email (Unique email address)
- password
- characters (Array of character IDs)
- races
- subraces
- classes
- subclasses
- spells
- items
- features

### Character
- createdBy
- name
- race
- subrace
- class
- subclass
- level
- speed
- ability_scores (Object with STR, DEX, CON, INT, WIS, CHA)
- ability_bonuses (Array of bonuses)
- savingThrows
- classSkills
- backgroundSkills
- image
- expertise

## Development

For development purposes, you can run the server with:
```
npm run dev
```

## License

Check out the Front End app here: `https://github.com/oscarrep/S8-League-Nexus`

## License

This project is licensed under the MIT License - see the LICENSE file for details.
