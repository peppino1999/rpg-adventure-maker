export enum UserTypes {
    MASTER = `master`,
    PLAYER = `player`
}


export type User = {
    id?: number,
    type: UserTypes.MASTER | UserTypes.PLAYER,  
    partyId?: string,
    firstName?: string,
    lastName?: string,
    city?: string,
    email: string,
    phone?: string,
    notes?: string,
    password?: string,
    confirmPassword?: string
}

export interface UserAuthRes {
    accessToken: string,
    user: User
}
