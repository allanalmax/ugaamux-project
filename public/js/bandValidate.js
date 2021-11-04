const bandValidate = {
    data() {
        return {
            bands: [],
            band: {
                fullName: "",
                ownerName: "",
                bandHome: "",
                numberOfmembers: "",
                slogan: "",
                bandIcon: "",
                namesOfsponsers: "",
                dateOfformation: "",
                numberOfalbums: "",
                albums: "",
                musicCategory: "",
            }
        };
    },
    methods: {
        registerBand() {
            if (!this.band.fullName) {
                alert("Full name required")
            }
            if (!this.band.ownerName) {
                alert("Owner name required")
            }
            if (!this.band.bandHome) {
                alert("Band home required")
            }
            if (!this.band.numberOfmembers) {
                alert("Number of members required")
            }
            if (!this.band.slogan) {
                alert("Slogan required")
            }
            if (!this.band.bandIcon) {
                alert("Band icon required")
            }
            if (!this.band.namesOfsponsers) {
                alert("Names of sponsers required")
            }
            if (!this.band.dateOfformation) {
                alert("Date of formation required")
            }
            if (!this.albums) {
                alert("Albums required")
            }
            if (!this.musicCategory) {
                alert("Music category required")
            }
        },
    }
};

Vue.createApp(bandValidate).mount("#app");