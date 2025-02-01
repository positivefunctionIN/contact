// // get input element
//         let filterinput = document.getElementById('filterinput');

//         // add event listner
//         filterinput.addEventListener('keyup', filternames);

//         function filternames() {
//             let filtervalue = document.getElementById('filterinput').value.toUpperCase();
            
//             //get names ul
//             let ul = document.getElementById('names');
//             // get Lis from ul
//             let li = ul.querySelectorAll('li.collection-item');

//             //loop through collection-items li
//             for(let i = 0; i < li.length; i++){
//                 let a = li[i].getElementsByTagName('a')[0];
//                 // if matched
        
//                 if (a.innerHTML.toUpperCase().indexOf(filtervalue)> -1){
//                     li[i].style.display ='';
//                 }
//                 else {
//                     li[i].style.display = 'none';
//                 }
                
//             }
//         }

        
//         // Function to show contact details in a modal

//         document.querySelector(".edit-btn").addEventListener("click", function(event) {
//             event.stopPropagation();  // Prevent triggering show details
//             // Your edit logic here
//             console.log("Edit clicked");
//           });
        
//           document.querySelector(".delete-btn").addEventListener("click", function(event) {
//             event.stopPropagation();  // Prevent triggering show details
//             // Your delete logic here
//             console.log("Delete clicked");
//           });
        
//           document.querySelector(".show-details-btn").addEventListener("click", function() {
//             // Your show details logic here
//             console.log("Show details clicked");
//           });

          
//         function showDetails(name, email, phone) {
//             document.getElementById('modal-name').textContent = name;
//             document.getElementById('modal-email').textContent = email;
//             document.getElementById('modal-phone').textContent = phone;
//             document.querySelector('.details-modal').style.display = 'block';
//             document.querySelector('.overlay').style.display = 'block';
//         }

//         // Function to close the details modal
//         function closeDetails() {
//             document.querySelector('.details-modal').style.display = 'none';
//             document.querySelector('.overlay').style.display = 'none';
//         }

//         function editContact(element) {
//             const contactItem = element.closest('.collection-item');
//             const nameSpan = contactItem.querySelector('.contact-name');
//             const editInput = contactItem.querySelector('.edit-input');
//             const editBtn = contactItem.querySelector('.edit-btn');
//             const saveBtn = contactItem.querySelector('.save-btn');

//             nameSpan.style.display = 'none';
//             editInput.style.display = 'inline';
//             editBtn.style.display = 'none';
//             saveBtn.style.display = 'inline';
//             editInput.focus();
//         }

//         function saveContact(element) {
//             const contactItem = element.closest('.collection-item');
//             const nameSpan = contactItem.querySelector('.contact-name');
//             const editInput = contactItem.querySelector('.edit-input');
//             const editBtn = contactItem.querySelector('.edit-btn');
//             const saveBtn = contactItem.querySelector('.save-btn');

//             nameSpan.textContent = editInput.value;
//             nameSpan.style.display = 'inline';
//             editInput.style.display = 'none';
//             editBtn.style.display = 'inline';
//             saveBtn.style.display = 'none';
//         }

//         function deleteContact(element) {
//             const contactItem = element.closest('.collection-item');
//             const name = contactItem.querySelector('span').textContent;
//             if (confirm(`Are you sure you want to delete ${name}?`)) {
//                 contactItem.remove();
//             }
//         }


//         document.addEventListener('DOMContentLoaded', function () {
//     // Initialize modals
//     const contactDetailsModal = M.Modal.init(document.getElementById('contactDetailsModal'));
//     const addContactModal = M.Modal.init(document.getElementById('addContactModal'));

//     // Search functionality
//     document.getElementById('filterinput').addEventListener('input', function () {
//         const searchTerm = this.value.toLowerCase();
//         const contacts = document.querySelectorAll('.collection-item');
//         contacts.forEach(contact => {
//             const name = contact.querySelector('span').textContent.toLowerCase();
//             if (name.includes(searchTerm)) {
//                 contact.style.display = 'block';
//             } else {
//                 contact.style.display = 'none';
//             }
//         });
//     });
// });

// // Show contact details in modal
// function showDetails(name, email, phone) {
//     document.getElementById('contactName').textContent = name;
//     document.getElementById('contactEmail').textContent = email;
//     document.getElementById('contactPhone').textContent = phone;
//     const modal = M.Modal.getInstance(document.getElementById('contactDetailsModal'));
//     modal.open();
// }

// // Open add contact modal
// function openAddContactModal() {
//     const modal = M.Modal.getInstance(document.getElementById('addContactModal'));
//     modal.open();
// }

// // Save contact (dummy function)
// function saveContact() {
//     const name = document.getElementById('contactNameInput').value;
//     const email = document.getElementById('contactEmailInput').value;
//     const phone = document.getElementById('contactPhoneInput').value;
//     alert(`Contact Saved: ${name}, ${email}, ${phone}`);
//     // Add logic to save the contact to the list
// }

// // Edit contact (dummy function)
// function editContact(button) {
//     const contactItem = button.closest('.collection-item');
//     const name = contactItem.querySelector('span').textContent;
//     alert(`Editing: ${name}`);
//     // Add logic to populate the add/edit modal with existing data
// }

// // Delete contact (dummy function)
// function deleteContact(button) {
//     const contactItem = button.closest('.collection-item');
//     const name = contactItem.querySelector('span').textContent;
//     if (confirm(`Are you sure you want to delete ${name}?`)) {
//         contactItem.remove();
//     }
// }




document.addEventListener('DOMContentLoaded', function () {
    // Initialize modals
    const contactDetailsModal = M.Modal.init(document.getElementById('contactDetailsModal'));
    const addContactModal = M.Modal.init(document.getElementById('addContactModal'));

    // Search functionality
    document.getElementById('filterinput').addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const contacts = document.querySelectorAll('.collection-item');
        contacts.forEach(contact => {
            const name = contact.querySelector('span').textContent.toLowerCase();
            if (name.includes(searchTerm)) {
                contact.style.display = 'block';
            } else {
                contact.style.display = 'none';
            }
        });
    });
});

// Show contact details in modal
function showDetails(name, email, phone) {
    document.getElementById('contactName').textContent = name;
    document.getElementById('contactEmail').textContent = email;
    document.getElementById('contactPhone').textContent = phone;
    const modal = M.Modal.getInstance(document.getElementById('contactDetailsModal'));
    modal.open();
}

// Open add contact modal
function openAddContactModal() {
    const modal = M.Modal.getInstance(document.getElementById('addContactModal'));
    modal.open();
}

// Save contact (dummy function)
function saveContact() {
    const name = document.getElementById('contactNameInput').value;
    const email = document.getElementById('contactEmailInput').value;
    const phone = document.getElementById('contactPhoneInput').value;
    alert(`Contact Saved: ${name}, ${email}, ${phone}`);
    // Add logic to save the contact to the list
}

// Edit contact (dummy function)
function editContact(button) {
    const contactItem = button.closest('.collection-item');
    const name = contactItem.querySelector('span').textContent;
    alert(`Editing: ${name}`);
    // Add logic to populate the add/edit modal with existing data
}

// Delete contact (dummy function)
function deleteContact(button) {
    const contactItem = button.closest('.collection-item');
    const name = contactItem.querySelector('span').textContent;
    if (confirm(`Are you sure you want to delete ${name}?`)) {
        contactItem.remove();
    }
}