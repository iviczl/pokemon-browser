export default defineNuxtRouteMiddleware((to, from) => {
  if(to.path.startsWith('/login')) {
    return;
  }
  const auth = useAuth();
  // if(auth.value.isLoggedIn) {
  if(auth.isLoggedIn) {
      return;
  }
  return navigateTo('/login');
});