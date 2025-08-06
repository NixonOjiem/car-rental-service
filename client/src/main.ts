import './assets/main.css'

import { createApp, provide, h } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Apollo Client imports
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'
import { DefaultApolloClient } from '@vue/apollo-composable'

// --- Apollo Client Configuration ---
const httpLink = createHttpLink({
  uri: 'http://localhost:3000/gql', // Your GraphQL endpoint
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

app.use(createPinia())
app.use(router)

app.mount('#app')
