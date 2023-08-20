import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "src/models/user.model";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>
  ) {}

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

  mapSafeUser(user: UserDocument) {
    const userObject = user.toObject();

    return {
      _id: userObject._id,
      email: userObject.email,
      username: userObject.username,
      createdAt: userObject.createdAt,
      updatedAt: userObject.updatedAt,
    };
  }
}
