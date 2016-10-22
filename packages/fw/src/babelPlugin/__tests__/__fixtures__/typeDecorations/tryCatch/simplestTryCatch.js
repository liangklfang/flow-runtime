/* @flow */

export const input = `
  try {
    throw new TypeError('Intentional');
  }
  catch (e) {
    (e: TypeError);
    console.log(e);
  }
`;

export const expected = `
  import t from "runtime-types";
  try {
    throw new TypeError('Intentional');
  }
  catch (e) {
    if (!t.ref(TypeError).match(e)) {
      throw e;
    }
    console.log(e);
  }
`;