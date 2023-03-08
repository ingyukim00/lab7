const courseList = [
    {
        code: "ACIT 1620",
        name: "Fundamental Web Technologies"
    },

    {
        code: "ACIT 1630",
        name: "Database Systems"
    },

    {
        code: "ACIT 1310",
        name: "Technical Math for IT"
    },

    {
        code: "ACIT 1100",
        name: "Organizational Behaviour"
    }
];

let result = 0;
let user_input;
let new_item;

do {
    user_input = prompt("Type fore digit number: ");
    if (isNaN(user_input) === false && user_input.length === 4) {
        result = 1;
    }
} while (result != 1);




