import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  SafeUser,
  SafeUserAuthenticated,
  User,
  UserDocument,
} from "src/models/user.model";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>
  ) {}

  async getMe(id: string) {
    const user = await this.findUserById(id);
    if (!user) {
      throw new Error("User not found");
    }
    return this.mapSafeUserAuthenticated(user);
  }

  async createUser(email: string, hashedPassword: string) {
    if (await this.userModel.exists({ email })) {
      throw new Error("Email already used");
    }

    const user = new this.userModel({
      email,
      password: hashedPassword,
    });

    const savedUser = await user.save();
    return this.mapSafeUser(savedUser);
  }

  mapSafeUserAuthenticated(user: UserDocument): SafeUserAuthenticated {
    const userObject = user.toObject();

    return {
      _id: userObject._id,
      email: userObject.email,
      username: userObject.username,
      createdAt: userObject.createdAt,
      updatedAt: userObject.updatedAt,
    };
  }

  mapSafeUser(user: UserDocument): SafeUser {
    const userObject = user.toObject();

    return {
      _id: userObject._id,
      email: userObject.email,
      username: userObject.username,
      createdAt: userObject.createdAt,
      updatedAt: userObject.updatedAt,
    };
  }

  async findUserById(id: string) {
    return this.userModel.findById(id);
  }

  async findUserByEmailOrUsername(emailOrUsername: string) {
    return this.userModel.findOne({
      $or: [{ email: emailOrUsername }, { username: emailOrUsername }],
    });
  }
}
