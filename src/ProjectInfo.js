export default class ProjectInfo {

    constructor() {
        this.header = {
            title: "",
            link: ""
        }

        this.whatInfo = {
            title: "What?",
            images: [],
            imageAlt: "",
            texts: []
        }

        this.howInfo = {
            title: "How?",
            images: [],
            imageAlt: "",
            texts: []
        }

        this.resultsInfo = {
            title: "Results",
            images:[],
            imageAlt: "",
            texts: []
        }
    }

    setHeaderInfo( title, link ) {
        this.header.title = title
        this.header.link = link
    }

    setWhatInfo( images, imageAlt, texts ) {
        this.whatInfo.images = images
        this.whatInfo.imageAlt = imageAlt
        this.whatInfo.texts = texts
    }

    setHowInfo( images, imageAlt, texts ) {
        this.howInfo.images = images
        this.howInfo.imageAlt = imageAlt
        this.howInfo.texts = texts
    }

    setResultsInfo( images, imageAlt, texts ) {
        this.resultsInfo.images = images
        this.resultsInfo.imageAlt = imageAlt
        this.resultsInfo.texts = texts
    }
}