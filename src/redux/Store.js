import { configureStore } from "@reduxjs/toolkit";
import getProducts from "./Products/projectSlice";
import RegSlice from "./VerifyForm/ValidRegisterSlice";
import LoginSlice from "./VerifyForm/VaildLoignSlice";
import ForgetSlice from "./VerifyForm/ValidForgetPassword";
import  getAuthorzied  from "./Autorization/AuthLogin";
import LogoutSlice from "./Autorization/Logout";


export const Store = configureStore({
    reducer: {
        products: getProducts,
        register:RegSlice,
        login:LoginSlice,
        forgetpass:ForgetSlice,
        authoUser:getAuthorzied,
        logout:LogoutSlice
    }
})