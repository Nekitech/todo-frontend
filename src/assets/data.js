function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

exports.data = [
    {
        idGroup: Date.now() + getRandomInt(10000),
        nameGroup: 'Мой день',
        tasks: [
            {
                id: Date.now() + getRandomInt(10000),
                text: "Завтра сходить в магазин, купить хлеба",
                status: "needTodo"
            }
        ]
    },
    {
        idGroup: Date.now() + getRandomInt(10000),
        nameGroup: "Моя жизнь",
        tasks: [
            {
                id: Date.now() + getRandomInt(10000),
                text: "Завтра сходить в магазин, купить молока",
                status: "needTodo"
            }
        ]
    }
]