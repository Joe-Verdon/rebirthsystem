const { HTMLField, NumberField, SchemaField, StringField } = foundry.data.fields;

/* ------------------ */
/*    Actor Models    */
/* ------------------ */

class ActorDataModel extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        // All Actors have resources
        return {
            resources: new SchemaField({
                health: new SchemaField({
                    min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
                    value: new NumberField({ required: true, integer: true, min: 0, initial: 10 }),
                    max: new NumberField({ required: true, integer: true, min: 0, initial: 10 }),
                })
            })
        };
    }
}

export class CharacterDataModel extends ActorDataModel { }

/* ------------------ */
/*    Item Models     */
/* ------------------ */

class ItemDataModel extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {
            rarity: new StringField({
                required: true,
                blank: false,
                options: ["common", "uncommon", "rare", "legendary"],
                initial: "common"
            })
        };
    }
}

export class WeaponDataModel extends ItemDataModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            damage: new NumberField({ required: true, integer: true, positive: true, initial: 1 })
        };
    }
}