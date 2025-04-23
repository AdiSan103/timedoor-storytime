// plugins/fetchUser.ts
export default defineNuxtPlugin(async () => {
 const { fetchDetailUser } = useUser();
 await fetchDetailUser();
});
