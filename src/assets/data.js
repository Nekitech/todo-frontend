import uniqid from 'uniqid';

export const getDateTask = () => {
    let [day, month, year] = [new Date().getDate(), new Date().getMonth() + 1, new Date().getFullYear()]
    month = (month < 10) ? ('0'+month) : (month)

    return day + '.' + month + '.' + year
}

const data = {
    currGroupId: '',
    currTaskId: '',
    data: [
        {
            idGroup: uniqid(),
            nameGroup: 'Мой день',
            tasks: [
                {
                    _id: uniqid(),
                    text: "Завтра сходить в магазин, купить хлеба",
                    status: "needTodo",
                    description: "",
                    date: getDateTask()
                }
            ]
        },
        {
            idGroup: uniqid(),
            nameGroup: "Моя жизнь",
            tasks: [
                {
                    _id: uniqid(),
                    text: "Завтра сходить в магазин, купить молока",
                    status: "needTodo",
                    description: "",
                    date: getDateTask()
                }
            ]
        }
    ]
}
export default data;