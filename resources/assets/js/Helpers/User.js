import Token from './Token';
import AppStorage from './AppStorage';

class User {
  login(data){
    axios.post('/api/auth/login', data)
      .then(res => this.responseAfterLogin(res))
      // .then(res => {
      //   Token.payload(res.data.access_token);
      // })
      .catch(error => console.log(error.response.data))
  }
  responseAfterLogin(response){
    const access_token = response.data.access_token;
    const username = res.data.user
    if(Token.isValid(access_token)) {
      AppStorage.store(username, access_token)
    }
  }

  hasToken(){
    const storedToken = AppStorage.getToken();
    if(storedToken){
      return Token.isValid(storeToken) ? true : false;
    }

    return false;
  }

  loggedin(){
    return this.hasToken();
  }

  logout(){
    AppStorage.clear();
  }

  name(){
    if(this.loggedin()){
      return AppStorage.getUser();
    }
  }

  id(){
    if(this.loggedin()){
      const payload = Token.payload(AppStorage.getToken());
      return payload.sub;
    }
  }
}

export default User = new User();
