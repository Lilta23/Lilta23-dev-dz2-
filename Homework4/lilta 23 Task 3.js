class Warrior {
    constructor() {
        this.level = 1;
        this.experience = 100;
        this.rank = "Pushover";
        this.achievements = [];
    }

    battle(enemyLevel) {
        if (enemyLevel < 1 || enemyLevel > 100) {
            return "Invalid level";
        }

        if (this.level + 5 <= enemyLevel) {
            return "You've been defeated";
        }

        const levelDifference = enemyLevel - this.level;
        let expEarned = 0;

        if (levelDifference <= -2) {
            expEarned = 0;
        } else if (levelDifference === -1) {
            expEarned = 5;
        } else if (levelDifference === 0) {
            expEarned = 10;
        } else {
            expEarned = 20 * levelDifference * levelDifference;
        }

        this.experience += expEarned;
        this.updateLevelAndRank();

        if (levelDifference >= 2) {
            return "Easy fight";
        } else if (levelDifference === 1) {
            return "A good fight";
        } else {
            return "An intense fight";
        }
    }

    training(achievement) {
        const [description, expEarned, minLevel] = achievement;
        if (this.level >= minLevel) {
            this.experience += expEarned;
            this.achievements.push(description);
            this.updateLevelAndRank();
            return description;
        }
        return "Not strong enough";
    }

    updateLevelAndRank() {
        if (this.level < 100) {
            this.level = Math.floor(this.experience / 100) + 1;
        } else {
            this.level = 100;
            this.experience = 10000;
        }

        this.rank = this.calculateRank(this.level);
    }

    calculateRank(level) {
        const ranks = [
            "Pushover",
            "Novice",
            "Fighter",
            "Warrior",
            "Veteran",
            "Sage",
            "Elite",
            "Conqueror",
            "Champion",
            "Master",
            "Greatest",
        ];
        return ranks[Math.min(Math.floor((level - 1) / 10), ranks.length - 1)];
    }
}

const bruce_lee = new Warrior();
console.log(bruce_lee.level());
console.log(bruce_lee.experience());
console.log(bruce_lee.rank());
console.log(bruce_lee.achievements());
console.log(bruce_lee.training(["Defeated Chuck Norris", 9000, 1]));
console.log(bruce_lee.experience());
console.log(bruce_lee.level());
console.log(bruce_lee.rank());
console.log(bruce_lee.battle(90));
console.log(bruce_lee.experience());
console.log(bruce_lee.achievements());
