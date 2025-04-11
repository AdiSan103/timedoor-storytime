// Import repository modules
import Auth from "~/repository/module/auth";
import Categories from "~/repository/module/categories";
import Stories from "~/repository/module/stories";

interface IApiInstance {
 //   auth: AuthModule
      categories: Categories;
      stories: Stories;
      auth: Auth;
 }
 
 export default defineNuxtPlugin(() => {
   // An object containing all repositories we need to expose
   const modules: IApiInstance = {
     // auth: new AuthModule()
     categories: new Categories,
     stories: new Stories,
     auth: new Auth
   }
 
   return {
     provide: {
       api: modules
     }
   }
 })