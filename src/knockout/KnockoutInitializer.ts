import * as ko from "knockout";
import {KnockoutComponent} from "./knockOutComponent";

export class KnockoutInitializer {

    private knockoutComponents: Array<KnockoutComponent>;

    public constructor(
        knockoutComponents: Array<KnockoutComponent>
    ) {
        this.knockoutComponents = knockoutComponents;
    }

    public initialize() {
        for (let knockoutComponent of this.knockoutComponents) {
            ko.components.register(knockoutComponent.name, knockoutComponent);
        }
    }
}
