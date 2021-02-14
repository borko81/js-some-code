function solve(params) {
    if(params['dizziness'] == true) {
        params['levelOfHydrated'] += params['weight']*0.1*params['experience'];
        params['dizziness'] = false;
    }
    console.log(params);
    
}


solve(
    {
        weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true
    }
)