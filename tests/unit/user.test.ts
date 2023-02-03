import { jest } from "@jest/globals";
import UserRepository from "../../src/repositories/UserRepository";
import UserServices from "../../src/services/UserService";
import { __userUnitFactory } from "../factories/userFactory";

jest.mock("../../src/repositories/UserRepository.ts");

beforeEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
});

describe("User service suit test", () => {
  it("should successfully add a new user with valid cpf", async () => {

    const user = await __userUnitFactory();

    jest.spyOn(UserRepository, "insert").mockImplementationOnce(():any => {
        return;
    });

    await UserServices.register(user);

    expect(UserRepository.insert).toBeCalled();
  });

  it("should fail to add new user with invalid cpf", async () => {
    const user = await __userUnitFactory();
    user.cpf = "11144477736";

    const result = UserServices.register(user);

    expect(result).rejects.toEqual({
        status: 422,
        message: "Invalid cpf!"
    });
  });

  it("should fail to add an already registered user", async () => {
    const user = await __userUnitFactory();

    jest.spyOn(UserRepository, "findByCpf").mockImplementationOnce(():any => {
      return true;
    });

    const result = UserServices.register(user);

    expect(result).rejects.toEqual({
        status: 401,
        message: "Cpf already registered!"
    });
  });

  it("should successfully return registered user data", async () => {
    const user = await __userUnitFactory();

    jest.spyOn(UserRepository, "findByCpf").mockImplementationOnce(():any => {
      return {
        id:1,
        name: user.name,
        cpf: user.cpf,
        birthday: user.birthday
      }
    });

    const result = await UserServices.getUser(user.cpf);

    expect(result).toEqual({
      id:1,
      name: user.name,
      cpf: user.cpf,
      birthday: user.birthday
    });
  });

  it("should fail to get unregistered user data", async () => {
    const user = await __userUnitFactory();

    jest.spyOn(UserRepository, "findByCpf").mockImplementationOnce(():any => {
      return false
    });

    const result = UserServices.getUser(user.cpf);

    expect(result).rejects.toEqual({
      status: 404,
      message: "This CPF wasn't registered!"
    });
  });

  it("should successfully return data respecting pagination", async () => {
    jest.spyOn(UserRepository, "getUsers").mockImplementationOnce(():any => {
      return [
        {
          id:1
        },
        {
          id:2
        }
      ]
    });

    jest.spyOn(UserRepository, "getAllUsers").mockImplementationOnce(():any => {
      return [
        {
          id:1
        },
        {
          id:2
        },
        {
          id:3
        }
      ]
    });

    const result1 = await UserServices.getUsers(1);

    expect(result1.length).toEqual(2);

    const result2 = await UserServices.getUsers(0);

    expect(result2.length).toEqual(3);
  });
});

afterAll(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
});