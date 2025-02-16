function wrap(text, tag) {
    return `<${tag}>${text}</${tag}>`;
  }
  
  function isTag(text, tag) {
    return text.startsWith(`<${tag}>`);
  }
  
  // renamed function to parseTag
  
  function parseTag(markdown, delimiter, tag) {
    const pattern = new RegExp(`${delimiter}(.+)${delimiter}`);
    const replacement = `<${tag}>$1</${tag}>`;
    return markdown.replace(pattern, replacement);
  }
  
  
  function parseStrong(markdown) {
    return parseTag(markdown, '__', 'strong');
  }
  
  function parseEm(markdown) {
    return parseTag(markdown, '_', 'em');
  }
  // renamed functions to parseStrong and parseEm
  
  function parseText(markdown, isList) {
    const parsedText = parseEm(parseStrong(markdown));
    if (isList) {
      return parsedText;
    } else {
      return wrap(parsedText, 'p');
    }
  }
  

  

  
  
  // renamed variables to isList and isNewList
  function parse(markdown) {
    const lines = markdown.split('\n');
    let result = '';
    let isList = false;
    for (let i = 0; i < lines.length; i++) {
      let [lineResult, newList] = parseLine(lines[i], isList);
      result += lineResult;
      isList = newList;
    }
    if (isList) {
      return result + '</ul>';
    } else {
      return result;
    }
  }
  //switched places for parse and parseLine

  function parseLine(markdown, isList) {
    let [result, isNewList] = parseHeader(markdown, isList);
    if (result === null) {
      [result, isNewList] = parseLineItem(markdown, isList);
    }
    if (result === null) {
      [result, isNewList] = parseParagraph(markdown, isList);
    }
    if (result === null) {
      throw new Error('Invalid markdown');
    }
    return [result, isNewList];
  }

  function parseHeader(markdown, isList) {
    let count = 0;
    for (let i = 0; i < markdown.length; i++) {
      if (markdown[i] === '#') {
        count += 1;
      } else {
        break;
      }
    }
    if (count === 0 || count > 6) {
      return [null, isList];
    }
    const headerTag = `h${count}`;
    const headerHtml = wrap(markdown.substring(count + 1), headerTag);
    if (isList) {
      return [`</ul>${headerHtml}`, false];
    } else {
      return [headerHtml, false];
    }
  }

  function parseLineItem(markdown, isList) {
    if (markdown.startsWith('*')) {
      const innerHtml = wrap(parseText(markdown.substring(2), true), 'li');
      if (isList) {
        return [innerHtml, true];
      } else {
        return [`<ul>${innerHtml}`, true];
      }
    }
    return [null, isList];
  }
  

  function parseParagraph(markdown, isList) {
    if (!isList) {
      return [parseText(markdown, false), false];
    } else {
      return [`</ul>${parseText(markdown, false)}`, false];
    }
  }


 

      const markdown = 'This will be a paragraph';
      const expected = '<p>This will be a paragraph</p>';

      console.log(parse(markdown));
      console.log(parse(markdown) === expected);
   
  