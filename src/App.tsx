import { QueryClientProvider } from 'react-query';
import './App.css';
import { Router } from './routes';
import { queryClient } from './services/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
