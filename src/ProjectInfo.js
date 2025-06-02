export default class ProjectInfo {

    constructor() {
        this.whatInfo = {
            title: "What?",
            image: "",
            imageAlt: "",
            texts: []
        }

        this.howInfo = {
            title: "How?",
            image: "",
            imageAlt: "",
            texts: []
        }

        this.resultsInfo = {
            title: "Results",
            image: "",
            imageAlt: "",
            texts: []
        }
    }

    setWhatInfo( image, imageAlt, texts ) {
        this.whatInfo.image = image
        this.whatInfo.imageAlt = imageAlt
        this.whatInfo.texts = texts
    }

    setHowInfo( image, imageAlt, texts ) {
        this.howInfo.image = image
        this.howInfo.imageAlt = imageAlt
        this.howInfo.texts = texts
    }

    setResultsInfo( image, imageAlt, texts ) {
        this.resultsInfo.image = image
        this.resultsInfo.imageAlt = imageAlt
        this.resultsInfo.texts = texts
    }
}