let exercises = [
        { name: "Squats", time: 10, intensity: "medium", body: "legs", equipment: "none", location: "indoor", calories: 80},
        { name: "Running", time: 60, intensity: "high", body: "legs", equipment: "none", location: "outdoor", calories: 700},
        { name: "Lunges", time: 10, intensity: "medium", body: "legs", equipment: "none", location: "indoor", calories: 50},
        { name: "Calf Raises", time: 5, intensity: "low", body: "legs", equipment: "none", location: "indoor", calories: 15},
        { name: "Jump Squats", time: 10, intensity: "high", body: "legs", equipment: "none", location: "indoor", calories: 110},
        { name: "Jumping Jacks", time: 5, intensity: "low", body: "core", equipment: "none", location: "indoor", calories: 60},
        { name: "Hike", time: 40, intensity: "medium", body: "legs", equipment: "none", location: "outdoor", calories: 300},
        { name: "Bicep Curls", time: 20, intensity: "medium", body: "arms", equipment: "weights", location: "indoor", calories: 80},
        { name: "Plank", time: 1, intensity: "high", body: "arms", equipment: "yoga mat", location: "indoor", calories: 5},
        { name: "Sit-ups", time: 20, intensity: "high", body: "core", equipment: "yoga mat", location: "indoor", calories: 90}
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

            //sort exercises by score
            exercises.sort(compare);

            let list = document.getElementById("results");
            list.innerHTML = "";

            for(let i=0; i<exercises.length; i++){
                let item = document.createElement("lists");

                item.innerHTML = exercises[i].name + " (score: " + exercises[i].score + ")<br>";

                item.onclick = function(){
                    totalMinutes += exercises[i].exercise.time;
                    localStorage.setItem("total", totalMinutes);
                    document.getElementById("total").textContent = totalMinutes;
                };
                list.appendChild(item);
            }
        }

        function compare(a,b){
            if (a.score < b.score) {
            return -1;
        }
            if (a.score > b.score) {
            return 1;
        }
        return 0;
        }

// 1. make your exercise class with the properties in your wireframe
// 2. create some exercises using the class
// 3. create the html input form, like your wireframe
// 4. build the output table that shows on a search

// Can the user enter a search and get the right exercises displayed on the page?

// */

