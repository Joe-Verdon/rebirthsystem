import { SystemActor } from "./module/documents.mjs";
import { CharacterDataModel, WeaponDataModel } from "./module/data-models.mjs";

Hooks.once("init", () => {
    // Configure custom document implementations
    CONFIG.Actor.documentClass = SystemActor;
    CONFIG.Item.documentClass = SystemItem;

    // Configure System Data Models
    CONFIG.Actor.dataModels = {
        character: CharacterDataModel
    };
    CONFIG.Item.dataModels = {
        weapon: WeaponDataModel
    };

    // Configure trackable attributes
    CONFIG.Actor.trackableAttributes = {
        character: {
            bar: ["resource.health"]
        }
    }
});