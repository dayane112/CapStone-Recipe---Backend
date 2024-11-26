# Recipe API
### This is a backnd server built using mongoose and Express to manage a collection of recipes. The API allows you to create, read, update, and delete recipes (CRUD), as well as seed the database with sample data.

## Description
#### This Recipe API provides CRUD operations for managing recipes in a Mongoose database. Recipes include recipe name, category (For example: breakfast, dinner, dessert, etc...), ingredients, directions, and image. The API also has a seed route to populate the database with some sample recipes.

### Technologies Used
- JavaScript
- Express
- Mongoose
- dotenv
- Cors
- morgan
- Body-Parser

## Installation
- **Clone the repository**:
    - git clone https://github.com/your-username/recipe-api.git
    - cd into folder
- **Install dependencies**:
    - npm install
- **Set up your environment variables**:
    - Create a .env file
    - Add your MongoDB connection URI
- **Run the app**:
    - npm start

## API Endpoints
### **Create Recipe**
- POST /recipe
- Response: Return the new recipe
### **Get All Recipes**
- GET /recipe
- Response: Return all recipes in the database
### **Get One Recipe**
- GET /recipe/:id
- Response: Return a recipe by its ID
### **Update Recipe**
- PUT /recipe/:id
- Response: Return the updated recipe
### **Delete Recipe**
- DELETE /recipe/:id
- Response: Return a message that the recipe was deleted
### **Seed Database**
- GET /recipe/seed
- Response: Seeds the database with sample recipe data

## Resource
- Old SBA
- Per Scholas Lessions

## Github FrontEnd URL
- https://github.com/dayane112/CapStone-Recipe---Frontend