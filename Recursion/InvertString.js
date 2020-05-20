const invertString = sentence => {
    if (sentence.length === 1) return sentence;

    return sentence[sentence.length - 1] + invertString(sentence.substring(0, sentence.length - 1))
}
