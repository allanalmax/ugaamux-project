const formValidate = {
    data() {
        return {
            fullNameError: false,
            stageNameError: false,
            dateOfBirthError: false,
            baseLocationError: false,
            profileError: false,
            NINError: false,
            currentLocationError: false,
            genderError: false,
            numberOfAlbumsError: false,
            artistIDError: false,
            dateOfStartError: false,
            contactError: false,
            artists: [],
            artist: {
                fullName: "",
                stageName: "",
                dateOfBirth: "",
                baseLocation: "",
                profile: "",
                NIN: "",
                currentLocation: "",
                gender: "",
                numberOfAlbums: "",
                artistID: "",
                dateOfStart: "",
                contact: ""
            }
        };
    },
    methods: {
        registerArtist(event) {
            event.preventDefault();
            
            if (!this.artist.fullName) {
                if (!this.fullNameError) {
                    this.fullNameError = true;
                } 
            }
            if (!this.artist.stageName) {
                if (!this.stageNameError) {
                    this.stageNameError = true;
                }
            }
            if (!this.artist.dateOfBirth) {
                if (!this.dateOfBirthError) {
                    this.dateOfBirthError = true;
                }
            }
            if (!this.artist.baseLocation) {
                if (!this.baseLocationError) {
                    this.baseLocationError = true;
                }
            }
            if (!this.artist.profile) {
                if (!this.profileError) {
                    this.profileError = true;
                }
            }
            if (!this.artist.NIN) {
                if (!this.NINError) {
                    this.NINError = true;
                }
            }
            if (!this.artist.currentLocation) {
                if (!this.currentLocationError) {
                    this.currentLocationError = true;
                }
            }
            if (!this.artist.gender) {
                if (!this.genderError) {
                    this.genderError = true;
                }
            }
            if (!this.artist.numberOfAlbums) {
                if (!this.numberOfAlbumsError) {
                    this.numberOfAlbumsError = true;
                }
            }
            if (!this.artist.artistID) {
                if (!this.artistIDError) {
                    this.artistIDError = true;
                }
            }
            if (!this.artist.dateOfStart) {
                if (!this.dateOfStartError) {
                    this.dateOfStartError = true;
                }
            }
            if (!this.artist.contact) {
                if (!this.contactError) {
                    this.contactError = true;
                }
            }
        },
    }
};

Vue.createApp(formValidate).mount("#app");