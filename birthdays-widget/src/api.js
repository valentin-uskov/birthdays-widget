export const loadUsers = async (dateFrom, dateTo) => {

    const response = await fetch(`https://birthday-api.anromsocial.com/api/birthdays?dateFrom=${dateFrom}&dateTo=${dateTo}`);

    return await response.json();
};
