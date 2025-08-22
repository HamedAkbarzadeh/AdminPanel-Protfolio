export interface ProjectsDto {
  id?: number;
  title: string;
  description: string;
  image: string;
  link: string;
  status: ProjectsType;
}

enum ProjectsType {
  ACTIVE,
  INACTIVE
}

export interface ProjectsReq {
  title: string,
  image: string,
  description: string,
  link: string,
  status: ProjectsType
}
