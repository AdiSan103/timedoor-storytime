import FetchFactory from '../factory'
import type { CategoryResponse } from '@/type/module/categories'

class Categories extends FetchFactory<CategoryResponse> {
  
  getCategories() {
      return super.call('/api/categories', {
        method: 'GET'
      })
  }
}

export default Categories