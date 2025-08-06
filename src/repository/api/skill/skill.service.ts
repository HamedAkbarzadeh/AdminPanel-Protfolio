import api from "../@base/base.service"

export class SkillServiceApi {

    public static async get() {
        return await api({
            method: 'GET',
            url: 'skills'
        })
    }



}