import store from 'store';

export function routeAuthorize(path) {
    var user = store.getState().userReducer;
    var isAuthorize = user.loggedUser.isAuthorize;
    var role = user.loggedUser.role;
    var path = '';
    if (isAuthorize) {
        if (path.indexOf('/login')) {
            path = '/';
        } else {
            switch (role) {
                case 0:
                    if (path.indexOf('/approve') >= 0) {
                        path = '/'
                    }

                    break;
                case 1:
                    //do nothing
                    break;

            }
        }

    } else {
        path = '/login'
    }
    return path;
}

export function setAuthorizeToken() {

}
