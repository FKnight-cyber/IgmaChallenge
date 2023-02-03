import app from "../../src/app";
import prisma from "../../src/database";
import supertest from "supertest";
import { __userFactory } from "../factories/userFactory";

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE;`;
});

describe("POST /register", () => {
    it("should sucessfully register an user with valid cpf", async () => {
        const user = await __userFactory();

        const result = await supertest(app).post("/register").send(user);

        const checkUser = await prisma.user.findUnique({where:{cpf:user.cpf}});

        expect(result.status).toBe(201);

        if(checkUser) {
            expect(checkUser.name).toEqual(user.name);
        };
    });

    it("should fail to register an user with invalid cpf", async () => {
        const user = await __userFactory();

        user.cpf = "11144477736"

        const result = await supertest(app).post("/register").send(user);

        expect(result.status).toBe(422);
        expect(result.text).toBe("Invalid cpf!");
    });

    it("should fail to register an user that is already registered", async () => {
        const user = await __userFactory();

        await supertest(app).post("/register").send(user);
        const result = await supertest(app).post("/register").send(user);

        expect(result.status).toBe(401);
        expect(result.text).toBe("Cpf already registered!");
    });
});

describe("GET /user", () => {
    it("should return registered user data", async () => {
        const user = await __userFactory();

        await supertest(app).post("/register").send(user);

        const result = await supertest(app).get("/user").query({ cpf: user.cpf }).send();

        expect(result.body.name).toEqual(user.name);
        expect(result.body.cpf).toEqual(user.cpf);
    });

    it("should fail to find unregistered user data", async () => {
        const user = await __userFactory();

        const result = await supertest(app).get("/user").query({ cpf: user.cpf }).send();

        expect(result.status).toBe(404);
        expect(result.text).toBe("This CPF wasn't registered!");
    });
});

describe("GET /users", () => {
    it("should return registered users data, respecting pagination", async () => {
        const user1 = await __userFactory();
        const user2 = await __userFactory();
        user2.cpf = "47410743743";
        const user3 = await __userFactory();
        user3.cpf = "14438583314";
        const user4 = await __userFactory();
        user4.cpf = "87649293378";
        const user5 = await __userFactory();
        user5.cpf = "48312863893";
        const user6 = await __userFactory();
        user6.cpf = "58325407433";

        await supertest(app).post("/register").send(user1);
        await supertest(app).post("/register").send(user2);
        await supertest(app).post("/register").send(user3);
        await supertest(app).post("/register").send(user4);
        await supertest(app).post("/register").send(user5);
        await supertest(app).post("/register").send(user6);

        const result1 = await supertest(app).get("/users").query({ page: 1 }).send();

        expect(result1.body.length).toBe(5);
        expect(result1.body[0].name).toEqual(user1.name);
        expect(result1.body[1].name).toEqual(user2.name);
        expect(result1.body[2].name).toEqual(user3.name);
        expect(result1.body[3].name).toEqual(user4.name);
        expect(result1.body[4].name).toEqual(user5.name);

        const result2 = await supertest(app).get("/users").query({ page: 2 }).send();

        expect(result2.body.length).toBe(1);
        expect(result2.body[0].name).toEqual(user6.name);

        const result3 = await supertest(app).get("/users").query({ page: 999 }).send();

        expect(result3.body.length).toBe(0);

        const result4 = await supertest(app).get("/users").send();

        expect(result4.body.length).toBe(6);
    });
});

afterAll( async () => {
    prisma.$disconnect();
});