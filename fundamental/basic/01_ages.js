function check_from_age(age_for_test) {

    function show_output(age, what) {
        console.log(`${age} ${what}`)
    }

    const age = Number(age_for_test)

    switch (age) {
        case ((0 <= age && age <= 2) ? age: -1):
            show_output(age, 'baby')
            break;
        case ((3 <= age && age <= 13) ? age : -1):
            console.log('Child');
            break;
        case ((14 <= age && age <= 16) ? age: -1):
            console.log('teenager')
            break;
        case ((17 <= age && age <= 20) ? age : -1):
            console.log('Adult')
            break;
        case ((50<=age && age<=100)) ? age: -1:
            console.log('Old')
            break;
        default:
            console.log('Out of baoundary')
            break
    }

}


check_from_age(20)
check_from_age(1)
check_from_age(100)