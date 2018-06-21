const alphabet = Array(26).fill().map((c, i) => (i + 10).toString(36));

const getOffsetChars = (offset) => {
    return alphabet
        .slice(offset)
        .concat(alphabet.slice(0, offset));
};

const createMap = (source, matched) => {
    return source.reduce((obj, curr, i) => {
        obj[curr] = matched[i];
        return obj;
    }, {});
};

const getEncryptAlpha = (offset) => {
    return createMap(alphabet, getOffsetChars(offset));
};

const getDecryptAlpha = (offset) => {
    return createMap(getOffsetChars(offset), alphabet);
};

const messageMap = (message, map) => {
    return Array.from(message).map(char => {
        const isUppercase = char === char.toUpperCase();
        return (map[char.toLowerCase()] || char)[isUppercase ? 'toUpperCase' : 'trim']();
    }).join('');
};

const base64Encode = (str) => {
    return new Buffer(str).toString('base64');
};
const base64Decode = (str) => {
    return new Buffer(str, 'base64').toString('ascii');
};

module.exports = {
    encrypt(offset, message) {
        const map = getEncryptAlpha(offset);
        const firstPass = messageMap(message, map);
        return messageMap(base64Encode(firstPass), map);
    },
    decrypt(offset, code) {
        const map = getDecryptAlpha(offset);
        const firstPass = base64Decode(messageMap(code, map));
        return messageMap(firstPass, map);
    }
};
