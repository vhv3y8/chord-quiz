## How to Generate

```bash
$ cd tools
$ node FILE_NAME.js
```

output is `.txt` file with each separate names.

## Output

### `genAllChordNames.js`

```
"C", "C#", "Db", "D", "D#", ..., "BmM7"
```

### `genChordNamesToLinks.js`

```
"C": "https://www.pianochord.org/c-major.html",
"C#": "https://www.pianochord.org/c-sharp-major.html",
"Cm": "https://www.pianochord.org/cm.html",
...
"BbmM7": "https://www.pianochord.org/bminmaj7-flat.html",
```

### `genGetPitchNames.js`

```
"C": ["C", "E", "G"],
"Cm": ["C", "Eb", "G"],
"C7": ["C", "E", "G", "Bb"],
...
"BmM7": ["B", "D", "F#", "A#"],
```

### `genMatchChordTypesToChordNames.js`

```
major: ["C", "C#", "Db", ...],
minor: ["Cm", "C#m", "Dbm", ...],
...
mM7: ["CmM7", "C#mM7", ...],
```

### `genMatchChordNamesToLocation.js`

```
"C": "../assets/chord/C.png",
"Cm": "../assets/chord/Cm.png",
"C7": "../assets/chord/C7.png",
...
"BmM7": "../assets/chord/BmM7.png",
```
