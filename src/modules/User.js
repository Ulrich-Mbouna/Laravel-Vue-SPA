

export default({
    state: {
        isLogIn: false
    },
    mutations:{
        removeAuth: (state) => {
            localStorage.removeItem('auth');
            state.isLogIn = false;
        },
        setAuth:(state) => {
            localStorage.setItem('auth','true');
            state.isLogIn = true;
        }
    },
    actions: {
        
    }
})