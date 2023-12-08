import { UsersController } from '../users.controller.js';
import { describe, it } from "node:test"
import assert from 'assert'
import { checkPrismaConnection } from '../../prisma/prisma.js'

let user

describe('Checks the connection to the prisma', () => {
  it('The connection with the prism must be successful', async () => {
    try {
      await checkPrismaConnection();
    } catch (error) {

      throw error;
    }
  });
})

describe('UsersController', () => {

  it('Should create a new user', async () => {
    const usersController = new UsersController();
    const userData = {
      "id": "1",
      "name": "João",
      "email": "joao@example.com",
      "password": "12345"
    };
    const result = await usersController.create(userData);

    assert.strictEqual(result.message, "User created successfully");
    user = result.user;

  });

  it('Should return "Data is empty" when data is not provided for create new user', async () => {
    const usersController = new UsersController();
    const result = await usersController.create();

    assert.strictEqual(result, "Data is empty");
  });

  it('Find user by id', async () => {
    const usersController = new UsersController();
    const result = await usersController.getById(user.id);

    assert.deepEqual(result, user);
  });

  it('Find all users', async () => {
    const usersController = new UsersController();
    const result = await usersController.getAll();
    assert.deepStrictEqual(result[result.length - 1], user);
  });

  it('Remove user by id', async () => {
    const usersController = new UsersController();
    const result = await usersController.remove(user.id);

    assert.deepEqual(result, "User is removed successfully");
  })

  it('Should show error 400 when searching for a user to remove', async () => {
    const usersController = new UsersController();
    try {
      await usersController.getById(user.id);
    } catch (error) {
      assert.strictEqual(error.message, 'User not found');
      assert.strictEqual(error.statusCode, 400);
      assert.strictEqual(error.name, 'Bad Request');
    }
  })


  it('Should throw an error when the user is not found', async () => {
    const usersController = new UsersController();
    try {
      await usersController.getById(user.id);
    } catch (error) {
      assert.strictEqual(error.message, 'User not found');
      assert.strictEqual(error.statusCode, 400);
      assert.strictEqual(error.name, 'Bad Request');
    }
  });

})
