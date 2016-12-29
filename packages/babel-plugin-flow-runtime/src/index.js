/* @flow */

import ConversionContext from './ConversionContext';

import attachImport from './attachImport';
import firstPassVisitors from './firstPassVisitors';
import transformVisitors from './transformVisitors';
import type {NodePath} from 'babel-traverse';


export default function () {
  return {
    visitor: {
      Program (path: NodePath, {opts}: Object) {
        const context = new ConversionContext();
        context.shouldAssert = opts.assert ? true : false;
        context.shouldDecorate = opts.decorate ? true : false;
        attachImport(context, path);
        path.traverse(firstPassVisitors(context));
        path.traverse(transformVisitors(context));
      }
    }
  };
}