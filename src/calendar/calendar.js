const calendarDocument = document.currentScript.ownerDocument;

class Calendar extends HTMLElement {
    constructor() {
        super();
        Calendar.changeableCalendar = Calendar.changeableCalendar.bind(this);
        
        this.addEventListener("click", e => {
            this.switchDateFormat();
        });
    }
    
    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: "open"});
        const calendarTemplate = calendarDocument.querySelector("#calendar");
        const calendarInstance = calendarTemplate.content.cloneNode(true);
        
        shadowRoot.appendChild(calendarInstance);
        Calendar.changeableCalendar();
    };

    static changeableCalendar() {
        let initialDate = new Date();
        let year = initialDate.getFullYear();
        let month = initialDate.getMonth() + 1;
        let day = initialDate.getDate();

        this.displayDateUnit(".dd", day);
        this.displayDateUnit(".mm", month);
        this.displayDateUnit(".yy", year);
        this.displayDateUnit(".yy-eu", year);
    }
    
    displayDateUnit(unit, digits) {
        const fieldsToPopulate = this.shadowRoot.querySelectorAll(unit);
        
        if (digits < 10) {
            digits = "0" + digits;
        }
        
        if (unit === ".yy-eu") {
            digits = String(digits);
            digits = digits[2] + digits[3];
        }
        
        fieldsToPopulate.forEach(field => field.innerHTML = digits);
    }
    
    switchDateFormat() {
        let euCalendarElement = this.shadowRoot.querySelector("#calendar-eu");
        let uaCalendarElement = this.shadowRoot.querySelector("#calendar-ua");
        
        switchDisplay(euCalendarElement, uaCalendarElement);
    }
}

customElements.define("the-calendar", Calendar);
