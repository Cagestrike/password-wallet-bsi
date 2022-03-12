const crypto = require('crypto')
const INITIALIZATION_VECTOR = '0000000000000000';

export const calculateSha512 = (text: string, salt: string, pepper: string): string => {
    return crypto
        .createHash('sha512')
        .update(text + salt + pepper, 'utf8')
        .digest('hex')
}

export const calculateHMAC = (text: string, key: string): string => {
    return crypto
        .createHmac('sha512', key)
        .update(text, 'utf8')
        .digest('hex')
}

export const generateSalt = () => {
    return crypto.randomBytes(14).toString('base64');
}

export const encrypt = (data: string, key: string): string => {
    const cipher = crypto.createCipheriv('aes-128-cbc', Buffer.from(key, "hex"), Buffer.from(INITIALIZATION_VECTOR));
    return cipher.update(data, "utf8", "hex") + cipher.final("hex");
}

export const decrypt = (encryptedData: string, key: string): string => {
    const cipher = crypto.createDecipheriv('aes-128-cbc', Buffer.from(key, "hex"), Buffer.from(INITIALIZATION_VECTOR));
    return cipher.update(encryptedData, 'hex', 'utf8') + cipher.final('utf8');
}

export const calculateMD5 = (text: string): string => {
    return crypto
        .createHash('MD5')
        .update(text, 'utf8')
        .digest('hex')
}