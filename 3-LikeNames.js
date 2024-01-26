function likes(names) {
    if (names.length === 0) {
        return 'no one likes this';
    } else if (names.length > 1) {
        for i = 0; i < names.length; i++ {
            return names[i] + ' likes this';
        }
  }
}

console.log (likes(['Peter', 'Alex', 'Jacob', 'Mark', 'Max']))