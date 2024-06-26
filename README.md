# Rock-Paper-Scissors Online Game Server

This project implements a simple online version of the classic game Rock-Paper-Scissors where users can play against an HTTP server. Built with Node.js, this server handles game logic, user interactions, and serves HTML content dynamically.

## Features

- **Play Rock-Paper-Scissors against the server**: Users can select their move, and the server will generate its own move in response.
- **Dynamic content delivery**: The server streams HTML files that change based on the game's state and user interactions.
- **Simple routing**: Requests are routed based on pathname and request methods, demonstrating basic HTTP server functionalities in Node.js.

## Technologies Used

- **Node.js**: Core platform for server-side logic.
- **HTTP module**: To create the server and handle requests.
- **FS module**: To stream HTML files based on game state.
- **URL module**: To parse URLs and extract queries.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

```
Node.js
```

### Installing

A step-by-step series of examples that tell you how to get a development environment running:

1. Clone the repository:
   ```bash
   git clone (https://github.com/Prabal31/Rock-Paper-Scisors.git)
   ```
2. Navigate to the project directory:
   ```bash
   cd rock-paper-scissors
   ```
3. Install NPM packages:
   ```bash
   npm install
   ```
4. Run the server:
   ```bash
   node server.js
   ```

Visit `http://localhost:3000` on your browser to start playing against the server.

## Usage

Describe how to use the game, with possible command line or browser instructions.

## Contributing

Please read [CONTRIBUTING.md](https://yourlinkhere.com/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

- **Prabal Manchanda** - [[YourGitHub](https://github.com/yourusername)](https://github.com/Prabal31)

