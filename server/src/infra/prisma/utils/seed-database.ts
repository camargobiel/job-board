import { faker } from '@faker-js/faker';
import prisma from '..';
import { UserEntity } from '@/domain/entities/user';

export async function seedDatabase() {
  const users: UserEntity[] = [];
  await Promise.all(
    Array.from({ length: 5 }, async () => {
      const user: UserEntity = {
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
      };
      users.push(user);
      await prisma.user.create({ data: user });
    }),
  );
  return { users };
}
