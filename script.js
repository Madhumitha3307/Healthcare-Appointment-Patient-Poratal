const registrationForm = document.getElementById('registrationForm');
const appointmentTableBody = document.getElementById('appointmentTableBody');

const healthFields = {
  patientName: document.getElementById('healthPatientName'),
  bloodGroup: document.getElementById('healthBloodGroup'),
  department: document.getElementById('healthDepartment'),
  doctor: document.getElementById('healthDoctor'),
  appointmentDate: document.getElementById('healthAppointmentDate'),
  appointmentTime: document.getElementById('healthAppointmentTime'),
  symptoms: document.getElementById('healthSymptoms'),
  appointmentStatus: document.getElementById('healthAppointmentStatus')
};

registrationForm.addEventListener('submit', function (event) {
  event.preventDefault();

  if (!registrationForm.checkValidity()) {
    registrationForm.reportValidity();
    return;
  }

  const formData = new FormData(registrationForm);
  const patientName = formData.get('patientName');
  const department = formData.get('department');
  const doctor = formData.get('doctor');
  const appointmentDate = formData.get('appointmentDate');
  const appointmentTime = formData.get('appointmentTime');
  const bloodGroup = formData.get('bloodGroup');
  const symptoms = formData.get('symptoms');

  const appointmentId = `APT-${String(appointmentTableBody.children.length + 1).padStart(3, '0')}`;
  const appointmentStatus = 'Booked';

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${appointmentId}</td>
    <td>${patientName}</td>
    <td>${department}</td>
    <td>${doctor}</td>
    <td>${appointmentDate}</td>
    <td>${appointmentTime}</td>
    <td>${appointmentStatus}</td>
  `;

  appointmentTableBody.appendChild(row);

  healthFields.patientName.textContent = patientName;
  healthFields.bloodGroup.textContent = bloodGroup;
  healthFields.department.textContent = department;
  healthFields.doctor.textContent = doctor;
  healthFields.appointmentDate.textContent = appointmentDate;
  healthFields.appointmentTime.textContent = appointmentTime;
  healthFields.symptoms.textContent = symptoms;
  healthFields.appointmentStatus.textContent = appointmentStatus;

  registrationForm.reset();
});

registrationForm.addEventListener('reset', function () {
  setTimeout(() => {
    registrationForm.classList.remove('was-validated');
  }, 0);
});
