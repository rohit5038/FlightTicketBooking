function popup(element) {
    let ref = element.dataset.ref;
    Swal.fire({
        title: 'Do you really want to cancel this ticket?',
        showCancelButton: true,
        confirmButtonText: `Cancel`,
        confirmButtonColor: '#d33',
    }).then((result) => {
        if (result.isConfirmed) {
            cancel_tkt(ref);
        }
    })
}

function cancel_tkt(ref) {
    let formData = new FormData();
    formData.append('ref',ref)
    fetch('ticket/cancel',{
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(response => {
        if (response.success === true) {
            document.querySelector(`[id='${ref}'] .ticket-action-div`).innerHTML = '';
            document.querySelector(`[id='${ref}'] .status-div`).innerHTML = `<div class="red">CANCELLED</div>`;
            document.querySelector(`[id='${ref}'] .booking-date-div`).innerHTML = '';
            Swal.fire('Cancelled!', 'Your ticket has been cancelled.', 'success');
        }
        else {
            Swal.fire('Error!', response.error, 'error');
        }
    });
}