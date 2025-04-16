// Import repository modules
import Auth from "~/repository/module/auth";
import Bookmark from "~/repository/module/bookmark";
import Categories from "~/repository/module/categories";
import Stories from "~/repository/module/stories";
import Users from "~/repository/module/users";

interface IApiInstance {
 //   auth: AuthModule
      categories: Categories;
      stories: Stories;
      auth: Auth;
      users: Users,
      bookmark: Bookmark
 }
 
 export default defineNuxtPlugin(() => {
   // An object containing all repositories we need to expose
   const modules: IApiInstance = {
     // auth: new AuthModule()
     categories: new Categories,
     stories: new Stories,
     auth: new Auth,
     users: new Users,
     bookmark: new Bookmark
   }
 
   return {
     provide: {
       api: modules
     }
   }
 })