import to from "await-to-js"
import api from "../@base/base.service"

export class SkillServiceApi {
    public static async get() {
        return await to(api({
            method: 'GET',
            url: 'skills'
        }))
    }

    public static async post(data: any) {

        return await to(api({
            method: 'POST',
            url: 'skills/create',
            data,
        }))
    }
}