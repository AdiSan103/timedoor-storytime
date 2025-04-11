import type { LoginForm, RegisterForm, UserAuthRequest } from '~/type/module/auth'
import FetchFactory from '../factory'

class Auth extends FetchFactory<UserAuthRequest> {

  register(data: RegisterForm) {
      return super.call('/api/register', {
        method: 'POST',
        body: data
    })
  }

  login(data: LoginForm) {
    return super.call('/api/login', {
      method: 'POST',
      body: data
    })
  }

  logout() {}
}

export default Auth