const faker = require('faker');

function generateCustomers() {
    const customers = [];
    // const invoices = [];

    for(let i = 0; i < 20; i++) {

        const idCustomer = faker.random.uuid();
        const customerCompany = faker.company.companyName();
        const customerName = faker.name.findName();
        const customerEmail = faker.internet.email();
        const customerAddress = faker.address.streetAddress();
        const customerCity = faker.address.city();
        const customerCode = faker.address.zipCode();
        const numberMva = faker.random.uuid();
        const customerNumberPhone = faker.phone.phoneNumber();

        customers.push({
            "id": idCustomer,
            "company": customerCompany,
            "fullname": customerName,
            "email": customerEmail,
            "address": {
                "street": customerAddress,
                "city": customerCity,
                "codeCity": customerCode,
            },
            "MVA": numberMva,
            "telephoneNumber": customerNumberPhone,
        })
    }

    return { "customers":  customers }
}

module.exports = generateCustomers

