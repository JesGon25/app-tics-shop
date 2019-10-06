export class Api{

    //host
    //private host:string = "http://0.0.0.0:3335";
    private host:string = "https://api-adonis-soa-shop.herokuapp.com";
    //urls api
    private urlLogin:string         = '/api/v1/auth/login';
    private urlSales:string         = "/api/v1/sales/";
    private urlMySales:string       = "/api/v1/my-sales?id=";
    private urlSellers:string       = "/api/v1/sellers/";
    private urlProducts:string      = "/api/v1/products/";
    private urlMyProducts:string    = "/api/v1/my-products?user_id=";
    private urlProductLike:string   = "/api/v1/products-like?like=";
    private urlTokenNavAdmin:string = "/api/v1/token-admin";

    constructor(){}

    public getUrlLogin(){
        return this.host+this.urlLogin;
    }
    public getUrlSales(){
        return this.host+this.urlSales;
    }
    public getUrlMySales(user_id){
        return this.host+this.urlMySales+user_id;
    }
    public getUrlSaleId(sale_id){
        return this.host+this.urlSales+sale_id;
    }
    public getUrlSellers(){
        return this.host+this.urlSellers;
    }
    public getUrlProducts(){
        return this.host+this.urlProducts;
    }
    public getUrlMyProducts(seller_id:number){
        return this.host+this.urlMyProducts+seller_id;
    }
    public getUrlProductLike(search:string,user_id:number){
        return this.host+this.urlProductLike+search+"&user_id="+user_id;
    }
    public getUrlTokenAdmin(){
        return this.host+this.urlTokenNavAdmin;
    }
}