import axios from "axios"
import { userActions } from "./user-slice"

//Handle user Sign Up
export const getSignUp =(user)=>async(dispatch)=>{
    try{
        dispatch(userActions.getSignupRequest);
        const {data} = await axios.post("/api/v1/rent/user/signup",user)

        dispatch(userActions.getSignupDetails(data.user))
    } catch(error){
        dispatch(userActions.getError(error.response.data.message));
    }
}

//Handling User Login
export const getLogIn =(user)=>async(dispatch)=>{
    try{
        dispatch(userActions.getLoginRequest());
        const {data} = await axios.post("/api/v1/rent/user/login",user);
        dispatch(userActions.getLoginDetails(data.user))
    }catch(error){
        dispatch(userActions.getError(error.response.data.message));
    }
}

//to get currect user information
export const currentUser=()=> async(dispatch)=>{
    try{
        dispatch(userActions.getCurrentUserRequest());
        const {data} = await axios.get("/api/v1/rent/user/me")
        dispatch(userActions.getCurrentUser(data.user));
    }catch(error){
        dispatch(userActions.getError(error.response.data.message));
    }
}

//to Update User Information
export const updateUser =(updateUser)=> async(dispatch)=>{
    try{
        dispatch(userActions.getUpdateUserRequest());
        await axios.patch("/api/v1/rent/user/updateMe",updateUser);
        const {data} = await axios.get("/api/v1/rent/user/me");
        dispatch(userActions.getCurrentUser(data.user))
    }catch(error){
        dispatch(userActions.getError(error.response.data.message));
    }
}

//To Handle Forgot Password

export const forgotPassword = (email) => async(dispatch)=>{
    try{
        await axios.post("/api/v1/rent/user/forgotPassword",{email})
    }catch(error){
        dispatch(userActions.getError(error.response.data.message));
    }
}

//Password reset
 export const resetPassword =(repassword,token)=> async(dispatch)=>{
    try{
        await axios.patch(`/api/v1/rent/user/resetPassword/${token}`,repassword)
    }catch(error){
        dispatch(userActions.getError(error.response.data.message));
    }
}

//Handle password update

export const updatePassword =(passwords)=> async(dispatch)=>{
    try{
        dispatch(userActions.getPasswordRequest());
        await axios.patch("/api/v1/rent/updateMyPassword",passwords);
        dispatch(userActions.getPasswordSuccess(true));
    }catch(error){
        dispatch(userActions.getError(error.response.data.message));
    }
}

//user Logout
export const Logout = ()=> async(dispatch)=>{
    try{
        await axios.get("/api/v1/rent/user/logout");
        dispatch(userActions.getLogout(null));
    }catch(error){
        dispatch(userActions.getError(error));
    }
}
