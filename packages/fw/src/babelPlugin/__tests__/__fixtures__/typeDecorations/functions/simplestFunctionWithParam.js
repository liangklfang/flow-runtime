/* @flow */

export const input = `
  const demo = (input: string): string => input;
`;

export const expected = `
  import t from "runtime-types";
  const demo = input => {
    let _inputType = t.string();
    const _returnType = t.return(t.string());
    t.param("input", _inputType).assert(input);
    return _returnType.assert(input);
  };

`;