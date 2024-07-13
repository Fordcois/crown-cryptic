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

### Keyboard Delete Button
While you can currently overwrite letters, many similar online games offer a way to delete characters. We should implement this functionality. It should work similarly to the keyboard letter function but decrease the selected index to move the cursor backward.

### Development of Clues & Letters

Currently, players can request the definition as a clue, and there's functionality to track the number of letters requested. Both are displayed in the solved puzzle pop-up, but these features need further development.

#### Clues - COMPLETE
The clue for the puzzle will consist of giving the definition. This should be styled as in the FIGMA mockup. One approach to achieve this is to have a function that takes the question and the definition and returns the clue as three strings: (PreDefinition)(Definition), and (PostDefinition). CSS styles can then be applied to the definition depending on whether the clue is revealed. Given the structure of cryptic crossword puzzles, either the pre or post definition will often be blank. This approach allows for targeted CSS application within the clue.

#### Letters
Currently, there is no system beyond counting the letters. This needs to be implemented. Given letters also need to be distinguished and unchangeable. This could be stored in a separate array, and when a letter is attempted to be updated, if the GivenLetterIndex is in the array, no change occurs.

### Discussions
#### How Should Letters Be Given?
- **Randomized**: This can be unfair as each clue might not be the same for each player depending on the letters given meaning that 3 clues for one player may be different to using 3 clues for another player.
- **Patterned**: Consistent for each player, although not necessarily useful in solving the clue.
- **Player Selection**: Adds an element of skill as players choose which letter to ask for - After discussion this is probably the one we will move forward with


### Functionality for Displaying a Different Question Each Day
The site should display a different question daily. To achieve this, we can track the date the site went live and subtract the current date from this to use the number of days as an index in our JSON.

### Share Button
A key part of the site is shareability, allowing users to share their results with friends and generate visibility for the site. We envision a shareable graphic for communication apps, similar to the following:
```
I Solved Crown Cryptic 09/07
🟦🟨🟦🟨🟦
🅰️ 2 Letters Given
🔍 Clue Used
```

The squares represent the length of the word, given letters, and clues used.

On mobile, there appears to be a separate menu that shows up instead of just copying to the clipboard. This needs further investigation.


## Development Log
<details>

<summary><b>9th July</b></summary>

**Organize Storage of Questions, Answers, and Clues as JSON**: Created a structured way to store questions, answers, and clues in JSON format.

**Clue Implementation**: Users can request a clue, which provides them with the definition.

**Solved Puzzle Pop-up Display**: A pop-up appears when the puzzle is solved, showing how many clues and letters were used to get the correct answer.

</details>

<details>
<summary><b>7th July</b></summary>

**User Guess Storage** Stored the user's guess as an array of letters. The keyboard, once implemented, should update the corresponding index in this array based on the currently selected number or state.

**Submit and Check Answer** Added functionality to convert the `userGuessArray` into a string upon submission. This string is then compared with the `CorrectAnswer`. If they match, a boolean is set 

**Create Keyboard & Letter Components** Developed the on-screen keyboard and individual letter components to facilitate user input. Implemented functionality to ensure that selecting a letter on the keyboard updates the `currentSelectedSquare` and increments the `currentSelectedSquare` index accordingly.

</details>