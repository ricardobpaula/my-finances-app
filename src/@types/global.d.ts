export declare global {
    interface User {
        id: string
        email: string
        firstName: string
        lastName: string
        createdAt: Date
        updatedAt: Date
    }

    interface Token {
        token: string
        expiresIn: Date
    }
}