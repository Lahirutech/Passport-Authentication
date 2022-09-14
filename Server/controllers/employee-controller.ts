let Employee = require("../models/employee");
import { Request, Response, NextFunction } from "express";
import { Employee } from "../types";

// @desc    Add employee
// @route   Post /api/employee/post
// @access  Public
const postEmployee = (req: Request, res: Response) => {
  const { first_name, last_name, email, number, gender } = req.body;

  const employee = new Employee({
    first_name: first_name,
    last_name: last_name,
    email: email,
    number: number,
    gender: gender,
  });

  employee
    .save(employee)
    .then((data: Employee) => {
      res.status(200).send({
        message: "Employee added",
        data: data,
      });
    })
    .catch((err: any) => {
      res.status(500).send({
        message: err.message || "Some error occurred while adding Employee",
      });
    });
};

// @desc   Find employee
// @route   Post /api/employee/get
// @access  Public

const findEmployee = (req: Request, res: Response) => {
  if (req.params.id) {
    const id = req.params.id;
    Employee.findById(id)
      .then((data: Employee) => {
        if (!data) {
          res.status(404).send({ message: "Not found user with id " + id });
        } else {
          console.log(data);
          res.status(200).send(data);
        }
      })
      .catch(() => {
        res.status(500).send({ message: "Erro retrieving user with id " + id });
      });
  } else {
    Employee.find()
      .then((user: Employee) => {
        res.status(200).send(user);
      })
      .catch((err: any) => {
        res.status(500).send({
          message:
            err.message || "Error Occurred while retriving user information",
        });
      });
  }
};

// @desc   Edit employee
// @route   Put /api/employee/edit/:id
// @access  Public
const editEmployee = (req: Request, res: Response) => {
  const id = req.params.id;
  Employee.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
    new: true,
  })
    .then((data: Employee) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update user with ${id}. Maybe user not found!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch(() => {
      res.status(500).send({ message: "Error Update user information" });
    });
};

// @desc   Delete employee
// @route   Delete /api/employee/delete/:id
// @access  Public
const deleteEmployee = (req: Request, res: Response) => {
  const id = req.params.id;

  Employee.findByIdAndDelete(id)
    .then((data: any) => {
      if (!data) {
        res
          .status(404)
          .send({
            message: `Cannot Delete with id ${id}. Maybe id is wrong`
          });
      } else {
        res.send({
          message: "User was deleted successfully!",
        });
      }
    })
    .catch(() => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
};

module.exports = { postEmployee, findEmployee, deleteEmployee, editEmployee };
