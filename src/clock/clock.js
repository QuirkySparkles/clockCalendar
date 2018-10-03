const clockDocument = document.currentScript.ownerDocument;

class Clock extends HTMLElement {
    constructor() {
        super();
        
        this.secondsElement = "";
        this.minutesElement = "";
        this.hoursElement = "";
        this.tickyClock = this.tickyClock.bind(this);
        this.addEventListener("click", e => {
            this.changeScreenFormat();
        });
    }
    
    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: "open"});
        const clockTemplate = clockDocument.querySelector("#clock");
        const clockInstance = clockTemplate.content.cloneNode(true);
        
        shadowRoot.appendChild(clockInstance);
        
        this.secondsElement = shadowRoot.querySelector("#ss");
        this.minutesElement = shadowRoot.querySelector("#mm");
        this.hoursElement = shadowRoot.querySelector("#hh");
        activateTime(this.tickyClock);
    };
    
    tickyClock() {
        let initialTime = new Date();
        let hours = initialTime.getHours();
        let minutes = initialTime.getMinutes();
        let seconds = initialTime.getSeconds();
        
        if (hours === 0 && minutes === 0 && seconds === 0) {
            Calendar.changeableCalendar();
        }

        this.displayTimeUnit(seconds, this.secondsElement, "seconds");
        this.displayTimeUnit(minutes, this.minutesElement);
        this.displayTimeUnit(hours, this.hoursElement);
    }
    
    displayTimeUnit(digits, display, seconds) {
        if (digits < 10) {
            digits = "0" + digits;
        }
        
        if (seconds) {
            digits = ":" + digits;
        }
        
        if (digits == display.innerHTML) {
            return;
        }
        
        display.innerHTML = digits;
    }
    
    changeScreenFormat() {
        let isSecondsHidden = this.secondsElement.classList;
        
        if (isSecondsHidden.length) {
            isSecondsHidden.remove("hidden");
        } else {
            isSecondsHidden.add("hidden");
        }
    }
}

customElements.define("the-clock", Clock);
