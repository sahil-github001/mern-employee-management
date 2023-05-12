# mern-employee-management

This is a simple MERN (MongoDB, Express, React, Node.js) stack app for managing employee details. You can add, edit, and delete employee details, including their name, age, designation, and salary. All data is stored in a MongoDB database.

## Prerequisites

Before you can use this app, you'll need to have the following installed on your computer:

- Node.js (v16 or higher)
- MongoDB Community Edition server
- Nodemon 

## Installation

To install and run the app, follow these steps:

1. Clone the repository: `https://github.com/sahil-github001/mern-employee-management.git`
2. Navigate to the client directory: `cd your-repo/client`
3. Install the client dependencies: `npm install`
4. Navigate to the server directory: `cd ../server`
5. Install the server dependencies: `npm install`
6. Start the server: `nodemon index.js`
7. Start the client: `cd ../client && npm start`
8. Open your web browser and go to `http://localhost:3000` to see the app in action.

Note that the client runs on port 3000 by default, while the server will run on a different port (likely 8000 or another port specified in the server's code).

## Usage

Once the app is running, you can use it to add, edit, and delete employee details. Here's how:

### Adding an employee

1. Click the "Add Employee" button.
2. Enter the employee's details (name, age, designation, salary) in the form.
3. Click the "Add Employee" button to add the employee to the database.

### Editing an employee

1. Click the "Edit" button next to the employee you want to edit.
2. Update the employee's details in the form.
3. Click the "update employee details" button to update the employee's details in the database.

### Deleting an employee

1. Click the "Delete" button next to the employee you want to delete.

