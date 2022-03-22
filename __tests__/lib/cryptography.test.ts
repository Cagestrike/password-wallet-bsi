import * as cryptography from '@/lib/cryptography';
import {calculateMD5} from "@/lib/cryptography";

test('should generate salt', () => {
    const firstSalt = cryptography.generateSalt();
    const secondSalt = cryptography.generateSalt();

    expect(firstSalt).not.toBe(secondSalt);
    expect(firstSalt.length).toBe(20);
    expect(secondSalt.length).toBe(20);
})

test('should calculate hash from data, salt and pepper', () => {
    const firstSalt = cryptography.generateSalt();
    const secondSalt = cryptography.generateSalt();
    const data = 'hello';
    const pepper = 'pepper';

    const firstHashed = cryptography.calculateSha512(data, firstSalt, pepper);
    const secondHashed = cryptography.calculateSha512(data, secondSalt, pepper);
    const thirdHashed = cryptography.calculateSha512(data, firstSalt, pepper);

    expect(firstHashed).toBe(thirdHashed);
    expect(firstHashed).not.toBe(secondHashed);
    expect(firstHashed).not.toBe(data + firstSalt + pepper);
})

test('should encrypt', () => {
    const secureKey = 'someKey';
    const data = 'data';

    const encryptedData = cryptography.encrypt(data, calculateMD5(secureKey));

    expect(encryptedData).not.toBe(data);
})


test('should decrypt', () => {
    const secureKey = 'someKey';
    const data = 'data';

    const encryptedData = cryptography.encrypt(data, calculateMD5(secureKey));

    expect(encryptedData).not.toBe(data);

    const decryptedData = cryptography.decrypt(encryptedData, calculateMD5(secureKey));

    expect(decryptedData).toBe(data);
})