$(document).ready(function () {
    // references to form info
    var firstName = $(first_name);
    var lastName = $(last_name);
    var customerEmail = $(email);
    var customerAddress = $(address);
    var customerCity = $(city);
    var customerState = $(state);
    var customerZip = $(zip);
    var customerPhone = $(phone);

    // getting the initial customer
    getAllCustomers();

    // function for creating a new customer, calls getAllCustomers at the end
    function upsertNewCustomer(newCustomerData) {
        $.post('/api/new-customer', newCustomerData)
            .then(getAllCustomers);
    }

    // function to handle new customer form being submitted to create the new customer
    function handleNewCustomerFormSubmit(event) {
        event.preventDefault();
        upsertNewCustomer({
            first_name: firstName.val().trim(),
            last_name: lastName.val().trim(),
            email: customerEmail.val().trim(),
            address: customerAddress.val().trim(),
            city: customerCity.val().trim(),
            state: customerState.val().trim(),
            zip: customerZip.val().trim(),
            phone: customerPhone.val().trim()
        });
    }

    // adding event listener to the form
    $(document).on('submit', '#new-customer', handleNewCustomerFormSubmit());
});