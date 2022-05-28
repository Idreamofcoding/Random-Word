function myClick() {
    var word = [
        'apple',
        'bananna',
        'carrot',
        'duck',
        'eggplant',
        'fatty lipids',
        'Gordon',
        'healthy',
    ]

    var chooseword = document.querySelector('p')
    chooseword.innerHTML = word[Math.floor(Math.random()*word.length)];
}

