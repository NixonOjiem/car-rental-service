import './assets/main.css'

import { createApp, provide, h } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import gAuthPlugin from 'vue3-google-oauth2';

// Apollo Client imports
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'
import { DefaultApolloClient } from '@vue/apollo-composable'

// --- Apollo Client Configuration ---
const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_URI,
  //uri: 'http://localhost:3000/gql', // Your GraphQL endpoint
});

const authLink = setContext((_, { headers }) => {
  // Get the authentication token from local storage if it exists
  const token = localStorage.getItem('authToken');
  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
// --- End Apollo Configuration ---

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

app.use(createPinia())
app.use(router)
// Configure and use the plugin
app.use(gAuthPlugin, {
  clientId: GOOGLE_CLIENT_ID,
  scope: 'email profile openid',
  prompt: 'consent'
});

app.mount('#app')
