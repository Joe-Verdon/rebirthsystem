export class SystemActor extends Actor {
    async applyDamage(damage) {
        var modifiedDamage;
        if (damage <= 1) { modifiedDamage = 0; }
        else if (damage <= 3) { modifiedDamage = 1; }
        else if (damage <= 5) { modifiedDamage = 2; }
        else if (damage <= 7) { modifiedDamage = 3; }
        else if (damage <= 9) { modifiedDamage = 4; }
        else if (damage <= 11) { modifiedDamage = 5; }
        else { modifiedDamage = 6; }

        const { value } = this.system.resources.health;
        await this.update({ "system.resources.health.value": value - modifiedDamage })

        await ChatMessage.implementation.create({
            content: `${this.name} took ${modifiedDamage} damage!`
        })
    }
}