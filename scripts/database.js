/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            name: "Bart",
            food: "crustaceans",
            length: 3,
            species: "Trout",
            location: "Lake",
            image: "trout2.webp"
        },
        {
            name: "Bert",
            food: "shrimp",
            length: 4,
            species: "Salmon",
            location: "River",
            image: "salmon.jpg"
        },
        {
            name: "Birt",
            food: "crab",
            length: 5,
            species: "Tuna",
            location: "Ocean",
            image: "tuna2.webp"
        },
        {
            name: "Bort",
            food: "lobster",
            length: 6,
            species: "Cod",
            location: "Ocean",
            image: "cod_fish.jpg"
        },
        {
            name: "Burt",
            food: "prawns",
            length: 7,
            species: "Bass",
            location: "Lake",
            image: "Bass.jpg"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({ ...fish }))
}