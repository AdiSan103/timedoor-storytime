import type { BookmarksResponse, FormToggle } from '~/type/module/bookmark'
import FetchFactory from '../factory'

class Bookmark extends FetchFactory<BookmarksResponse> {

  toggle(data: FormToggle) {
      return super.call('/api/bookmarks/toggle', {
        method: 'POST',
        body: data
    })
  }

  getAllByUser(page: number | undefined) {
    return super.call('/api/bookmarks', {
      method: 'GET',
      query: {
        page: page
      }
    })
  }

  logout() {}
}

export default Bookmark