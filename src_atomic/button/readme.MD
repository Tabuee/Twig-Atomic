## Twig

### api ref
- buttonId: string
- buttonIcon: string
- disabled: bool
- states: Array<string>



- menu button: `class="button menu__button"`
- sub menu button: `class="button sub-menu__button"`
- form text button: `class="button form-text__button"`

## SCSS
- global class button for easy js access
- states should have spec +1 (button.state) so import on top is no issue
- o/m overrides should have same spec to be overridable by state      

import states with: `@import 'states/*';`
or don't since load order may cause problems    

### o/m vs state

state: reusable

o/m: specific

mostly styles...
- that affect other elements (margin, height, width, z-index, ...)
- that effect element flow (display: absolute)
- that occur only once? (background-color specific due to parent element's background-color)


not modifier properties:
- padding ?/ maybe modifier
- margin
- height
- width
- display
- z-index
- ...


modifier properties:
- background-color
- border
- padding
- color

                                                                                                
//@import '../**/_button.scss'; for o/m diff -> group things change for same reason

`modifier should be something, that can be removed any time without compromising the element's appearance`



why bad many states
- combing states cause problems override priority => cta + failure breaks failure
- maybe even favour single state (not enforceable?)


