export class Auth{
    
    constructor(){}
    
    getUserData(){
        return JSON.parse(localStorage.getItem('user'));
    }
    setDataUser(user:any){
        localStorage.setItem('user',JSON.stringify(user));
    }
    getTokenApi(){
        return localStorage.getItem('token_api');
    }
    setTokenApi(token_api:string){
        localStorage.setItem('token_api',token_api);
    }
    getTokenNav(){
        return localStorage.getItem('token_nav');
    }
    setTokenNav(token_nav:string){
        localStorage.setItem('token_nav',token_nav);
    }
    setAuth(status){
        localStorage.setItem('auth',status);
    }
    isAuth(){
        return localStorage.getItem('auth');
    }
    logout(){
        localStorage.removeItem('token_api');
        localStorage.removeItem('user');
        localStorage.setItem('auth','0');
    }
}