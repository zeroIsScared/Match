const text =`..........56MDL.....
            ...........250USD......
            ...........23EUR.......
            ............45USD......`;

const re = /([(0-9)]+)(EUR|USD|MDL)/g;

let matches = text.matchAll(re);

const convertedInEur = [...matches].filter(item => item.includes('USD'))
                                   .map(item => `${Math.round(item[1] * 0.9168)}EUR`);

console.log(convertedInEur);

function getDataFromDB(){
    //Conect to DB
    const names =['Alex Muler', 'Miron Costin', 'Nicolae Titulescu', 'Vin Disel'];
    const grades =[9.5, 9.0, 7.0, 8.0];

    return names.map((element, index)=> {
        return {
            name:element, 
            grade: grades[index]};
        });
}
console.log(getDataFromDB());
function selectTopStudents(){
    return getDataFromDB().filter(element=> element.grade >=9.0);
    
}
console.log(selectTopStudents());


///Ways of concatinating arrays

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const concatArrays1 = arr1.concat(arr2);
console.log(concatArrays1);


arr1.push(...arr2);
console.log(arr1);




