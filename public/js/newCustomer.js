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
    // getAllCustomers();

    // function for creating a new customer, calls getAllCustomers at the end
    function upsertNewCustomer(newCustomerData) {
        console.log(newCustomerData);
        $.post('/api/new-customer', newCustomerData);
        // .then(getAllCustomers);
    }


    // modal for submit
    function modalPopup() {
        var button = document.getElementById('modal-button');
        var modal = document.getElementById('page-modal');
        var close = document.getElementsByClassName('modal-close')[0];

        button.onclick = function () {
            modal.style.display = 'block';
            console.log('hit');
        };

        close.onclick = function () {
            modal.style.display = 'none';
            console.log('hit');
        };

        window.onclick = function (event) {
            if (event.target.className === 'modal-background') {
                modal.style.display = 'none';
            }
        };
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
    $('#new-customer').on('submit', handleNewCustomerFormSubmit), modalPopup();
});