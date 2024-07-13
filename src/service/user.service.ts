import IUser from "@/interfaces/models/user";
import User from "@/models/User.model";
import { HydratedDocument } from "mongoose";

export const createNewUser = (user: IUser): Promise<HydratedDocument<IUser>> => {
  return User.create(user);
}