/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let matrix = new Array(numRows).fill(0).map(() => new Array(1).fill('_'));
    let currentRow = 0, currentColumn = 0;
    for (let i = 0; i < s.length; i++) {
        if (currentRow === numRows - 1) {
            matrix[currentRow][currentColumn] = s.charAt(i++)
            while(currentRow > 0) {
                matrix[--currentRow][++currentColumn] = s.charAt(i++);
            }
            currentRow++;
            currentColumn++;
        } else {
            matrix[currentRow++][currentColumn] = s.charAt(i)
        }
    }

    console.log(matrix)
};

convert("PAYPALISHIRING", 4)
