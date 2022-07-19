import uniqid from 'uniqid';
const data = {
    currGroupId: '',
    currTaskId: '',
    data: [
        {
            idGroup: uniqid(),
            nameGroup: 'Мой день',
            tasks: [
                {
                    id: uniqid(),
                    text: "Завтра сходить в магазин, купить хлеба",
                    status: "needTodo",
                    description: "",
                    date: ""
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
                    status: "needTodo",
                    description: "",
                    date: ""
                }
            ]
        }
    ]
}
export default data;