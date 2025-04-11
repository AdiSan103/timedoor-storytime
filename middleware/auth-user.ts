export default defineNuxtRouteMiddleware((to, from) => {
 // In a component or composable
 const authToken = useCookie('STORYTIME_TOKEN')

 if (!authToken.value || authToken.value === '') {
  return navigateTo('/auth/login')
 } else {
  console.log('authentication success')
  console.log('token: ', authToken.value)
 }
})
