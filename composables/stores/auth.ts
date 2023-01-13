import { defineStore } from "pinia";

export const useAuth = defineStore('auth', () =>({
  isLoggedIn: false,
  token: null as string
}));
