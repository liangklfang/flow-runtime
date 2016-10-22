/* @flow */

export const input = `
  type Demo = {
    next: ? Demo;
  };
`;

export const expected = `
  import t from "runtime-types";
  const Demo = t.type("Demo", Demo => {
    return t.object(
      t.property("next", t.nullable(Demo))
    );
  });
`;