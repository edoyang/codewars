function filter_list(l) {
  return l.filter((el) => typeof el === 'number');
}

// OR Iterate

const filter_list = (l) => l.filter((x) => typeof x === 'number');