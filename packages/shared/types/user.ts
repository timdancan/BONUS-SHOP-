export interface User {
    username: string;
    depositCount: number;
    registrationDate: string;
    country: string;
    isKYCApproved: boolean;
    currentBalance: number;
}