import { faker } from "@faker-js/faker";

export function createRandomUser() {
	return {
		id: faker.string.uuid(),
		username: faker.internet.userName(),
		img: faker.image.avatar(),
		company: faker.company.name(),
	};
}
