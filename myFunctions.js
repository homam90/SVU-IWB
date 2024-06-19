function checkarabic() {
    const inpu = document.getElementById("clientname");
    const textInput = document.getElementById("clientname").value.trim();
    const arabicletters = /^[\u0600-\u06FF]+$/;


    const words = textInput.split(/\s+/);

    const ar = words.every(word => arabicletters.test(word));


    if (textInput.length != 0 && ar == false) {
        alert("يرجى ادخال الاسم باللغة العربية حصرا");
        inpu.select();
        inpu.focus();
        return false;
    }
    return true;

};

function checkid() {


    const inu = document.getElementById("nationalid");
    const numberinput = document.getElementById("nationalid").value;
    const pattern = /^(01|02|03|04|05|06|07|08|09|10|11|12|13|14)\d{9}$/;
    const res = pattern.test(numberinput);
    //const p = isNaN(numberinput);



    if (res == false) {
        alert("يرجى ادخال الرقم الوطني بشكل صحيح");
        inu.select();
        inu.focus();
        return false;

    }
    return true;

};

function checkphone() {
    const mobilein = document.getElementById("mobile");
    const mobileinput = document.getElementById("mobile").value;
    const patternmobile = /^(094|099|095|096|093|098)\d{7}$/;
    const resul = patternmobile.test(mobileinput);
    //const p = isNaN(numberinput);



    if (resul == false && mobileinput.length != 0) {
        alert("يرجى ادخال رقم الموبايل بشكل صحيح");
        mobilein.select();
        mobilein.focus();
        return false;

    }
    return true;
};

function checkmail() {
    const mailin = document.getElementById("mail");
    const mailinput = document.getElementById("mail").value;
    const patternmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const resulmail = patternmail.test(mailinput);
  



    if (resulmail == false && mailinput.length != 0) {
        alert("يرجى ادخال الايميل بشكل صحيح");
        mailin.focus();
        mailin.select();
        return false;

    }
    return true;

};
function GC() {
    const charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let ca = '';
    for (let i = 0; i < 6; i++) {
        const randomChar = charsArray[Math.floor(Math.random() * charsArray.length)];
        ca += randomChar;
    }
    document.getElementById('cinput').innerHTML = ca;

};
function codecheck()
{
    let codem = '';
    let codec = '';
    codem = document.getElementById('cinput').innerHTML;
    codec = document.getElementById('cclient').value;
    if (codem != codec) {
        alert("يرجى التاكد من رمز التحقق");
        return false;
    }
    return true;
};

function openNewWindow() {
    if (checkid() && codecheck() && checkmail() && checkphone() && checkarabic() && checkchoice())
    {
        let ch= selectchoice();
        
        
           
            var newWindow = window.open("", "newWindow", "width=600,height=400");

            newWindow.document.write("<html><head><title>Summary</title></head><body>");
            newWindow.document.write("<h1>مواصفات العقار</h1>");
            newWindow.document.write("<p>" + ch + "</p>");

            newWindow.document.write("</body></html>");
            newWindow.document.close();
      
      
 }
};

function selectchoice()
{
    let ra = document.getElementsByName('estate'); 
 
    let selectedValue;
    for (var i = 0; i < ra.length; i++)
    {
        if (ra[i].checked)
        {
            selectedValue = ra[i].value;
            break;
        }
    }
    return selectedValue;

};

function checkchoice()
{
    let re = document.getElementsByName('estate');

    var radioChecked = false;
    for (var i = 0; i < re.length; i++) {
        if (re[i].checked) {
            radioChecked = true;
            break;
        }
    }
    if (!radioChecked)
    {
        alert('يرجى اختيار عقار');
        return false;
    }

    return true;
};
function isbirthdayvalid()
{
    const birthinput=document.getElementById("birth").value;

    var regex = /^(\d{2})-(\d{2})-(\d{4})$/;
    
 
    if(!regex.test(birthinput)) {
        return false;
    }
    

    var parts = birthinput.match(regex);
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[2], 10);
    var year = parseInt(parts[3], 10);
    
  
    if (year < 1900 || year > new Date().getFullYear()-18 ||month < 1 || month > 12) {
        return false;
    }
    
 
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    
    if (month === 2) {
        var isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        if (isLeap) {
            daysInMonth[1] = 29;
        }
    }
    

    if (day < 1 || day > daysInMonth[month - 1]) {
        return false;
    }
    

    return true;
};

function checkbirth()
{
	const binput=birthinput=document.getElementById("birth");
	if(!isbirthdayvalid())
	{
		binput.select();
        binput.focus();
		alert ("يرجى ادخال تاريخ الولادة بشكل صحيح");
	}
}
