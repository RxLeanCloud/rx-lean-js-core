
import { randomBytes, createHash } from 'crypto';

// Returns a new random hex string of the given even size.
export function randomHexString(size: number): string {
  if (size === 0) {
    throw new Error('Zero-length randomHexString is useless.');
  }
  if (size % 2 !== 0) {
    throw new Error('randomHexString size must be divisible by 2.')
  }
  return randomBytes(size / 2).toString('hex');
}

export function randomHexStringWithPrefix(prefix: string, size: number): string {
  return prefix + randomHexString(size);
}

// Returns a new random alphanumeric string of the given size.
//
// Note: to simplify implementation, the result has slight modulo bias,
// because chars length of 62 doesn't divide the number of all bytes
// (256) evenly. Such bias is acceptable for most cases when the output
// length is long enough and doesn't need to be uniform.
export function randomString(size: number): string {
  if (size === 0) {
    throw new Error('Zero-length randomString is useless.');
  }
  let chars = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    'abcdefghijklmnopqrstuvwxyz' +
    '0123456789');
  let objectId = '';
  let bytes = randomBytes(size);
  for (let i = 0; i < bytes.length; ++i) {
    objectId += chars[bytes.readUInt8(i) % chars.length];
  }
  return objectId;
}

// Returns a new random alphanumeric string suitable for object ID.
export function newObjectId(): string {
  //TODO: increase length to better protect against collisions.
  return randomString(10);
}

// Returns a new random hex string suitable for secure tokens.
export function newToken(): string {
  return randomHexString(32);
}

export function md5Hash(string: string): string {
  return createHash('md5').update(string).digest('hex');
}

export function newMobilePhoneNumber(): string {
  let prefix = ['138', '139', '188', '186', '189', '171', '170'];
  let chars = ('0123456789');
  let mobile = prefix[Math.floor(Math.random() * prefix.length)];
  let bytes = randomBytes(8);
  for (let i = 0; i < bytes.length; ++i) {
    mobile += chars[bytes.readUInt8(i) % chars.length];
  }
  return mobile;
}
