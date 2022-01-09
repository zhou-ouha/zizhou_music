export function drag(obj) {
    let boxPosL = 0;
    let boxPosR = 0;
    obj.addEventListener('mousedown', down);

    function down(event) {
        event = event || window.event;
        boxPosL = event.clientX - obj.offsetLeft;
        boxPosR = event.clientY - obj.offsetTop;
        obj.setCapture && obj.setCapture();
        document.addEventListener("mousemove", addMove);
        document.addEventListener("mouseup", addUp);
    }

    function addMove(event) {
        let finaL = event.clientX - boxPosL;
        let finaR = event.clientY - boxPosR;
        obj.style.top = finaR + 'px';
        obj.style.left = finaL + 'px';
    }

    function addUp() {
        document.removeEventListener('mouseup', addUp);
        document.removeEventListener('mousemove', addMove);
        obj.releaseCapture && obj.releaseCapture();
    }
}