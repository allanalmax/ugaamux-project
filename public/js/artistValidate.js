const formValidate = {
    data() {
        return {
            firstNameError: false,
            // errors: [],
            // artists: [],
            // artist: {
            //     fullName: "",
            //     stageName: "",
            //     dateOfbirth: "",
            //     baseLocation: "",
            //     profile: "",
            //     NIN: "",
            //     currentLocation: "",
            //     gender: "",
            //     numberOfalbums: "",
            //     artistID: "",
            //     dateOfstart: "",
            //     contact: ""
            // }
        };
    },
    methods: {
        registerArtist(event) {
            event.preventDefault();
            // this.errors = [];

            // if (!this.artist.fullName) {
            //     this.errors.push("Full name required")
            // }

            // if (!this.artist.stageName) {
            //     this.errors.push("Stage name required")
            // }

            // if (!this.errors.length) {
            //     return true;
            // }
            // e.preventDefault();
            // artist: {
            //     fullName: {required},
            //     stageName: {required}
            // }
            if (!this.artist.fullName) {
                if (!this.firstNameError) {
                    this.firstNameError = true;
                } 
            }
            // if (!this.artist.stageName) {
            //     alert("Stage name required")
            // }
            // if (!this.dateOfbirth) {
            //     alert("Date of Birth required")
            // }
            // if (!this.baseLocation) {
            //     alert("Base location required")
            // }
            // if (!this.profile) {
            //     alert("Profile required")
            // }
            // if (!this.NIN) {
            //     alert("NIN required")
            // }
            // if (!this.currentLocation) {
            //     alert("Current Location required")
            // }
            // if (!this.numberOfalbums) {
            //     alert("Number of albums required")
            // }
            // if (!this.artistID) {
            //     alert("Artist ID required")
            // }
            // if (!this.dateOfstart) {
            //     alert("Date of start required")
            // }
            // if (!this.contact) {
            //     alert("Contact required")
            // }
        },
    };
};

Vue.createApp(formValidate).mount("#app");