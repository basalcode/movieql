const alex = {
    name: "Alex",
    age: 20,
    gender: "male"
}

const resolvers = {
    Query: {
        person: () => alex
    }
}

export default resolvers;