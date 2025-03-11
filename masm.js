const v = {};
let l;
function load(arg) { l = arg };
// Fallback code to run if the file is not found
const fallbackCode = l;

// Function to run the code in the interpreter
function interpreter(code) {
    const lines = code.split("\n");

    for (let line of lines) {
        line = line.trim();

        if (line.includes("db")) {
            // Process variable declaration
            let parts = line.split("db").map(part => part.trim());
            if (parts.length === 2) {
                let key = parts[0];   // Variable name
                let value = parts[1]; // Value assigned
                v[key] = value; // Store in memory
            }
        } else if (line.startsWith("input") && line.endsWith("?")) {
            // Process user input command
            let et = line.slice(6, -1).trim(); // Extract variable name
            if (et in v) {
                const userInput = prompt(v[et]); // Simulate user input prompt
                if (userInput !== null) {
                    v[et] = userInput; // Store the input value
                }
            }
        } else if (line === "PRINT $*") {
            // Print the variable object
            console.log(v);
        }
    }
}
