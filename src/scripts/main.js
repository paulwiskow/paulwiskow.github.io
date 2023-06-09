// function testFunction() {
//     let text = document.getElementById("bodypart").value.toLowerCase();
//     document.getElementById("bodypart").value = "";

//     returnWorkouts(text);
// }

let armWorkout = ["Bicep curls", "Tricep pulldown", "Skull crusher"];
let legWorkout = ["Squat", "Deadlift", "Lunges"];
let backWorkout = ["Lat pulldowns", "Pull-ups", "Rows"];
let chestWorkout = ["Bench press", "Incline press", "Cable flies"];
let fullWorkout = [];

let arm = false;
let leg = false;
let back = false;
let chest = false;

window.onload = () => {
    const startButton = document.getElementById("start");
    setTimeout(() => { startButton.style.opacity = '1'; }, 1500);
}

function returnArms() {
    arm = !arm;

    if (arm) {
        fullWorkout.push(armWorkout);
    } else {
        fullWorkout.splice(armWorkout)
    }
}

function returnLegs() {
    leg = !leg;

    if (leg) {
        fullWorkout.push(legWorkout);
    } else {
        fullWorkout.splice(legWorkout);
    }
}

function returnBack() {
    back = !back;

    if (back) {
        fullWorkout.push(backWorkout);
    } else {
        fullWorkout.splice(backWorkout)
    }
}

function returnChest() {
    chest = !chest;

    if (chest) {
        fullWorkout.push(chestWorkout);
    } else {
        fullWorkout.splice(chestWorkout);
    }
}

function generate() {
    writeFromArray(fullWorkout);
    reset();
}

function writeFromArray(arr) {
    const numOfWorkouts = 2;
    const para = document.createElement("p");

    if (arr.length == 1) {
        for (let i = 0; i < arr[0].length; i++) {
            let text = arr[0][i] + "\n";
            const node = document.createTextNode(text);
            para.appendChild(node);
            para.innerHTML += "<br>";
        }
    } else if (arr.length > 1) {
        for (let i = 0; i < arr.length; i ++) {
            for (let j = 0; j < numOfWorkouts; j++) {  
                // let index = Math.floor(Math.random() * arr[i].length);
                let text = arr[i][j];

                // arr[i].splice(index,index)

                const node = document.createTextNode(text);
                para.appendChild(node);
                para.innerHTML += "<br>";
            }
        }
    }

    const div = document.getElementById("output");
    div.style.textAlign = "center";
    div.style.fontSize = "50px";
    div.style.fontFamily = "'IBM Plex Sans', sans-serif";
    div.style.position = "relative";
    div.style.top = "-100px";
    if (div.innerHTML === "") {
        div.appendChild(para);
    }

    armWorkout = ["Bicep curls", "Tricep pulldown", "Skull Crusher"];
    legWorkout = ["Squat", "Deadlift", "Lunges"];
    backWorkout = ["Lat Pulldowns", "Pull-ups", "Rows"];
    chestWorkout = ["Bench press", "Incline press", "Cable Flies"];
}

function clearDiv() {
    const div1 = document.getElementById("output");
    div1.innerHTML = "";
    reset();
}

function reset() {
    arm = false;
    leg = false;
    chest = false;
    back = false;

    fullWorkout = [];
}

