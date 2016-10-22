/* @flow */

export const input = `
  type Demo = <T> () => T;
`;

export const expected = `
  import t from "runtime-types";
  const Demo = t.type("Demo", t.function(_fn => {
    const T = _fn.typeParameter("T");
    return [t.return(T)];
  }));
`;