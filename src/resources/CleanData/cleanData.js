const CrosswordImports = require("../../resources/questionData.json");
const fs = require("fs");
const path = require("path");

// This function cleans JSON data to fit the format required by the site.
// It is intended to be run separately but is included within the site files for completeness.
// Note: This function does not modify the original data but instead creates a new file in the 'CleanData' directory.

const cleanTheData = (data) => {
  const filteredData = data
    .filter((entry) => {
      // Check if entry has clue, definition, and answer
      const hasClue = entry.clue;
      const hasDefinition = entry.definition;
      const hasAnswer = entry.answer;

      // Count instances of definition in clue
      const regex = new RegExp("\\b" + entry.definition + "\\b", "gi");
      const matches = entry.clue.match(regex);

      // Check if definition appears more than once in clue
      const definitionAppearsOnce = matches && matches.length === 1;

      // Check if there is a space in the answer
      const noSpaceInAnswer = !entry.answer.includes(" ");

      // Reject entry if either condition is true
      return (
        hasClue &&
        hasDefinition &&
        hasAnswer &&
        definitionAppearsOnce &&
        noSpaceInAnswer
      );
    })
    .map((entry) => {
      // Return wanted fields in new JSON
      return {
        rowid: entry.rowid,
        clue: entry.clue,
        answer: entry.answer,
        definition: entry.definition,
        clue_number: entry.clue_number,
        puzzle_date: entry.puzzle_date,
        puzzle_name: entry.puzzle_name,
        source_url: entry.source_url,
        source: entry.source,
      };
    });

  // Convert the filtered data to a JSON string
  const jsonString = JSON.stringify(filteredData, null, 2);
  // Define the output file path
  const outputPath = path.join(__dirname, "filteredQuestionData.json");
  // Write the JSON string to the file
  fs.writeFile(outputPath, jsonString, "utf8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("File has been saved!");
    }
  });
};

// Call the function with CrosswordImports
cleanTheData(CrosswordImports);
