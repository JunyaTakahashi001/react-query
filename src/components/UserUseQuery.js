import { useQuery } from 'react-query';

/**
 *useQueryを使用する場合
*/

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

function User() {

  const { data, isLoading, isError, error, status } = useQuery('users', fetchUsers, {
    retry: 5, // リトライの回数をデフォルトの3回から5回へ変更
    refetchOnWindowFocus: false, // ブラウザに戻った時再度fetchするかの設定
    cacheTime: 5000, // キャッシュ時間(ms)
    refetchInterval: 10000, // ポーリング設定(ms)
    notifyOnChangeProps: ["data"], // dataプロパティのみ監視して再レンダリングを制御
  });

  // ロード中の処理
  if (isLoading) {
    return <span>Loading...</span>;
  }

 // データ取得に失敗した時の処理
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <h2>ユーザ一覧</h2>
      <div>
        {data.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </div>
  );
}

export default User;