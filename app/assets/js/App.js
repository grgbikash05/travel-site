var $ = require('jquery');
import Person from './modules/Person';

class Adult extends Person {
    payTaxes() {
        console.log(this.name + " now owes $0 in taxes.");
    }
}

var jane = new Adult("Jane Doe", "red");
jane.payTaxes();
jane.greet();