import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema({
  timestamps: true,
})
export class User {
  @Prop({
    unique: true,
    lowercase: true,
    trim: true,
  })
  email: string;

  @Prop({
    lowercase: true,
    trim: true,
  })
  username?: string;

  @Prop()
  password: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

export type UserDocument = HydratedDocument<User>;

export type SafeUserAuthenticated = Pick<
  UserDocument,
  "_id" | "email" | "username" | "createdAt" | "updatedAt"
>;

export type SafeUser = Pick<
  UserDocument,
  "_id" | "email" | "username" | "createdAt" | "updatedAt"
>;
