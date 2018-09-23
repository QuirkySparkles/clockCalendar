const clockDocument = document.currentScript.ownerDocument;

class Clock extends HTMLElement {
    constructor() {
        super();
        
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

        this.displayTimeUnit("#ss", seconds);
        this.displayTimeUnit("#mm", minutes);
        this.displayTimeUnit("#hh", hours);
    }
    
    displayTimeUnit(unit, digits) {
        if (digits < 10) {
            digits = "0" + digits;
        }
        
        if (unit === "#ss") {
            digits = ":" + digits;
        }
        
        this.shadowRoot.querySelector(unit).innerHTML = digits;
    }
    
    changeScreenFormat() {
        let secondsElement = this.shadowRoot.querySelector("#ss");
        let isSecondsShown = secondsElement.style.display;
        
        if (isSecondsShown === "inline") {
            secondsElement.style.display = "none";
        } else {
            secondsElement.style.display = "inline";
        }
    }
}

customElements.define("the-clock", Clock);
