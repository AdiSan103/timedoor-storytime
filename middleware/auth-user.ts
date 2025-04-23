export default defineNuxtRouteMiddleware((to, from) => {
 // In a component or composable
 const authToken = useCookie('STORYTIME_TOKEN')

 if (!authToken.value || authToken.value === '') {
  return navigateTo('/login')
 } else {
  console.log('😁 status : ','authentication success')
  // console.log('token: ', authToken.value)
 }
})
