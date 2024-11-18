const fs = require("fs");
const chalk = require("chalk");

const addNote = function (title, body) {
  const notes = loadNotes();
  // Se comprueba a ver si existen cohoicencias las notas
  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.bgGreen("Nota añadida correctamente."));
  } else {
    console.log(chalk.bgRed("Ya hay una nota con este título."));
  }
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    console.log(
      chalk.red("No se encontró el archivo de notas o el archivo esta vacio.")
    );
    return [];
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const removeNote = function (title) {
  const notes = loadNotes();
  const foundNote = notes.filter((note) => note.title !== title);
  saveNotes(foundNote);
  if (foundNote.length === notes.length) {
    console.log(chalk.bgRed("No se encontró la nota."));
  } else {
    console.log(chalk.bgGreen("Nota eliminada correctamente."));
  }
};

const readNote = function (title) {
  const notes = loadNotes();
  if (notes.length === 0) {
    console.log(chalk.bgYellow("No hay notas."));
  } else {
    const note = notes.find((note) => note.title === title);
    if (!note) {
      console.log(chalk.bgRed("No se encontró la nota."));
    } else {
      console.log(chalk.cyan(`Título: ${note.title}`));
      console.log(chalk.bgBlueBright(`Cuerpo: ${note.body}`));
    }
  }
};

const listNotes = function () {
  const notes = loadNotes();
  if (notes.length === 0) {
    console.log(chalk.bgYellow("No hay notas."));
  } else {
    console.log(chalk.bgMagenta("Títulos de las notas:"));
    notes.forEach((note) => {
      console.log(note.title);
      console.log(chalk.bgGray(note.body));
    });
  }
};

module.exports = {
  addNote,
  loadNotes,
  saveNotes,
  removeNote,
  readNote,
  listNotes,
};
