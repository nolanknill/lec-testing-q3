import { faker } from '@faker-js/faker';

export const generateStoreWithId = (id) => ({
    id,
    address: faker.address.streetAddress(true)
});

const stores = [];
for (let i = 1; i <= 3; i++) {
    stores.push(generateStoreWithId(i));
}

export default stores;