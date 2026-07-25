# Conway's Game of Life

A browser-based implementation of Conway's Game of Life built with plain JavaScript and the standard DOM API.

## Overview

Conway's Game of Life is a cellular automaton created by mathematician John Horton Conway. The simulation takes place on a grid of cells, where each cell is either alive or dead.

Each generation is calculated using the following rules:

- A live cell with exactly 2 or 3 live neighbors survives.
- A dead cell with exactly 3 live neighbors becomes alive.
- All other live cells die.
- All other dead cells remain dead.

Each cell can have up to eight neighbors: above, below, left, right, and the four diagonal cells.

## Features

- 25 × 25 game board
- Initial checkerboard pattern
- Step through the simulation one generation at a time
- Reset the board to the original checkerboard pattern
- Generate a random board
- Automatically run the simulation every 100 milliseconds
- Pause and resume the simulation
- Live and dead cells are displayed with different background colors

## Initial Setup

This project uses a basic Express server to serve the Conway's Game of Life application locally.

You will need:

- Node.js
- npm

#### Install Dependencies

From the project directory, initialize the project and install Express:

## Running the Program Locally

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Then navigate into the project directory:

```bash
cd <project-folder>
```

Note: If you downloaded the project as a ZIP file, extract it and open a terminal inside the extracted project folder.

3. Install the required dependencies by running:

```bash
npm install express
```

4. Start the server on your local machine

```bash
node server.js
```

5. Run the application in your browser
   Open a web browser and navigate to: http://localhost:3000
   The Conway's Game of Life should now be running locally.

## Tech Stack

- HTML/CSS: web-based interface for Conway's Game of Life
- JavaScript: game logic, state management, event handling, DOM manipulation
- Data structure: Nested loops check cell neighbors,

  2D array of booleans used to store state -

  ```javascript
  [
    [true, false, true],
    [false, true, false],
    [true, false, true],
  ];
  ```
