export default function StrDate(dt, format) {
    let date = new Date(dt + 3600 * 2);

    const dayOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const month = ['Янв', 'Фев', 'Мар', 'Апр', 'Мая', 'Июня', 'Июля', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

    switch (format) {
        case 1:
            return dayOfWeek[date.getDay()];

        case 2:
            return month[date.getMonth()];

        case 3:
            return date.getDate() + " " + month[date.getMonth()];

        case 4:
            if (date.getMinutes() < 10) {
                return date.getHours() + ":0" + date.getMinutes();
            }
            else {
                return date.getHours() + ":" + date.getMinutes();
            }

        case 5:
            return date.getHours();

        default:
            break;
    }
}