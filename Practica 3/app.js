const yargs = require("yargs");
const chalk = require("chalk");
const notes = require("./notas.js");

yargs.version("1.1.0");

// Agregar comando para ejecucion en terminal

yargs.command({
  command: "add",
  description: "Agregar un nuevo item",
  builder: {
    title: {
      description: "Título del item",
      demandOption: true,
      type: "string",
    },
    body: {
      description: "Descripción del item",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  description: "Eliminar un item",
  builder: {
    title: {
      description: "Título del item",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "read",
  description: "Listar todos los items",
  builder: {
    title: {
      description: "Título del item",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.readNote(argv.title);
  },
});

yargs.command({
  command: "list",
  description: "Listar todos los items",
  handler: function () {
    notes.listNotes();
  },
});

yargs.parse();
