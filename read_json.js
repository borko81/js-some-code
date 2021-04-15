let data = [{
    "id": 70111470,
    "title": "Die Hard",
    "rating": [4.0]
}, {
    "id": 654356453,
    "title": "Bad Boys",
    "rating": [5.0]
}, {
    "id": 65432445,
    "title": "The Chamber",
    "rating": [4.0]
}, {
    "id": 675465,
    "title": "Fracture",
    "rating": [5.0]
}]

function show_id_and_title() {
    // Check rating if is big, movie is good else not so good
    let result = [];
    data.forEach(function (video) {
        if (video.rating[0] > 4) {
            result.push({
                'rank': 'Good',
                'name': video.title
            })
        } else {
            result.push({
                'rank': 'Not so good',
                'name': video.title
            })
        }
    })
    return result
}

console.log(show_id_and_title());