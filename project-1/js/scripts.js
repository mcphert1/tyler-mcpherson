document.addEventListener('DOMContentLoaded', () => {
    function getGreeting() {
        const now = new Date();
        const hours = now.getHours();
        let greeting;

        if (hours < 12) {
            greeting = "Good morning!";
        } else if (hours < 18) {
            greeting = "Good afternoon!";
        } else {
            greeting = "Good evening!";
        }

        return greeting;
    }

    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = getGreeting();
});
