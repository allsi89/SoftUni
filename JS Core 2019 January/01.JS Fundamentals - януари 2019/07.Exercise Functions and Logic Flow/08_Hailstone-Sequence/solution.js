//jshint esversion:6
function getNext() {
    let num = Number(document.getElementById('num').value);
    let result = document.getElementById('result');

    function hailStoneSeq(n) {
        let seq = [n];

        while (n !== 1) {
            if (n % 2 === 0) {
                n /= 2;
            } else {
                n = (n * 3) + 1;
            }

            seq.push(n);
        }
        return seq.join(' ');
    }

    result.innerHTML = hailStoneSeq(num) + ' ';
}