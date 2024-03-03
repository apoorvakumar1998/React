import { useEffect, useState } from "react";

const useOnlineStatus = () => {

  [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener('offline', () => {
      setOnlineStatus(false);
    })

    window.addEventListener('online', () => {
      setOnlineStatus(true);
    })
  }, [])
  console.log('useOnlineStatus called');
  return onlineStatus;

}

export default useOnlineStatus;
