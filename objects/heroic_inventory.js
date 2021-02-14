function solve(input) {
    let result = []

    input.forEach(el => {
        let [hero_name, hero_lv, hero_items] = el.split(' / ');
        let represent_result = {};
        represent_result.name = hero_name;
        represent_result.level = Number(hero_lv);
        represent_result.items = hero_items ? hero_items.split(', ') : [];
        result.push(represent_result)
    })
    return JSON.stringify(result)
}


console.log(solve(
    ['Jake / 1000 / Gauss, HolidayGrenade']

));