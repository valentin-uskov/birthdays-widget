import moment from 'moment';

export const loadUsers = async () => {

    // FIXME - move me anywhere ?
    const dateFrom = moment().subtract(7, 'd').format('MM.DD');
    const dateTo = moment().subtract(-7,'d').format('MM.DD');

    const response = await fetch(`https://birthday-api.anromsocial.com/api/birthdays?dateFrom=${dateFrom}&dateTo=${dateTo}`);

    return await response.json();
};
