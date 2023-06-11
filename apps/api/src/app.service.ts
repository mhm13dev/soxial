import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getSoxial() {
    return { message: "Get Soxial" };
  }
}
