const url = "http://localhost:3001/api/v1/birthdays";

export const getAllBirthdays = () => {
    return fetch(url).then((response) => response.json());
};

