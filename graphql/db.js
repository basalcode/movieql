export const people = [
    {
        id: "0",
        name: "Alex",
        age: 20,
        gender: "male"
    },
    {
        id: "1",
        name: "Jhone",
        age: 22,
        gender: "male"
    },
    {
        id: "2",
        name: "Jennie",
        age: 21,
        gender: "female"
    },
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));

    return filteredPeople[0];
}