import {useState, useEffect } from 'react'

function usePromise(promiseCreator, deps) {
  // 대기 중/완료/실패에 대한 상태 관리
  const [Loading, setLoading] = useState(false);
  const [Resolved, setResolved] = useState(null);
  const [Error, setError] = useState(null);
  
  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const Resolved = await promiseCreator();
        setResolved(Resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return (
    [Loading, Resolved, Error]
  )
}

export default usePromise
