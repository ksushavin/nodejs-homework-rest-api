const fs = require('fs/promises');
const {nanoid} = require("nanoid");
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");

const updateContacts = async(contacts) => await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);

     if(!data) {
        return null
      }
    return JSON.parse(data);
    
  } catch (error) {
    console.log(error.message);
  } 
}

const getContactById = async (contactId) => {
  try {
        const contacts = await listContacts();
        const result = contacts.find(item => item.id === contactId);

        return result || null;   
    } catch (error) {
        console.log(error.message)
  }
}

const removeContact = async (contactId) => {
  try {
        const contacts = await listContacts();
        const index = contacts.findIndex(item => item.id === contactId);

        if(index === -1) {
            return null;
        }
        const [result] = contacts.splice(index, 1);
        await updateContacts(contacts);

        console.table(contacts);
        return result;
    } catch (error) {
        console.log(error.message)
  }
}

const addContact = async (body) => {
  try {
    const contacts = await listContacts();
    const { name, email, phone } = body;

    const newContact = {
      id: nanoid(),
      name,
      email,
      phone
    }
    
    contacts.push(newContact);
    await updateContacts(contacts);

    console.table(contacts);
    return newContact
  } catch (error) {
      console.log(error.message)
  }
}

const updateContact = async (id, body) => {
  try {
      const contacts = await listContacts();
    const index = contacts.findIndex(item => item.id === id);
    if(index === -1) {
        return null;
    }

    contacts[index] = {id, ...body};
    await updateContacts(contacts);

    return contacts[index]
  } catch (error) {
    
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
