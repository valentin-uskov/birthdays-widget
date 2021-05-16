import moment from 'moment';

export const loadUsers = async () => {

    // FIXME - move me anywhere ?
    console.log('FIXME - api.js is static')

    const dateFrom = moment().subtract(7, 'd').format('DD.MM').toString();
    const dateTo = moment().subtract(-7,'d').format('DD.MM').toString();

    const response = await fetch(`https://birthday-api.anromsocial.com/api/birthdays?dateFrom=${dateFrom}&dateTo=${dateTo}`);

    return await response.json();
};
