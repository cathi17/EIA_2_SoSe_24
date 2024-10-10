console.log("hello");


namespace RandomPoem{
    let subjekte: string[] = ['Harry', 'Hermine', 'Hagrid', 'Snape','Eli','Cathi'];
    let prädikate: string[] = ['erstellt', 'liebt', 'studiert', 'hasst', 'zaubert', 'zerstört'];
    let objekte: string[] = ['Zaubertränke', 'den Grimm', 'Lupin', 'Hogwarts', 'die Karte des Rumtreibers', 'Dementoren'];
    
    // console.log(subjekte);
    // console.log(prädikate);
    // console.log(objekte);
    
    for ( let i= subjekte.length; i >= 1; i--){
        // console.log(i);
        console.log(getVerse(subjekte, prädikate, objekte))
    }
    
    function getVerse(_subjekte: string[], _prädikate: string[], _objekte: string[]): string {
        let vers: string = "";
        
        let randomSubjectIndex: number = Math.floor(Math.random() * _subjekte.length);
        // console.log(randomSubjectIndex);
        let randomSubject: string = _subjekte.splice(randomSubjectIndex, 1)[0];
        vers += randomSubject + " ";
        
        let randomPredicateIndex: number = Math.floor(Math.random() * _prädikate.length);
        // console.log(randomPredicateIndex);
        let randomPredicate: string = _prädikate.splice(randomPredicateIndex, 1)[0];
        vers += randomPredicate + " ";
        
        let randomObjectIndex: number = Math.floor(Math.random() * _objekte.length);
        // console.log(randomObjectIndex);
        let randomObject: string = _objekte.splice(randomObjectIndex, 1)[0];
        vers += randomObject;
        
        return vers;
    }
    }