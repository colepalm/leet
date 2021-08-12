/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let matrix = new Array(numRows).fill(0).map(() => new Array(1).fill(''));
    let currentRow = 0, currentColumn = 0;
    for (let i = 0; i < s.length; i++) {
        if (currentRow === numRows - 1) {
            matrix[currentRow][currentColumn] = s.charAt(i++)
            if (numRows > 1) {
                while(currentRow > 0) {
                    matrix[--currentRow][++currentColumn] = s.charAt(i++);
                }
                matrix[++currentRow][++currentColumn] = s.charAt(i);
                currentRow++;
            } else {
                while(i < s.length) {
                    matrix[currentRow][++currentColumn] = s.charAt(i++);

                }
            }
        } else {
            matrix[currentRow++][currentColumn] = s.charAt(i);
        }
    }

    let output = '';
    for (let i = 0; i < numRows; i++) {
        matrix[i].forEach(letter => {
            output += letter
        })
    }

    return output;
};

// console.log(convert("PAYPALISHIRING", 3))
// console.log(convert("PAYPALISHIRING", 4))
// console.log(convert("A", 1))
// console.log(convert("AB", 1))
// console.log(convert("ABC", 1))
console.log(convert("ABCDE", 2))

