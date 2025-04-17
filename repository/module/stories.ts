import type { PropsStory, FormData, KeywordFilter } from '~/type/module/stories'
import FetchFactory from '../factory'

class Stories extends FetchFactory<PropsStory> {
  // async getStoriesFilterByCategory(slug: string) {
  //   return await useAsyncData(() => {
  //     return super.call('/api/stories?category=' + slug, {
  //       method: 'GET'
  //     })
  //   })
  // }

  // async getStories(sort_by: string) {
  //   return await useAsyncData(() => {
  //     return super.call('/api/stories?sort_by=' + sort_by, {
  //       method: 'GET'
  //     })
  //   })
  // }

  // getStoriesFilterByCategory(slug: string) {
  //     return super.call('/api/stories?category=' + slug, {
  //       method: 'GET'
  //   })
  // }

  // getStories(sort_by: string) {
  //   return super.call('/api/stories?sort_by=' + sort_by, {
  //     method: 'GET'
  //   })
  // }

  // getSearchStories(search: any) {
  //   return super.call('/api/stories?search=' + search, {
  //     method: 'GET'
  //   })
  // }

  getFilter(data: KeywordFilter) {
    return super.call('/api/stories', {
      method: 'GET',
      query: data
    }) 
  }

  getDetailStory(id: any) {
    return super.call('/api/stories/' + id, {
      method: 'GET'
    })
  }

  removeStory(id: any) {
    return super.call('/api/stories/' + id, {
      method: 'DELETE'
    })
  }

  addStory(data: FormData) {
    return super.call('/api/stories', {
      method: 'POST',
      body: data
    })
  }
}

export default Stories