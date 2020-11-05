$(document).ready(function () {
    // references to form info
    let firstName = $(first_name);
    let lastName = $(last_name);
    let customerEmail = $(email);
    let customerAddress = $(address);
    let customerCity = $(city);
    let customerState = $(state);
    let customerZip = $(zip);
    let customerPhone = $(phone);

    // modal for submit
    function modalPopup() {
        const modal = document.getElementById('page-modal');
        const close = document.getElementsByClassName('modal-close')[0];

        modal.style.display = 'flex';

        close.onclick = function () {
            modal.style.display = 'none';
        };

        window.onclick = function (event) {
            if (event.target.className === 'modal-background') {
                modal.style.display = 'none';
            }
        };
    }

    // function for creating a new customer, calls getAllCustomers at the end
    function upsertNewCustomer(newCustomerData) {
        console.log(newCustomerData);
        $.post('/api/new-customer', newCustomerData)
            .then(function (data) {
                console.log(data);
                modalPopup();
            });
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
    $('#new-customer').on('submit', handleNewCustomerFormSubmit);
});