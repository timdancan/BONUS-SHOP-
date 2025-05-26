export interface BonusLocalization {
    en: string;
    ar: string;
}

export interface Bonus {
    id: string;
    brand: 'cosmoswin' | 'betfinal';
    name: BonusLocalization;
    description?: BonusLocalization;
    requiresKYC: boolean;
    depositCountMin?: number;
    depositCountMax?: number;
    balanceMustBeZero?: boolean;
    registrationWithinLastDays?: number;
    availableCountries?: string[];
}