function calculate_tip(event){
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let service_quality = document.getElementById('service_quality').value;
    let num_people = document.getElementById('people').value;

    if(bill == '' || service_quality == 0){
        alert("Please, input the values")
        return;
    }
    
    if(num_people == "" || num_people == 1){
        num_people = 1;
        document.getElementById('each').style.display = "none";
    }

    else{
        document.getElementById('each').style.display = "block";
    }

    let total = (bill * service_quality) / num_people;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('total_tip').style.display = "block";
}

document.getElementById('total_tip').style.display="none";
document.getElementById('each').style.display="none";

document.getElementById('tips_form').addEventListener('submit',calculate_tip);
