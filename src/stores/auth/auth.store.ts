import { defineStore } from "pinia";

function initState() {
    return {
        token: "",
        user: {
            id: 0,
            frist_name: "",
            last_name: "",
            password: "",
            username: "",
            current_hashed_refresh_token: "",
            role: [],
            exp: 0,
            iat: 0
        },
        loggedIn: false,
    };
}

const userAuthStore = defineStore("userAuth", {
    state: () => ({ ...initState() }),
    getters: {
        getUser: (state) => state.user,
        isLoggedIn: (state) => {
            const CONVERT_TO_MILLISECONDS = 1000
            const currentDate = Date.now()
            return !!state.token && state.user.exp * CONVERT_TO_MILLISECONDS > currentDate
        },
    },
    actions: {
        setToken(_token: string) {
            this.token = _token;
        },
        setUser(_user: any) {
            this.user = _user;
        },
        logout() {
            this.$state = initState();
            this.$reset();
        },
        setUserDataByTokenDecoded(_token: string) {
            this.token = _token;
            const decodedToken = JSON.parse(atob(_token.split('.')[1]));
            this.user = decodedToken
        }
    }
});