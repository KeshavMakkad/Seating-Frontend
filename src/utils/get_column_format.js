const get_column_format = (arr) => {
    console.log("get_row_formats called");
    const column_format = {}
    let curr_col_name = "";
    let count = 0;
    for(let curr of arr){
        if(curr === '-'){
            if(curr_col_name !== "")column_format[curr_col_name] = count;
            count = 0;
            continue;
        }

        if(curr !== ""){
            curr_col_name = curr;
        }
        count++
    }
    column_format[curr_col_name] = count;
    return column_format;
}


export default get_column_format;