import DBFunctions from '../../Storage/DBFunctions.js';


// Er tjekket for korrektur
function Admin(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

async function addAdmin(admin) {
    let a = {firstName: admin.firstName, lastName: admin.lastName}
    return await DBFunctions.addAdminDB(a);
}

function getAdmin(admin) {
    return DBFunctions.getAdminDB(admin.id);
}

async function checkAdmin(adminUsername, adminPassword) {
    try {
      return await DBFunctions.getAdminByUsernameAndPassword(adminUsername, adminPassword);
    } catch (error) {
      console.error(error);
      throw error; // Kast fejlen igen for yderligere håndtering
    }
  }

function deleteAdmin(admin) {
    let a = {firstName: admin.firstName, lastName: admin.lastName, id: admin.id};
    DBFunctions.deleteAdminDB(a);
}

function editAdmin(admin) {
    let a = {firstName: admin.firstName, lastName: admin.lastName, id: admin.id}
    DBFunctions.editAdminDB(a);
}

async function getAdmins() {
    return await DBFunctions.getAdminsDB();
}

export default {addAdmin, getAdmin, checkAdmin, deleteAdmin, editAdmin, getAdmins}

/*
//add
let admin = new Admin('Admin', 'Admin');
addAdmin = await addAdmin(admin);
*/

/*
//delete
let admin = new Admin('Mikkel', 'Lindhøj');
admin = await addAdmin(admin);
await deleteAdmin(admin);
*/

/*
//edit
let admin = new Admin('Mikkel', 'Lindhøj');
admin = await addAdmin(admin);

admin.firstName = 'bølle';
console.log(admin)
await editAdmin(admin);
*/

/*
//get
let admin = new Admin("Mewkel", "Lindhøj");
admin = await addAdmin(admin);

let a = await getAdmin(admin);
console.log('a: ');
console.log(a);
*/

/*
//getALL
let admin = new Admin("Mikkel", "Lindhøj");
admin = await addAdmin(admin);

let admins = await getAdmins();
console.log(admins);
*/