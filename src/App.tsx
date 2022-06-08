import { QueryClientProvider } from 'react-query';
import './App.css';
import { Router } from './routes';
import { queryClient } from './services/queryClient';
import { ReactQueryDevtools } from 'react-query/devtools';
import { LayoutGroup } from 'framer-motion';
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LayoutGroup id="pokemon">
        <Router />
      </LayoutGroup>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
