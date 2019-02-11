export function overEighteen({ day, month, year }) {
  if (day && month && year) {
    const minAge = 18,
    mydate = new Date();
    const dMonth = Number(month) - 1;
    mydate.setFullYear(year, dMonth, day);
    var currdate = new Date();
    currdate.setFullYear(currdate.getFullYear() - minAge);
    return currdate >= mydate;
  }
}

export function emailSpecialChar(value) {
  if (value && value.length === 0 || !value) {
    return true;
  }
  /* eslint-disable no-useless-escape */
  var allowedRegex = /^[a-zA-Z0-9\-\_\@\-\+\.]+/;
  var regexResult = value.match(allowedRegex);
  if (regexResult !== null) {
    if (regexResult[0].length === value.length) {
      return true;
    }
  }
  return false;
}

// Number AND/OR Special Chars required
export function specialRequired (value) {
  if (value) {
    var regex = '^[a-zA-Z]*[(0-9)|(\\?\\_\\!\\@\\#\\$\\%\\-\\+)]+[a-zA-Z0-9\\?\\_\\!\\@\\#\\$\\%\\-\\+]*$';
    return value.search(regex) >= 0;
  }
  return false;
}

// Special Chars
export function special (value) {
  if (value) {
    var allowedRegex = '^[a-zA-Z0-9\\?\\_\\!\\@\\#\\$\\%\\-\\+]+';
    var result = value.match(allowedRegex);
    // string contains only allowed values
    return result == value;
  }
  return false;
}

export function datePattern (value) {
  if (value) {
    var allowedRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    var result = value.match(allowedRegex);
    return result[0] === value;
  }
  return false;
}