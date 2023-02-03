import { faker } from '@faker-js/faker';

export async function __userFactory(){
    return {
        name: faker.name.firstName(),
        cpf: "111.444.777-35",
        birthday: '1980-01-01'
    }
}