let exercises = [
        { name: "Squats", time: 10, intensity: "medium", body: "legs", equipment: "none", location: "indoor", calories: },
        { name: "Running", time: 60, intensity: "high", body: "legs", equipment: "none", location: "outdoor", calories: },
        { name: "Lunges", time: 10, intensity: "medium", body: "legs", equipment: "none", location: "indoor", calories: },
        { name: "Calf Raises", time: 5, intensity: "low", body: "legs", equipment: "none", location: "indoor", calories: },
        { name: "Jump Squats", time: 10, intensity: "high", body: "legs", equipment: "none", location: "indoor", calories: },
        { name: "Jumping Jacks", time: 10, intensity: "low", body: "core", equipment: "none", location: "indoor", calories: },
        { name: "Hike", time: 40, intensity: "medium", body: "legs", equipment: "none", location: "outdoor", calories: },
        { name: "Bicep Curls", time: 20, intensity: "medium", body: "arms", equipment: "weights", location: "indoor", calories: },
        { name: "Plank", time: 5, intensity: "high", body: "arms", equipment: "yoga mat", location: "indoor", calories: },
        { name: "Sit-ups", time: 20, intensity: "high", body: "core", equipment: "yoga mat", location: "indoor", calories: }
    ];

    let completedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];
    let weeklyGoal = localStorage.getItem("goal") || 0;

    document.getElementById("workoutForm").addEventListener("submit", function(e){
        e.preventDefault();

        let userTime = parseInt(document.getElementById("time").value);
        let userIntensity = document.getElementById("intensity").value;
        let userBody = document.getElementById("body").value;
        let userEquipment = document.getElementById("equipment").value;
        let userLocation = document.getElementById("location").value;

        let matches = exercises.map(exercise => {
            let score = 0;

            if(exercise.time <= userTime) score++;
            if(exercise.intensity === userIntensity) score++;
            if(exercise.body === userBody) score++;
            if(exercise.equipment === userEquipment) score++;
            if(exercise.location === userLocation) score++;
            
            return {exercise, score};
        });

        function displayResults(list){
            let results = document.getElementById("results");
            results.innerHTML = "";


            )
        });

        function updateWeeklySummary(){
            let totalMinutes = completedWorkouts
            document.getElementById("weeklySummary")

            document.getElementById("goalStatus")

            document.getElementById("setGoal").addEventListener("click", function() {
                weeklyGoal = parseInt(document.getElementById("goalInput").value);
                localStorage.setItem("goal", weeklyGoal);
                updateWeeklySummary();
            });

        updateWeeklySummary();

    }

/*

1. make your exercise class with the properties in your wireframe
2. create some exercises using the class
3. create the html input form, like your wireframe
4. build the output table that shows on a search

Can the user enter a search and get the right exercises displayed on the page?

*/

