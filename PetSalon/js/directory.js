console.log("directory");

function display() {
    // Create the variables we need
    var pets = salon.pets
    const petsSection = document.getElementById("pets");
    var text = "";
    var icon = "";
    var dogIcon = '<i class="fas fa-dog"></i>';
    var catIcon = '<i class="fas fa-cat"></i>';
    var birdIcon = '<i class="fas fa-crow"></i>';
    var unknown = '<i class="fas fa-question-circle"></i>';



    // Travel the desired array -- in this case (salon.pets)
    for (var i = 0; i < pets.length; i++) {
        console.log(pets[i]);
        if (pets[i].type === "Dog") {
            icon = dogIcon;
        } else if (pets[i].type === "Cat") {
            icon = catIcon;
        } else if (pets[i].type === "Bird") {
            icon = birdIcon;
        } else {
            icon = unknown;
        }


        // Create the HTML text
        text += `
        <div class="pet">
            <h2> Name: ${pets[i].name} </h2>
            ${icon}
            <p> Age: ${pets[i].age} </p>
            <p> Gender: ${pets[i].gender} </p>
            <p> Type: ${pets[i].type} </p>
            <p> Breed: ${pets[i].breed} </p>
            <p> Immunizations: ${pets[i].immunizations} </p>
            <p> Sterile: ${pets[i].sterile} </p>
            <p> Service: ${pets[i].service} </p>
            <p> Price: ${pets[i].price} </p>
            <p> Owners Name: ${pets[i].ownersName} </p>
            <p> Contact Phone: ${pets[i].contactPhone} </p>

        </div>
        `;

    }

    petsSection.innerHTML = text;
}




// Display the HTML text into the Document Object Model (DOM)



// Use the Display Function
display();