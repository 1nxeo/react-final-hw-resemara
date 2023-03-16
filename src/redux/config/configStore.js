import { configureStore } from "@reduxjs/toolkit";
import wishlists from "../modules/wishlists";
import comments from "../modules/comments";
import users from "../modules/users";


const store = configureStore({
    reducer:{ wishlists, comments, users  }
})


export default store