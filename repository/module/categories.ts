import FetchFactory from '../factory'
import type { PropsCategory } from '~/type/module/categoris'

class Categories extends FetchFactory<PropsCategory> {
  
  getCategories() {
      return super.call('/api/categories', {
        method: 'GET'
      })
  }
}

export default Categories