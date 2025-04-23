import type { User } from "~/type/module/users";

// composables/useUser.ts
export const useUser = () => {
 const user = useState("user", () => ({} as User));
 const userLoading = useState("userLoading", () => false);
 const { $api } = useNuxtApp();

 const fetchDetailUser = () => {
  userLoading.value = true;

  $api.users
    .getDetail()
    .then((res) => {
      user.value = res.user;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      userLoading.value = false;
    });
};
 

 return { user, userLoading, fetchDetailUser };
};
