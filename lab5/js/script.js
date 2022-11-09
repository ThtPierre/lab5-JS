function userForm() {
        var firstname = document.getElementById('firstname').value;
        var lastname = document.getElementById('lastname').value;
        var email = document.getElementById('email').value;
        var address = document.getElementById('address').value;
        var city = document.getElementById('city').value;
        var province = document.getElementById('province').value;
        var membership = document.getElementsByName('test');
        var membershipChoice;
        for (let i=0 ; i<membership.length ; i++){
            if (membership[i].checked) {
                membershipChoice = membership[i].value;
            }
        }
        document.getElementById("result").innerHTML = "Full name : " + firstname + " " + lastname + "<br>" + "Email : " + email + "<br>" + "Address : " + address + "<br>City : " + city +", " + province + "<br>" + "Membership : " + membershipChoice;
    }


const form = document.getElementById('bouton');
form.addEventListener('click', myExcelFuns);


function myExcelFuns(){
    let numberStr = document.getElementById('numbers').value;
    if (numberStr == null || numberStr == "") {
        alert("Please type your numbers");
        return;
    }else{
        var numbersArray = numberStr.split(' ');
        console.log(numbersArray);
        var choice = document.getElementsByName('quest');
        var choiceValue;
        for (let i=0 ; i<choice.length ; i++){
            if (choice[i].checked) {
                choiceValue = choice[i].value;
            }
        }

        console.log(choiceValue);
        
        
        if(choiceValue == 'autosum'){
            var sum = 0;
            for(var i = 0; i < numbersArray.length; i++){
                sum += parseInt(numbersArray[i]);
            }
            document.getElementById('result').innerHTML = sum;
        }
        else if(choiceValue == 'average'){
            var sum = 0;
            for(var i = 0; i < numbersArray.length; i++){
                sum += parseInt(numbersArray[i]);
            }
            var average = sum / numbersArray.length;
            document.getElementById('result').innerHTML = average;
        }
        else if(choiceValue == 'max'){
            document.getElementById('result').innerHTML = Math.max(...numbersArray);
        }
        else if(choiceValue == 'min'){
            document.getElementById('result').innerHTML = Math.min(...numbersArray);
        }
    }

    };
    
