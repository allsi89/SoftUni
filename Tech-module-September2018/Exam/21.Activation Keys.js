function solve(input) {
    let line = input[0];
    let arr = [];

    for (let l of line) {
        if (!isNaN(l)) {
            let number = 9 - Number(l);
            arr.push(number);
        } else {
            arr.push(l);
        }
    }
    arr = arr.join('');

    arr = arr.split('&');
    let valid = /^([A-Za-z0-9]{16,25})$/g;
    let keys = [];

    for (let row of arr) {
        if (row.match(valid)) {
            let text = '';

            if (row.length === 16) {
                let currentRow = row;

                for (let i = 0; i < currentRow.length; i += 4) {
                    let seq = currentRow.substr(i, 4);
                    text += '-' + seq;
                }
            } else {
                let currentRow = row;

                for (let i = 0; i < currentRow.length; i += 5) {
                    let seq = currentRow.substr(i, 5);
                    text += '-' + seq;
                }
            }
            text = text.replace('-', '');
            for (let ch of text) {
                let number = ch.match(/\d/g);

                if (ch === ch.toLowerCase()) {
                    let symbol = ch.toUpperCase();
                    text = text.replace(ch, symbol);
                }

            }
            keys.push(text);
        }
    }
    keys = keys.join(', ');
    console.log(keys);
}

solve(['t1kjZU764zIME6Dl9ryD0g1U8&-P4*(`Q>:x8\\yE1{({X/Hoq!gR.&rg93bXgkmILW188m&KroGf1prUdxdA4ln&U3WH9kXPY0SncCfs']);

//function solve(input) {
//   let keys = input[0].split('&');
//
//   let output = [];
//   for (const key of keys) {
//     if (/^[\dA-Za-z]{16}$/.test(key) || /^[\dA-Za-z]{25}$/.test(key) ) {
//
//       if (key.length === 16) {
//         let first = subtractDigits(key.substring(0, 4).toUpperCase());
//         let second = subtractDigits(key.substring(4, 8).toUpperCase());
//         let thrid = subtractDigits(key.substring(8, 12).toUpperCase());
//         let fourth = subtractDigits(key.substring(12).toUpperCase());
//         output.push(`${first}-${second}-${thrid}-${fourth}`);
//       } else {
//         let first = subtractDigits(key.substring(0, 5).toUpperCase());
//         let second = subtractDigits(key.substring(5, 10).toUpperCase());
//         let thrid = subtractDigits(key.substring(10, 15).toUpperCase());
//         let fourth = subtractDigits(key.substring(15, 20).toUpperCase());
//         let fifth = subtractDigits(key.substring(20).toUpperCase());
//         output.push(`${first}-${second}-${thrid}-${fourth}-${fifth}`);
//       }
//     }
//   }
//
//   console.log(output.join(', '));
//
//   function subtractDigits(str) {
//     let newSubstr = '';
//     for (let index = 0; index < str.length; index++) {
//       if (!isNaN(Number(str[index]))) {
//         let newNum = 9 - Number(str[index]);
//         newSubstr += newNum;
//       } else {
//         newSubstr += str[index];
//       }
//     }
//
//     return newSubstr;
//   }
// }