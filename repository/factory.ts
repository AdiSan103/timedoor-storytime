import { defu } from 'defu'
import type { UseFetchOptions } from 'nuxt/app'


class FetchFactory<T> {
  
  async call(
    url: MaybeRefOrGetter<string>,
    options: UseFetchOptions<T> = {}
  ): Promise<T> {
    const config = useRuntimeConfig()
    const token = useCookie("STORYTIME_TOKEN");

    const headers: any = {
      Accept: 'application/json',
      Origin: config.public.appUrl,  
      Authorization: `Bearer ${token.value}`
    }

    const defaults: UseFetchOptions<T> = {
      key: toValue(url),
      headers
    }

    const params = defu(options, defaults)
    return await $fetch<T>(url, params)
  }
}

export default FetchFactory