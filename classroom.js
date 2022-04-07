/** @param {number[]} grades */
export function getNumberOfGrades(grades) {
    return grades.length;
}

/** @param {number[]} grades */
export function getSumGrades(grades) {
    let sum = 0;
    grades.forEach(function(grade) {
        sum += grade
    });
    return sum;
}

/** @param {number[]} grades */
export function getAverageValue(grades) {
    return getSumGrades(grades) / grades.length;
}

/** @param {number[]} grades */
export function getPassingGrades(grades) {
    return grades.filter(function(grade) {
        return grade >= 10;
    });
}

/** @param {number[]} grades */
export function getFailingGrades(grades) {
    return grades.filter(function(grade) {
        return grade < 10;
    });
}

/** @param {number[]} grades .......... if grades is less then 20 add 1, if grades is equal to 20 keep it 20 */
export function getRaisedGrades(grades) {
    return grades.map(function(grade) {
        if (grade + 1 > 20) {
            return 20;
        }
        return grade + 1;
    });
}


************************** Using Arrow Function ***********************
    Challenge solution
Solution
classroom.js

/** @param {number[]} grades */
export const getNumberOfGrades = grades => {
    return grades.length;
}

/** @param {number[]} grades */
export const getSumGrades = grades => {
    let sum = 0;
    grades.forEach(grade => sum += grade);
    return sum;
}

/** @param {number[]} grades */
export const getAverageValue = grades => {
    return getSumGrades(grades) / grades.length;
}

/** @param {number[]} grades */
export const getPassingGrades = grades => {
    return grades.filter(grade => grade >= 10);
}

/** @param {number[]} grades */
export const getFailingGrades = grades => {
    return grades.filter(grade => grade < 10);
}

/** @param {number[]} grades */
export const getRaisedGrades = grades => {
    return grades.map(grade => {
        if (grade + 1 > 20) {
            return 20;
        }
        return grade + 1;
    });
}
Your answer
/** @param {number[]} grades */
export const getNumberOfGrades = grades => {
    // TODO: return the number of grades
        return grades.length;
}

/** @param {number[]} grades */
export const getSumGrades = grades => {
    // TODO: return the sum of all the grades
    let sum = 0;
    grades.forEach(grade => sum += grade);
    return sum;
   // console.log(sum);
}
//return strings.map( str => str.length );
/** @param {number[]} grades */
export const getAverageValue = grades => {
    // TODO: return the average value of all grades (sum of all grades divided by the total number of grades)
    //return getSumGrades / getNumberOfGrades;
    const gradeNumber = grades.length;
    let sum = 0;
    grades.forEach(grade => sum += grade);
    let avg = sum/gradeNumber;
    return avg;
    //console.log(avg);

    }

/** @param {number[]} grades */
export const getPassingGrades = grades => {
    // TODO: return all passing grades (10 and above)
    return grades.filter(grade => grade >= 10);

}

/** @param {number[]} grades */
export const getFailingGrades = grades => {
    // TODO: return all failing grades (9 and below)
    return grades.filter(grade => grade <= 9);
}

/** @param {number[]} grades */
export const getRaisedGrades = grades => {
    // TODO: return all the grades raised by 1 (grades should not exceed 20)
    return grades.map(grade => {
        if(grade + 1 > 20){
            return 20;
        }
        return grade+1;
    });

}
