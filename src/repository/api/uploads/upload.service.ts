import to from "await-to-js"
import api from "../@base/base.service"

export class UploadsServiceApi {
  public static async image(data: FormData) {

    return await to(api({
      method: 'POST',
      url: 'uploads/image',
      data,
      headers: { 'Content-Type': 'multipart/form-data' },
    }))
  }
}
