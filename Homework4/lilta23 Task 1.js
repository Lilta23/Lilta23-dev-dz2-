class VigenereCipher {
    constructor(key, alphabet) {
        this.key = key;
        this.alphabet = alphabet;
    }

    encode(message) {
        return this.transformMessage(message, this.encodeChar.bind(this));
    }

    decode(message) {
        return this.transformMessage(message, this.decodeChar.bind(this));
    }

    transformMessage(message, transformChar) {
        let result = '';
        let keyIndex = 0;

        for (let i = 0; i < message.length; i++) {
            const char = message[i];
            const isUppercase = char === char.toUpperCase();
            const charIndex = this.alphabet.indexOf(char.toLowerCase());

            if (charIndex === -1) {
                result += char;
            } else {
                const keyChar = this.key[keyIndex % this.key.length];
                const keyIndexInAlphabet = this.alphabet.indexOf(keyChar.toLowerCase());
                const newIndex = transformChar(charIndex, keyIndexInAlphabet);

                const newChar = isUppercase
                    ? this.alphabet[newIndex].toUpperCase()
                    : this.alphabet[newIndex];

                result += newChar;
                keyIndex++;
            }
        }

        return result;
    }

    encodeChar(charIndex, keyIndex) {
        return (charIndex + keyIndex) % this.alphabet.length;
    }

    decodeChar(charIndex, keyIndex) {
        return (charIndex - keyIndex + this.alphabet.length) % this.alphabet.length;
    }
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const key = 'password';

const c = new VigenereCipher(key, alphabet);

console.log(c.encode('codewars'));
console.log(c.decode('laxxhsj'));
console.log(c.encode('CODEWARS'));
