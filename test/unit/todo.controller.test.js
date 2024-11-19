const TodoController = require("../../controllers/todo_controller");
const TodoModel = require("../../models/todo_model");
const httpMocks = require("node-mocks-http");
const newTodo = require("../mock-data/new-todo.json");

// mock the todo model
TodoModel.create = jest.fn();

let req, res, next;
beforeEach(() => {
  res = httpMocks.createResponse();
  req = httpMocks.createRequest();
  next = null;
});

describe("Todo Controller.todoCreate", () => {
  it("should have a create method", () => {
    expect(typeof TodoController.todoCreate).toBe("function");
  });

  // test the create method
  it("should call todoModel.create", () => {
    req.body = newTodo;
    TodoController.todoCreate(req, res, next);
    expect(TodoModel.create).toBeCalledWith(newTodo);
  });

  // check for 201 response (201 means created)
  it("should return 201 response code", () => {
    req.body = newTodo;
    TodoController.todoCreate(req, res, next);
    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
  });
});
