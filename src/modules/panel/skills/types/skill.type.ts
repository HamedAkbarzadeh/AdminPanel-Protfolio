export interface SkillDto {
    id?: number;
    name: string;
    rait: number;
    status: StatusType;
    createdAt?: Date
}

enum StatusType {
    ACTIVE,
    INACTIVE
}

export interface SkillReq {
    skill: string
}