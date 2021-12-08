const validate = (event) => {
  const fullName = document.artistregistration.fullname;
  const stageName = document.artistregistration.stagename;
  const birthdate = document.artistregistration.birthdate;
  const baselocation = document.artistregistration.baselocation;
  const profile = document.artistregistration.profile;
  const NIN = document.artistregistration.NIN;
  const currentlocation = document.artistregistration.currentlocation;
  const sex = document.artistregistration.sex;
  const albumnumber = document.artistregistration.albumnumber;
  const artistID = document.artistregistration.artistID;
  const startdate = document.artistregistration.startdate;
  const contact = document.artistregistration.contact;

  const fullNameError = document.getElementById('fullname-error');
  const stageNameError = document.getElementById('stagename-error');
  const birthDateError = document.getElementById('birthdate-error');
  const baseLocationError = document.getElementById('baselocation-error');
  const profileError = document.getElementById('profile-error');
  const NINError = document.getElementById('NIN-error');
  const currentLocationError = document.getElementById('currentlocation-error');
  const sexError = document.getElementById('sex-error');
  const albumNumberError = document.getElementById('albumnumber-error');
  const artistIdError = document.getElementById('artistID-error');
  const startDateError = document.getElementById('startdate-error');
  const contactError = document.getElementById('contact-error');

  let checkValid = true;

  // Regexes
  const noNumber = /^[A-Za-z]+$/;
  const capitalize = /^[A-Z][a-z]/;
  const moreThan1 = /[\w\s]+/;
  const alphaNumeric = /^[a-zA-Z0-9]+$/;
  const artistIdformart = /^[a-z]{3}\d+[a-z]{3}/;
  const nationalIDFormat = /^[A-Z]{2}\d+[A-Z]{3}/;
  const phoneFormat = /^\d{12}$/;
  const emailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

  // validation of the full name.
  if (fullName.value == '') {
    fullName.focus();
    fullNameError.innerHTML = 'Full Name Required';
    fullNameError.style = 'color:#FF7F7F ';
    fullName.style.border = '1px solid red';
    checkValid = false;
  }
  // validation of the stage name.
  if (stageName.value == '') {
    stageName.focus();
    stageNameError.innerHTML = 'Stage Name Required';
    stageNameError.style = 'color:#FF7F7F ';
    stageName.style.border = '1px solid red';
    checkValid = false;
  }
  // validation of the date of birth.
  if (birthdate.value == '') {
    birthdate.focus();
    birthDateError.innerHTML = 'Date of birth Required';
    birthDateError.style = 'color:#FF7F7F ';
    birthdate.style.border = '1px solid red';
    checkValid = false;
  }
  // validation of the base location.
  if (baselocation.value == '') {
    baselocation.focus();
    baseLocationError.innerHTML = 'Base location Required';
    baseLocationError.style = 'color:#FF7F7F ';
    baselocation.style.border = '1px solid red';
    checkValid = false;
  }
  // validation of the profile.
  if (profile.value == '') {
    profile.focus();
    profileError.innerHTML = 'Base location Required';
    profileError.style = 'color:#FF7F7F ';
    profile.style.border = '1px solid red';
    checkValid = false;
  }

  // validation of the NIN.
  if (NIN.value == '') {
    NIN.focus();
    NINError.innerHTML = 'Base location Required';
    NINError.style = 'color:#FF7F7F ';
    NIN.style.border = '1px solid red';
    checkValid = false;
  }
  // validation of the current location.
  if (currentlocation.value == '') {
    currentlocation.focus();
    currentLocationError.innerHTML = 'Base location Required';
    currentLocationError.style = 'color:#FF7F7F ';
    currentlocation.style.border = '1px solid red';
    checkValid = false;
  }
  // validation of the sex.
  if (sex.value == '') {
    sex.focus();
    sexError.innerHTML = 'Base location Required';
    sexError.style = 'color:#FF7F7F ';
    sex.style.border = '1px solid red';
    checkValid = false;
  }
  // validation of the album number.
  if (albumnumber.value == '') {
    albumnumber.focus();
    albumNumberError.innerHTML = 'Base location Required';
    albumNumberError.style = 'color:#FF7F7F ';
    albumnumber.style.border = '1px solid red';
    checkValid = false;
  }
  // validation of the artist ID.
  if (artistID.value == '') {
    artistID.focus();
    artistIdError.innerHTML = 'Base location Required';
    artistIdError.style = 'color:#FF7F7F ';
    artistID.style.border = '1px solid red';
    checkValid = false;
  }
  // validation of the start date.
  if (startdate.value == '') {
    startdate.focus();
    startDateError.innerHTML = 'Base location Required';
    startDateError.style = 'color:#FF7F7F ';
    startdate.style.border = '1px solid red';
    checkValid = false;
  }
  // validation of the contact.
  if (contact.value == '') {
    contact.focus();
    contactError.innerHTML = 'Base location Required';
    contactError.style = 'color:#FF7F7F ';
    contact.style.border = '1px solid red';
    checkValid = false;
  }
  if (!checkValid) {
    event.preventDefault();
    return false;
  }
};

const artistform = document.getElementById('form-id');

artistform.addEventListener('submit', (event) => {
  validate(event);
});
