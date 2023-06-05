// Create an array which value is the planets of the solar system.
const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

class Planet {
    constructor(name, div, colour, moons) {
        this.name = name;
        this.div = div;
        this.colour = colour;
        this.moons = moons;
    }
}
// Each planet should have a different background color. 
const planetColors = {
    Mercury: '#C6C6C6',
    Venus: '#E5C68E',
    Earth: '#2B82C6',
    Mars: '#D14C32',
    Jupiter: '#C9B18B',
    Saturn: '#E0C968',
    Uranus: '#8EC6C5',
    Neptune: '#3C55B5'
};
const planetsAndMoons = {
    Mercury: [],
    Venus: [],
    Earth: ['Moon'],
    Mars: ['Phobos', 'Deimos'],
    Jupiter: ['Io', 'Europa', 'Ganymede', 'Callisto'],
    Saturn: ['Mimas', 'Enceladus', 'Tethys', 'Dione', 'Rhea', 'Titan', 'Hyperion', 'Iapetus'],
    Uranus: ['Miranda', 'Ariel', 'Umbriel', 'Titania', 'Oberon'],
    Neptune: ['Naiad', 'Thalassa', 'Despina', 'Galatea', 'Larissa', 'Proteus', 'Triton', 'Nereid']
};

// For each planet in the array, create a <div> using createElement. 
// This div should have a class named "planet".
const solarSystem = [];
let sect = document.getElementsByClassName("listPlanets")[0];
for (let p of planets) {
    let s = new Planet(p, document.createElement("div"), planetColors[p], planetsAndMoons[p]);
    s.div.classList.add("planet", s.name.toLowerCase());

    // (Hint: you could add a new class to each planet - each class containing a different background-color).
    s.div.setAttribute('style','background-color:'+s.colour);

    // Finally append each div to the <section> in the HTML (presented below).
    let newDiv = document.createElement("div");
    newDiv.classList.add("row");
    sect.appendChild(newDiv);
    newDiv.appendChild(s.div);

    // console.log(s);
    solarSystem.push(s);
}
// console.log(solarSystem);

for (let p of solarSystem) {
    if (p.moons.length !== 0) {
        for (let m in p.moons) {
            let moonDiv = document.createElement("div");
            moonDiv.classList.add("moon");
            p.div.parentNode.appendChild(moonDiv);
        }
    } else {
        console.log(p.name, 'no moons');
    }

}
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?