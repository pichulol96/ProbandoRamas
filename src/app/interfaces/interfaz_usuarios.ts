export interface usuario {
    page: number;
    per_page: number;
    total: number;
    total_page: number;
    avatar: number;
    data:RegUsers[];
    ed: ed;
  }

  export interface ed{
    company: string;
    url: String;
    tex: String;
  }
  export interface RegUsers{
    id: number;
    first_name: String;
    last_name: String;
    email: String;
    avatar: String;
  }
  