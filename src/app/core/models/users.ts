export type User = {
    id: number,
    firstName: string,
    lastName: string,
    city: string,
    email: string,
    phone: string,
    notes: string,
    password?: string,
    confirmPassword?: string
}

export interface UserAuthRes {
    accessToken: string,
    user: User
}
