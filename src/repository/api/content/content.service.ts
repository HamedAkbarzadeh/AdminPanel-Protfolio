import to from "await-to-js";
import api from "../@base/base.service";

export class ContactsServiceApi {
  public static async get() {
    return await to(api({
      method: 'GET',
      url: 'contacts'
    }))
  }

  public static async post(data: any) {
    return await to(api({
      method: 'POST',
      url: 'contacts/create',
      data
    }))
  }
}
