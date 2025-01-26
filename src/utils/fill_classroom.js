
const fill_classroom = (classroom, data) => {
    let col_idx_store = 1;
    for(let column in classroom){
        const number_of_cols = classroom[column][0]
        const column_seating = classroom[column][1]
        for(let i= 0; i < column_seating.length; i++){
            let col_idx = col_idx_store;
            for(let j= 0; j < number_of_cols; j++){
                // console.log(i +" "+col_idx)
                column_seating[i][j] = data[i+1][col_idx];
                col_idx++
            }
        }
        col_idx_store += number_of_cols + 1;
        console.log(col_idx_store)
    }
    console.log(classroom)
    
    return classroom;
}
export default fill_classroom