import { moment } from 'moment';

export const loadUsers = async () => {

    // FIXME - move me anywhere ?
    const dateTo = moment().format(-7, 'd').format();
    const dateFrom = moment().subtract(7,'d').format();

    const response = await fetch(`https://birthday-api.anromsocial.com/api/birthdays?dateFrom=${dateFrom}&dateTo=${dateTo}`);

    return await response.json();
};
