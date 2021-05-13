
let myName = "Garrett Harris";

console.log("Name: " + myName.toUpperCase())
console.log("Career: Full Stack Web Developer")
console.log("Description: idk")

console.log(" ")

let myInterests = ["Games", "Tv", "Movies", "Food"]

console.log("My Interests:")

for(i = 0; i < myInterests.length; i++) {
    console.log("* " + myInterests[i])
}

console.log("\n")

function displayPosition(company, job, description) {
    console.log("* " + company + ", " + job + ", " + description)
};

console.log("My Previous Experience:")

displayPosition("Cracker Barrel", "Dishwasher", "did everything")
displayPosition("Innovate Birmingham", "Web Development T.A.", "Helped Josh teach students and not mess around at aatl")


let skills = [
    {
        skill: "Coding",
        isCool: true
    },
    {
        skill: "Working Out",
        isCool: true
    },
    {
        skill: "Working at the barrel",
        isCool: false
    },
    {   
        skill: "Drummer",
        isCool: true
    }, 
    {
        skill: "being in band",
        isCool: false
    }
]

function displaySkills(theSkill, isItCool) {
    if (isItCool == true) {
        console.log("* BAM: " + theSkill)
    } else {
        console.log("* " + theSkill)
    }
}


console.log("\n")
console.log("My Skills:")


for (i = 0; i < skills.length; i++) {
    displaySkills(skills[i].skill, skills[i].isCool)
}