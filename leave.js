document.getElementById('leave-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const reason = document.getElementById('reason').value;
    const leaveType = document.getElementById('leave-type').value;

    const leaveRequestsTable = document.getElementById('leave-request').getElementsByTagName('tbody')[0];
    const newRow = leaveRequestsTable.insertRow();

    const nameCell = newRow.insertCell(0);
    const idCell = newRow.insertCell(1);
    const startDateCell = newRow.insertCell(2);
    const endDateCell = newRow.insertCell(3);
    const reasonCell = newRow.insertCell(4);
    const leaveTypeCell = newRow.insertCell(5);
    const statusCell = newRow.insertCell(6);

    nameCell.textContent = name;
    idCell.textContent = id;
    startDateCell.textContent = startDate;
    endDateCell.textContent = endDate;
    reasonCell.textContent = reason;
    leaveTypeCell.textContent = leaveType;
    statusCell.textContent = 'Pending';

    document.getElementById('leave-form').reset();
});
