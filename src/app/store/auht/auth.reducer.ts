import { createReducer, on } from "@ngrx/store";
import { users } from "src/app/dashboard/pages/users/models";
import { AuthActions } from "./auth.actions";

export const authFeatureKey='auht';
export interface AuthState{
    authUser: users | null;
}

const initialState:AuthState={
    authUser:null,
}

export const authReducer= createReducer(initialState,
    on(AuthActions.setAuthUsers,(currentState, actions)=>{
return{authUser:actions.payLoad
}
    }))  