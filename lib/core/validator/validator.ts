import { ErrorMessage } from '../errors';

export type ValidationResult =
  | { isValid: true }
  | { isValid: false; cause: ErrorMessage };

enum ExtensionType {
  APPLICATION = 'a',
  CONFERENCE_ROOM = 'c',
  REGISTER = 'e',
  FAX = 'f',
  GROUP = 'g',
  IVR = 'h',
  SIM = 'i',
  PERSON = 'p',
  QUEUE = 'q',
  CALLTHROUGH = 'r',
  TRUNKING = 't',
  VOICEMAIL = 'v',
  WEBUSER = 'w',
  EXTERNAL = 'x',
  MOBILE = 'y',
}

const validateExtension = (
  extensionId: string,
  extensionType: ExtensionType,
): ValidationResult => {
  const extensionRegEx: RegExp = new RegExp(
    `^${extensionType}(0|[1-9][0-9]*)$`,
  );

  if (!extensionRegEx.test(extensionId)) {
    return {
      cause: ErrorMessage.VALIDATOR_INVALID_EXTENSION,
      isValid: false,
    };
  }

  return { isValid: true };
};

export { validateExtension, ExtensionType };
