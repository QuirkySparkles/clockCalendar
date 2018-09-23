const clockCalendarDocument = document.currentScript.ownerDocument;

class ClockCalendar extends HTMLElement {
    constructor() {
        super();
        
        this.addEventListener("contextmenu", e => {
            e.preventDefault();
            this.clockOrCalendar();
        });
    }
    
    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: "open"});
        const clockCalendarTemplate = clockCalendarDocument.querySelector("#clock-calendar");
        const clockCalendarInstance = clockCalendarTemplate.content.cloneNode(true);
        
        shadowRoot.appendChild(clockCalendarInstance);
    };

    clockOrCalendar() {
        let clockElement = this.shadowRoot.querySelector("the-clock");
        let calendarElement = this.shadowRoot.querySelector("the-calendar");
        
        switchDisplay(clockElement, calendarElement);
    }
}

customElements.define("clock-calendar", ClockCalendar);
