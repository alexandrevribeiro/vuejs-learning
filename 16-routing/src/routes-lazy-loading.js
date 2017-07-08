import Home from './components/Home.vue';
import Header from './components/Header.vue';
// import User from './components/user/User.vue';
// import UserStart from './components/user/UserStart.vue';
// import UserEdit from './components/user/UserEdit.vue';
// import UserDetail from './components/user/UserDetail.vue';

// Using "Webpack lazy-loading" to load parts of the application
// only when they are needed
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    }, 'user'); // -> Group name
};

const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    }, 'user'); // -> Group name
};

const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    }, 'user'); // -> Group name
};

const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));
    }, 'user'); // -> Group name
};

const beforeEnter = (to, from, next) => {
    console.info(`Before enter URL '${to.path}'.`);
    next();
};
export const routes = [

    { path: '/', name: 'home', /*component: Home,*/ components: {
        default: Home,
        'header-top': Header
    } },

    // { path: '/user/:id', component: User, props: true }
    { path: '/users', component: User, children: [
        { path: '', component: UserStart },
        { path: ':id', component: UserDetail, props: true, beforeEnter: beforeEnter },
        { path: ':id/edit', component: UserEdit, name: 'userEdit', props: true },
    ]},

    { path: '/redirect-me', redirect: '/users' /* { name: 'userEdit' } */},

    { path: '*', redirect: '/' } // Redirects all non-matched routes to '/'
];