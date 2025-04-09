import FetchFactory from '../factory'
import type { PropsCategory } from '~/type/module/categoris'

class Categories extends FetchFactory<PropsCategory> {
  // async getCategories() {
  //   return await useAsyncData(() => {
  //     return super.call('/api/categories', {
  //       method: 'GET'
  //     })
  //   })
  // }
  
  getCategories() {
      return super.call('/api/categories', {
        method: 'GET'
      })
  }
}

export default Categories