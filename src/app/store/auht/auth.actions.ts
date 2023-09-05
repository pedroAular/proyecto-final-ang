import { createActionGroup, props } from "@ngrx/store";
import { users } from "src/app/dashboard/pages/users/models";


export const AuthActions =createActionGroup ({
    source:'Auth',
    events: {
        'set auth users':props<{payLoad:users | null}>()

    }
})