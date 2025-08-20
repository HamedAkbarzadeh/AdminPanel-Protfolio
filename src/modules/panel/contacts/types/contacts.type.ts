export interface ContactsDto {
  id?: number;
  title: string;
  description: string;
  image: string;
  link: string;
  status: ContactsType;
}

enum ContactsType {
  ACTIVE,
  INACTIVE
}

export interface ContactsReq {
  contacts: string
}
