import { QueryClientProvider } from 'react-query';
import './App.css';
import { Router } from './routes';
import { queryClient } from './services/queryClient';
import { ReactQueryDevtools } from 'react-query/devtools';
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
