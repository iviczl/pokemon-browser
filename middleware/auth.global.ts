export default defineNuxtRouteMiddleware((to, from) => {
  if(to.path.startsWith('/login')) {
    return;
  }
  const auth = useAuth();
  if(auth.value.isLoggedIn) {
    return;
  }
  return navigateTo('/login');
});