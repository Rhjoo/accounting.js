function getUniqueCharacters(testString) {
  var characterStorage = {};
  characterStorage.uniqueCharacters = 0;

  for (var i = 0; i < testString.length; i++) {
    var currentCharacter = testString[i];

    if (characterStorage[currentCharacter]) {
      characterStorage[currentCharacter]++;
    } else {
      characterStorage[currentCharacter] = 1;
      characterStorage.uniqueCharacters++;
    }
  }
  return characterStorage;
}
