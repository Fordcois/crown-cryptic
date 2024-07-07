# Crown Cryptic

Crown Cryptic is an in development web application designed to challenge users with a daily cryptic crossword clue. Inspired by the success of word-based games like Wordle, Crown Cryptic provides a fun and engaging way to solve cryptic crossword clues every day. 

This project is a collaboration between [Sam Ford](https://github.com/Fordcois) & [Rachel Roberts](https://github.com/Rachel853)
.

You can explore our design and planning documents here:

- [Live Design Document](https://hackmd.io/@cXzrcJerTQGszfvObYAayQ/CrownCrypticDesign)
- [Figma Mock-ups](https://www.figma.com/proto/MU6UagXDGSGhVlMFicNLFC/Crown-Cryptic?node-id=1-5&t=ta966i64D5ILQSvX-1)

## Getting Started

1. Clone the Repository

```bash
git clone https://github.com/Fordcois/crown-cryptic.git
```
2. Install Dependencies

```bash
npm install
```
3. Start the Development Server

```bash
npm run dev
```
4. Open http://localhost:3000 in your browser to see the application in action.

## Future Development Tasks

1. **Organise Storage of Questions, Answers, and Clues as JSON** Create a structured way to store questions, answers, and clues in a JSON format, making it easy to retrieve and use them based on the date.


2. **Clue Implementation** Develop a system for providing hints or additional clues to the users to aid in solving the puzzle.

3. **Clue Letters** Ensure that letters provided as clues are fixed and cannot be altered by the user once provided 

4. **When Puzzle is Solved - Pop-up Display** Create a pop-up notification when the puzzle is solved that includes a shareable message highlighting the solution and the clues used.

5. **CSS & Styling** Improve the visual design and user experience of the application.

## Development Log
<details>

<summary><b>7th July</b></summary>

**User Guess Storage** Stored the user's guess as an array of letters. The keyboard, once implemented, should update the corresponding index in this array based on the currently selected number or state.

**Submit and Check Answer** Added functionality to convert the `userGuessArray` into a string upon submission. This string is then compared with the `CorrectAnswer`. If they match, a boolean is set 

**Create Keyboard & Letter Components** Developed the on-screen keyboard and individual letter components to facilitate user input. Implemented functionality to ensure that selecting a letter on the keyboard updates the `currentSelectedSquare` and increments the `currentSelectedSquare` index accordingly.

</details>