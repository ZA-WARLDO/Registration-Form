function checkAge()
{
    var isMinor = false;
    var BDAY = new Date(document.reg_form.DOB.value);
    //variables hold the day, month and year of the birth date.
    var BDAY_day = BDAY.getDate();
    var BDAY_month = BDAY.getMonth();
    var BDAY_year = BDAY.getFullYear();
    
    //variables hold the current MM/DD/YYYY
    var currentDate = new Date();
    var currentDate_day = currentDate.getDate();
    var currentDate_month = currentDate.getMonth();
    var currentDate_year = currentDate.getFullYear();

    var age = 0;
    // age = currentDate.year - BDAY_year;
    if (currentDate_month < BDAY_month)
    {
        age = currentDate_year - BDAY_year - 1;
    }
    else if (currentDate_month == BDAY_month)
    {
        if (currentDate_day >= BDAY_day)
        {
            age = currentDate_year - BDAY_year;
        }
        else
        {
            age = currentDate_year - BDAY_year - 1;
        }
    }
    else
    {
        age = currentDate_year - BDAY_year;
    }



    
    if(age < 21)
    {
        alert("Minors are not allowed");
        isMinor = true;
    }

    checkPassword(isMinor);
}


function checkPassword(isMinor)
{
    var length = document.getElementById("password").value.length;
    
    if(length < 8)
    {
        document.getElementById("error_p").innerHTML = "Error: Password must be at least 8 characters long";
        alert("Error: Password must be at least 8 characters long");
    }
    else if(isMinor != true)
    {
        document.write("Hooray! Your account has been successfully created.");
    }
    
}