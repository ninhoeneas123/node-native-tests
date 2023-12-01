import { UsersController } from '../users.controller.js';
import { describe, it} from "node:test"
import assert from 'assert'


describe('UsersController', () => {
  it('should create a new user', () => {
    const usersController = new UsersController();

    const userData = {
      "id": "1",
      "name": "João",
      "email": "joao@example.com"
    };

    const result = usersController.create(userData);
    const userNumber = usersController.users.length - 1 

    assert.strictEqual(result, "User created successfully");
    assert.deepStrictEqual(usersController.users[userNumber], userData);
  });

  it('should return "Data is empty" when data is not provided', () => {
    const usersController = new UsersController();

    const result = usersController.create();

    assert.strictEqual(result, "Data is empty");
  });
});
