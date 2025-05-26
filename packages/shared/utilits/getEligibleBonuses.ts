import { User } from "../types/user";
import bonuses from "../mock-data/bonuses-mock-data.json";

export function getEligibleBonuses(user: User, brand: string, currentDate: Date) {
    if (brand === 'cosmoswin' && !user.isKYCApproved) {
        return [];
    }

    const brandBonuses = bonuses.filter((bonus) => bonus.brand === brand);

    return brandBonuses.filter((bonus) => {
        debugger
        if (
            bonus.depositCountMin !== undefined &&
            user.depositCount < bonus.depositCountMin
        ) {
            return false;
        }
        if (
            bonus.depositCountMax !== undefined &&
            user.depositCount > bonus.depositCountMax
        ) {
            return false;
        }

        if (bonus.balanceMustBeZero && user.currentBalance !== 0) {
            return false;
        }

        if (
            bonus.availableCountries &&
            !bonus.availableCountries.includes(user.country)
        ) {
            return false;
        }

        if (bonus.registrationWithinLastDays) {
            const registrationDate = new Date(user.registrationDate);
            const diffTime = currentDate.getTime() - registrationDate.getTime();
            const diffDays = diffTime / (1000 * 3600 * 24);
            if (diffDays > bonus.registrationWithinLastDays) {
                return false;
            }
        }

        if (bonus.requiresKYC && !user.isKYCApproved) {
            return false;
        }

        return true;
    });
}