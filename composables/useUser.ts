// composables/useUser.ts
import type { User } from "~/type/module/users";

export const useUser = () => {
  const user = useState("user", () => ({} as User));
  const userLoading = useState("userLoading", () => false);
  const { $api } = useNuxtApp();
  const authToken = useCookie('STORYTIME_TOKEN');

  const fetchDetailUser = () => {
    if (authToken.value && authToken.value !== '') {
      userLoading.value = true;

      $api.users
        .getDetail()
        .then((res) => {
          user.value = res.user;
        })
        .catch((err) => {
          console.error("Error fetching user details:", err);
        })
        .finally(() => {
          userLoading.value = false;
        });
    }
  };

  return { user, userLoading, fetchDetailUser };
};
