let exercises = [
        { name: "Squats", time: 10, intensity: "medium", body: "legs", equipment: "none", location: "indoor"},
        { name: "Running", time: 60, intensity: "high", body: "legs", equipment: "none", location: "outdoor"},
        { name: "Lunges", time: 10, intensity: "medium", body: "legs", equipment: "none", location: "indoor"},
        { name: "Calf Raises", time: 5, intensity: "low", body: "legs", equipment: "none", location: "indoor"},
        { name: "Jump Squats", time: 10, intensity: "high", body: "legs", equipment: "none", location: "indoor"},
        { name: "Jumping Jacks", time: 5, intensity: "low", body: "core", equipment: "none", location: "indoor"},
        { name: "Hike", time: 40, intensity: "medium", body: "legs", equipment: "none", location: "outdoor"},
        { name: "Bicep Curls", time: 20, intensity: "medium", body: "arms", equipment: "weights", location: "indoor"},
        { name: "Plank", time: 1, intensity: "high", body: "arms", equipment: "yoga mat", location: "indoor"},
        { name: "Sit-ups", time: 20, intensity: "high", body: "core", equipment: "yoga mat", location: "indoor"}
    ];

    let totalMinutes = localStorage.getItem("total");
    if(totalMinutes === null) {
        totalMinutes = 0;
    } else {
        totalMinutes = parseInt(totalMinutes);
    }

    document.getElementById("total").textContent = totalMinutes;
    
    document.getElementById("submit").addEventListener("click", function(e) {

        let userTime = parseInt(document.getElementById("time").value);
        let userIntensity = document.getElementById("intensity").value;
        let userBody = document.getElementById("body").value;
        let userEquipment = document.getElementById("equipment").value;
        let userLocation = document.getElementById("location").value;

        for(let i = 0; i < exercises.length; i++){
            let ex = exercises[i];
            let score = 0;

            if(ex.time <= userTime) score++;
            if(ex.intensity === userIntensity) score++;
            if(ex.body === userBody) score++;
            if(ex.equipment === userEquipment) score++;
            if(ex.location === userLocation) score++;

            ex.score = score;
            exercises[i] = ex;
        }

        display();
    });

    function display(){

        exercises.sort(compare);

        let list = document.getElementById("results");
        let o = "";

        for(let i=0; i<exercises.length; i++){

            o += "<tr>";
            o += "<td><input value='" + exercises[i].time + "' type='checkbox' onclick='addMins(this)'></td>";
            o += "<td>" + exercises[i].name + " (score: " + exercises[i].score + ")</td>";
            o += "</tr>";

            list.innerHTML = o;
        }
    }

    function compare(a, b){
        if (a.score < b.score) {
            return -1;
        }
        if (a.score > b.score) {
            return 1;
        }
        return 0;
        }

function addMins(checkbox){
    console.log(checkbox.checked)
    let total = parseInt(document.getElementById("total").innerHTML);
    
    if(checkbox.checked){
        document.getElementById("total").innerHTML = total + parseInt(checkbox.value);
    } else {
        document.getElementById("total").innerHTML = total - parseInt(checkbox.value);
    }
    
}