let date1 = new Date('2000.01.01');
let date2 = new Date();

function countFridays13(){
    let count = 0;
    for (let day = date1; day<= date2; day.setDate(day.getDate()+1)) {
        if (day.getDay() == 5 && day.getDate() == 13) {
            count++;
        }
    }
    return count;
};
console.log(countFridays13());