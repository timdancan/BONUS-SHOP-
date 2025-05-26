import {User} from "../types/user";

export const users: User[] =[
    {
        username: "zeroDepUser",
        depositCount: 0,
        registrationDate: "2025-01-10",
        country: "Brazil",
        isKYCApproved: false,
        currentBalance: 0
    },
    {
        username: "oneDepUser",
        depositCount: 1,
        registrationDate: "2025-01-15",
        country: "USA",
        isKYCApproved: false,
        currentBalance: 0
    },
    {
        username: "kycOneDepUser",
        depositCount: 1,
        registrationDate: "2025-01-17",
        country: "USA",
        isKYCApproved: true,
        currentBalance: 0
    },
    {
        username: "heavyUser",
        depositCount: 4,
        registrationDate: "2025-01-18",
        country: "Canada",
        isKYCApproved: true,
        currentBalance: 10
    },
    {
        username: "japaneseUser",
        depositCount: 2,
        registrationDate: "2025-01-01",
        country: "Japan",
        isKYCApproved: false,
        currentBalance: 0
    }
]
