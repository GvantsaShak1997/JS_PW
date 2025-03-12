class Zoparki {
    // განვსაზღვრე ცხოველების ახალი ტიპი, და ვუთხარი რომ ის არის ცარიელა ერეი.
    cxovelebi : Cxovelebi[] = [] 

    //კლასებს აქვს მეთოდები ტავისი, ქვემოთ განვსაზღვრავთ მეთოდებს,მეთოდები არის იგივე ფუნქცია ოღონდ კლასში.

    daamateCxovelebi(cxovelebi : Cxovelebi) { 
        this.cxovelebi.push(cxovelebi)
    }
    amoshaleCxovelebi(washaleCxovelebi : Cxovelebi) {
        this.cxovelebi = this.cxovelebi.filter(cxovelebi =>cxovelebi.saxeli)

    }
    yvelasInformacia(){}
}

// : ამ ორ წერტილს იმიტომ ვუწერ რომ ტაიპსკრიპტი ითხოვს განვუსაზღვრო რა ტიპია, სტრინგი ინტეჯერი თუ რა.
class Cxovelebi {
    saxeli   : string
    asaki: number
    saxeoba: string

    constructor(saxeli: string, asaki: number, saxeoba: string) {
        this.saxeli = saxeli
        this.asaki = asaki
        this.saxeoba = saxeoba
    }
    gaaketeXma(){}
    
    
}


class Dzagli extends Cxovelebi{
    constructor(saxeli: string, asaki: number, saxeoba: string){
        super(saxeli,asaki,saxeoba)
    }
    gaaketeXma(): string {
        return "Bark"
    }
}

class Kata {
    constructor(saxeli: string, asaki: number, saxeoba: string){
        super(saxeli,asaki,saxeoba)
    }
    gaaketeXma(): string {
        return "Meow"
    }
}

const dzagli = new Dzagli('miki',8,'dzagli')
const kata = new Kata('chreli',4,'kata')

dzagli.gaaketeXma()
kata.gaaketeXma()

const tbilisisZoparki = new Zoparki
tbilisisZoparki.daamateCxovelebi(dzagli)
tbilisisZoparki.daamateCxovelebi(kata)