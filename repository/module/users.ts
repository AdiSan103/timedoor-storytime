import FetchFactory from '../factory'
import type { FormProfile, FormProfileImage, UserResponse, StoryByUserResponse } from '~/type/module/users'

class Users extends FetchFactory<UserResponse> {

 getDetail() {    
    return super.call('/api/user/details', {      
      method: 'GET',
    });
 }

 updateProfile(data: FormProfile ) {
  return super.call('/api/user/update-profile', {
    method: 'PUT',
  });
 }

 uploadImage(data: FormProfileImage) {
  return super.call('/api/user/update-profile-image', {
    method: 'POST',
  });
 }
 
 getStoryByUser(data: StoryByUserResponse) {
  return super.call('/api/user/stories', {
    method: 'POST',
  });
 }
}

export default Users