function playingCard(face, suit) {
    const suits = {
        'S': '\u2660 ',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    };
    const valide_face = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'K', 'Q', 'J'];

    try {
        if (!valide_face.includes(face)) {
            throw Error('Not include in valide_face!')
        }
    } catch (err) {
        return (err.message)
    }

    try {
        if (!Object.keys(suits).includes(suit)) {
            throw Error('Not include in suits!')
        }
    } catch (err) {
        return (err.message)
    }

    return `${face}${suits[suit]}`

}

console.log(playingCard('A', 'S'));