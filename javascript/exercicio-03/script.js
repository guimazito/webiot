students = [
    {
        name: "Cláudio",
        age: 33,
        grades: [
            10, 9, 8, 5
        ]
    },
    {
        name: "João",
        age: 22,
        grades: [
            7, 6, 5.5, 7.6
        ]
    },
    {
        name: "Maria",
        age: 30,
        grades: [
            1, 3, 3, 2, 10
        ]
    }
]


function calculateGradeAverage(){
    
    console.log('Calculating the Grade Average...\n');
    students.forEach(student => {
        var sum = 0;
        for (var grade of student.grades) {
            sum += grade
        }
        let quantity = student.grades.length;
        let average = sum / quantity;
        student.average = average;
    });

    console.log(students);

}

function calculateClassification() {
    
    calculateGradeAverage();
    console.log('\nCalculating the Student Classification...\n');
    students.forEach(student => {
        var status = '';
        
        if (student.average >= 7) {
            status = 'Aprovado';
        } else if ((student.average >= 5) && (student.average <= 6.9)) {
            status = 'Recuperação';
        } else if (student.average < 5) {
            status = 'Reprovado';
        }

        student.status = status;
    });

    console.log(students);

}

calculateClassification();