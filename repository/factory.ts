import { defu } from 'defu'
import type { UseFetchOptions } from 'nuxt/app'


class FetchFactory<T> {
  
  async call(
    url: MaybeRefOrGetter<string>,
    options: UseFetchOptions<T> = {}
  ): Promise<T> {
    const config = useRuntimeConfig()
    const token = useCookie("STORYTIME_TOKEN");
    // console.log(url);
    
    const headers: any = {
      Accept: 'application/json',
      Origin: config.public.appUrl,  
      Authorization: `Bearer ${token.value}`
    }

    if(url == "/api/stories") {
      headers['Content-Type'] = 'multipart/form-data';
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