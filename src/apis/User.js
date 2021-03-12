import Api from './Api';
import Csrf from './Csrf';

export default {
      register: async  (form) => {
       await Csrf.getCookie();
       return Api.post('/register',form);
      },
      login: async (form) => {
       await Csrf.getCookie();
       return Api.post('/login',form);
      },
      logout: async () => {

            await Csrf.getCookie();

           return Api.post('/logout');
      },
      auth: async () => {

             await Csrf.getCookie();
            return Api.get("/user");
      }
}