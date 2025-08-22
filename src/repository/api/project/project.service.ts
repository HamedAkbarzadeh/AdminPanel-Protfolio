import to from "await-to-js";
import api from "../@base/base.service";

export class ProjectsServiceApi {
  public static async get() {
    return await to(api({
      method: 'GET',
      url: 'protfolio'
    }))
  }

  public static async post(data: any) {
    return await to(api({
      method: 'POST',
      url: 'protfolio/create',
      data
    }))
  }
}
