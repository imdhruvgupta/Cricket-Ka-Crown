let token = localStorage.getItem('sportlivetimeentries')

let tokenObject = JSON.parse(token);
tokenObject = JSON.parse(tokenObject.nofreeluncheon)["190722"];

let firedReachedPaywallEvent = tokenObject.firedReachedPaywallEvent;

console.log(firedReachedPaywallEvent);
if(firedReachedPaywallEvent) {
    localStorage.clear();
    document.location.reload();
} else {
    console.log(object);
}