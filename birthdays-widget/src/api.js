export const loadUsers = async (dateFrom, dateTo) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/birthdays?dateFrom=${dateFrom}&dateTo=${dateTo}`);

    return await response.json();
};
