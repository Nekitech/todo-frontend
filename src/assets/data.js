import uniqid from 'uniqid';
const data = {
    currGroupId: '',
    data: [
        {
            idGroup: uniqid(),
            nameGroup: 'Мой день',
            tasks: [
                {
                    id: uniqid(),
                    text: "Завтра сходить в магазин, купить хлеба",
                    status: "needTodo"
                }
            ]
        },
        {
            idGroup: uniqid(),
            nameGroup: "Моя жизнь",
            tasks: [
                {
                    id: uniqid(),
                    text: "Завтра сходить в магазин, купить молока",
                    status: "needTodo"
                }
            ]
        }
    ]
}
export default data;