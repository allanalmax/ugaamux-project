const validate = (event) => {
    const bandname = document.bandregistration.bandname;
    const bandowner = document.bandregistration.bandowner;

    const bandNameError = document.getElementById('bandname-error');
    const bandownerError = document.getElementById('bandname-error');

    

    if (bandname.value == '') {
        bandNameError.innerHTML = 'Band Name Required';
        bandname.focus();
        bandname.style.border = '2px solid red';
        return false;
    }

    if (bandowner.value == '') {
        bandownerError.innerHTML = 'Band Owner Required';
        bandowner.focus();
        bandowner.style.border = '2px solid red';
        return false;
    }
    return true;
};

validate();