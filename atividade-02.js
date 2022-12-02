const top_3_words = 'e e e e DDD ddd DdD: ddd # ddd aa aA bb cc cC eee'
const top_3_words_2 = `Once a village of La Prancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income`

const arraySemespaco = top_3_words.split(' ')
const array_elements = [...arraySemespaco]

function frequency(array) {

    const map = new Map();

    for (let word of array) {

        if (word != '#' && word != '/' && word != ':' && word != '\'') {

            let count = map.get(word) || 0;

            map.set(word, count + 1);
        }
    }

    return map;
}

const frequencies = frequency(array_elements);

const final = []

for (let [word, tot] of frequencies) {
    final.push(word)
    console.log(`A palavra ${word} repetiu ${tot} vezes`);
}

const entrega = []
for (let i = 0; i < 3; i++) {
    entrega.push(final[i])
}

console.log(entrega)