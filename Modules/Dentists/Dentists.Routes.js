import express from "express";
import {
  addDentist,
  deleteDentist,
  getAllDentists,
  getDentist,
  updateDentist,
} from "./Dentists.Controller.js";
import validation from "../../middleware/validation.js";
import auth from "../../middleware/auth.js";
import {
  dentistRegisterValidationSchema,
  dentistUpdateValidationSchema,
} from "./Dentists.Validation.js";
const dentistsRoutes = express.Router();

dentistsRoutes.get("/dentist/all", auth, getAllDentists);
dentistsRoutes.delete("/dentist/:id", auth, deleteDentist);
dentistsRoutes.patch(
  "/dentist/:id",
  [auth, validation(dentistUpdateValidationSchema, "body")],
  updateDentist
);
dentistsRoutes.get("/dentist/:id", auth, getDentist);
dentistsRoutes.post(
  "/dentist/add",
  validation(dentistRegisterValidationSchema, "body"),
  addDentist
);

export default dentistsRoutes;
