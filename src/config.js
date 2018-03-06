import Contacts from './containers/Contacts';
import News from './containers/News';

const config = [
    {
        path: '/',
        component: News,
    },
    {
        path: '/contacts',
        component: Contacts,
    }
];

export default config;