const { Document } = require("mongoose");

export interface Employee extends Document {
    _id: string;
    first_name: string;
    last_name: string;
    number: string;
    email: string;
    gender: string;
    id?: string;
    photo?: string
  }