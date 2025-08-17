export default class ProjectInfo {

    constructor() {
        this.header = {
            title: "",
            link: "",
            icon: "",
            iconWidth: "auto",
            iconHeight: "auto"
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

    setHeaderInfo( title, link, icon, iconWidth = "auto", iconHeight = "auto" ) {
        this.header.title = title
        this.header.link = link
        this.header.icon = icon
        this.header.iconWidth = iconWidth
        this.header.iconHeight = iconHeight
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