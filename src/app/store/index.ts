// Importaciones necesarias
import { ActionReducerMap } from "@ngrx/store";
import { AuthState, authReducer } from "./auht/auth.reducer";
import {authFeatureKey } from "./auht/auth.reducer" // Corregido el nombre del módulo y del estado
// También, corregido el import para AuthState

// Definición de la interfaz del estado global de la aplicación
export interface AppState {
    [authFeatureKey]: AuthState; // Corregido el tipo del estado
}

// Definición del reducer principal que combina todos los reducers individuales
export const appReducer: ActionReducerMap<AppState> = {
    [authFeatureKey]: authReducer,
};
