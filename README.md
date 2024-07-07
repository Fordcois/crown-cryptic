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

Clue Implementation: Decide on and implement the method for providing hints or additional clues to users.

Clue Letters - Letters given as clues should not be able to be changed

CSS & Styling

## Development Log & Completed Tasks
[7th July]

User Guess Storage: Store the user's guess as an array of letters. The keyboard, once implemented, should update the corresponding index in this array based on the currently selected number or state.

Letter Display in Squares: Each letter square should display its letter based on the corresponding index in the UserGuessArray.

Submit and Check Answer: Implement functionality to convert the UserGuessArray into a string upon submission. Compare this string with the correctAnswer. If they match, proceed with the appropriate action.

Create Keyboard & Letter Components: Develop the on-screen keyboard and individual letter components to facilitate user input.

Keyboard Letter Components Functionality: Ensure that selecting a letter on the keyboard updates the currentSelectedSquare and increments the currentSelectedSquare index accordingly.

Submit Button Functionality: Develop a submit button that, when clicked, converts the UserGuessArray into a string and compares it with the correct answer. If the answer is correct, trigger a pop-up notification.