export interface Roles{
    suscriptor?: boolean;
    admin?:boolean;
}
export interface user{
    uid: string;
    email: string;
    emailVerified: boolean;
    role?:Roles;
}