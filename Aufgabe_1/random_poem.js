"use strict";
console.log("hello");
var RandomPoem;
(function (RandomPoem) {
    let subjekte = ['Harry', 'Hermine', 'Hagrid', 'Snape', 'Eli', 'Cathi'];
    let prädikate = ['erstellt', 'liebt', 'studiert', 'hasst', 'zaubert', 'zerstört'];
    let objekte = ['Zaubertränke', 'den Grimm', 'Lupin', 'Hogwarts', 'die Karte des Rumtreibers', 'Dementoren'];
    // console.log(subjekte);
    // console.log(prädikate);
    // console.log(objekte);
    for (let i = subjekte.length; i >= 1; i--) {
        // console.log(i);
        console.log(getVerse(subjekte, prädikate, objekte));
    }
    function getVerse(_subjekte, _prädikate, _objekte) {
        let vers = "";
        let randomSubjectIndex = Math.floor(Math.random() * _subjekte.length);
        // console.log(randomSubjectIndex);
        let randomSubject = _subjekte.splice(randomSubjectIndex, 1)[0];
        vers += randomSubject + " ";
        let randomPredicateIndex = Math.floor(Math.random() * _prädikate.length);
        // console.log(randomPredicateIndex);
        let randomPredicate = _prädikate.splice(randomPredicateIndex, 1)[0];
        vers += randomPredicate + " ";
        let randomObjectIndex = Math.floor(Math.random() * _objekte.length);
        // console.log(randomObjectIndex);
        let randomObject = _objekte.splice(randomObjectIndex, 1)[0];
        vers += randomObject;
        return vers;
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=random_poem.js.map