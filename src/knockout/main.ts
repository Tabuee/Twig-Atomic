import {KnockoutComponent} from './KnockoutComponent';
import {Button} from './content/button/Button';
import {KnockoutInitializer} from './KnockoutInitializer';
import * as ko from 'knockout';
// browserify -p [ tsify --project tsconfig.json ] --debug main.ts > ./../dist/deliveryBundle.js

function registerComponent(data: { name: string, template: string }) {
    let component = new KnockoutComponent(data.template, new Button(data.name));
    let initializer = new KnockoutInitializer([component]);
    initializer.initialize();

    var element = document.querySelector('.ko-root');
    if (element !== null) {
        ko.applyBindings({}, element);
    }
}

window['registerComponent'] = registerComponent;



