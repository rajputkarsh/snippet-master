import { model, Schema } from "mongoose";
import ITag from "../interfaces/models/tag";


const tagSchema: Schema = new Schema<ITag>(
  {
    id: {
      required: true,
      type: String,
    },
    clerkUserId: {
      type: String,
      required: true,
    },
    name: {
      required: true,
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

tagSchema.set("toObject", { getters: true, virtuals: true });
tagSchema.set("toJSON", {
  virtuals: true,
  getters: true,
});

const User = model<ITag>("Tag", tagSchema);

export default User;
