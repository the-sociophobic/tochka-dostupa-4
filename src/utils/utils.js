import React from 'react';

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function recursiveTimeOut(func, ms, iterations = 1) {
  if (iterations <= 0)
    return;
  setTimeout(() => {
    func();
    recursiveTimeOut(func, ms, iterations - 1);
  }, ms);
}

export function newLines(string) {
  var paragraphs = [];
  var prevI = 0;

  if (typeof string !== "string")
    return string;
  for (var i = 0; i < string.length; i++)
    if (string[i] === '\n') {
      paragraphs.push(string.slice(prevI, i));
      prevI = i;
    }
  paragraphs.push(string.slice(prevI));

  return <div>{paragraphs.map((paragraph, index) => <span key={index}>{paragraph}</span>)}</div>;
}

export default capitalize;
