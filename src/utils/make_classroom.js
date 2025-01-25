const make_classroom = (column_format) => {
    const classroom = {};
    const number_of_rows = column_format.num_of_rows;

    for (let curr in column_format) {
        if (curr !== "num_of_rows") {
            const number_of_seats = column_format[curr];

            let column = [];
            for (let i = 0; i < number_of_rows; i++) {
                const arr = new Array(number_of_seats).fill("");
                column.push(arr);
            }
            classroom[curr] = [number_of_seats, column];
        }
    }
    return classroom;

};

export default make_classroom;
