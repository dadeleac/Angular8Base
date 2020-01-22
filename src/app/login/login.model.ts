
export interface User {
    id: number;
    username: string;
    password: string;
    role: Role;
    token?: string;
}

export enum Role {
    User = 'user', 
    Admin = 'admin'
}