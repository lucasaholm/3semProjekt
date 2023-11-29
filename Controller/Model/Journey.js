import DBFunctions from '../../Storage/DBFunctions.js';


function Journey(name,antalDage, price) {
    this.name = name;
    this.antalDage = antalDage;
    this.price = price;
}

async function getCustomerJourneys(customerId) {
        const journeys = await DBFunctions.getCustomerJourneysDB(customerId);
        return journeys;
}

async function getJourneys() {
    return await DBFunctions.getJourneysDB();
}

async function getJourneysByMonth(month) {
    let arr = await getJourneys();

    arr = filterByMonth(arr, month)
    return arr;
}

async function addJourney(journey) {
    let j = {name: journey.name, antalDage: journey.antalDage, price: journey.price}
    return await DBFunctions.addJourneyDB(j);
}

function editJourney(journey) {
    let j = {name: journey.name, antalDage: journey.antalDage, price: journey.price}
    return DBFunctions.editJourneyDB(j);
}

function getJourney(journey) {
    return DBFunctions.getJourneyDB(journey);
}

async function deleteJourney(journey) {
    let j = {name: journey.name, antalDage: journey.antalDage, price: journey.price}
    DBFunctions.deleteJourneyDB(j);
}


function filterByMonth(monthArray, targetMonth) {
    let res = [];
   
    for (let i = 0; i < monthArray.length; i++) {
        
        let date = new Date(monthArray[i].startDate); 
       
        if (date.getMonth() + 1 == targetMonth) {
            res.push(monthArray[i]);
        }
    }
    return res;
}


export default {getJourneys, getJourneysByMonth, addJourney, editJourney, getJourney, deleteJourney, getCustomerJourneys}






