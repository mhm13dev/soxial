import { Injectable } from "@nestjs/common";
import { IConfig } from "./types";
import { getConfig } from "./helpers";

@Injectable()
export class ConfigService {
  private config: IConfig;

  get core(): IConfig["core"] {
    return this.getConfig().core;
  }

  get db(): IConfig["db"] {
    return this.getConfig().db;
  }

  get auth(): IConfig["auth"] {
    return this.getConfig().auth;
  }

  private getConfig(): IConfig {
    if (!this.config) {
      this.config = getConfig();
    }
    return this.config;
  }
}
