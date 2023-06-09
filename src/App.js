import { useState } from 'react';
// import User from './components/User'; // useQueryを使用しない場合
import User from './components/UserUseQuery'; // useQueryを使用する場合
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

/**
* React Queryの使い方
* 参考：https://reffect.co.jp/react/react-use-query
*/

const queryClient = new QueryClient();

function App() {
  const [show, setShow] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ margin: '2em' }}>
        <div>
          <button onClick={() => setShow(!show)}>Toggle</button>
        </div>
        <h1>ユーザ情報</h1>
        {show && <User />}
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
