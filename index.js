
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const {listContacts, getContactById, removeContact, addContact} = require("./contacts")

const contacts = require("./db/contacts.json")
console.log(contacts)
async  function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
     const contactsList = await listContacts()
      return console.table(contactsList);

    case "get":
      const oneContact = await getContactById (id)
      return console.table(oneContact);

    case "add":
      const newContact = await addContact({name, email, phone})
      return console.table(newContact);

    case "remove":
      const deleteContact = await removeContact(id)
      return console.table(deleteContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
const arr = hideBin(process.argv);
const {argv} = yargs(arr);
invokeAction(argv);