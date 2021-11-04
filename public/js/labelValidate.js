const formValidate = {
    data() {
        return {
            labels: [],
            label: {
                fullName: "",
                ownerName: "",
                labelHome: "",
                numberOfmembers: "",
                slogan: "",
                labelIcon: "",
                nameOfsponsers: "",
                dateOfformation: "",
                numberOfalbums: "",
                namesOfartists: "",
            }
        };
    },
    methods: {
        registerLabel() {
            if (!this.label.fullName) {
                alert("Full name required")
            }
            if (!this.label.ownerName) {
                alert("Owner name required")
            }
            if (!this.label.labelHome) {
                alert("Label home required")
            }
            if (!this.label.numberOfmembers) {
                alert("Number of members required")
            }
            if (!this.label.slogan) {
                alert("Slogan required")
            }
            if (!this.label.labelIcon) {
                alert("Label icon required")
            }
            if (!this.label.namesOfsponsers) {
                alert("Names of sponsers required")
            }
            if (!this.label.dateOfformation) {
                alert("Date of formation required")
            }
            if (!this.label.namesOfartists) {
                alert("Names of artists required")
            }
        },
    }
};

Vue.createApp(formValidate).mount("#app");