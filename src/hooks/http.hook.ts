import { useCallback } from "react";

const useHttp = () => {
    const request = useCallback(async (
      url: string, 
      method: string = 'GET', 
      body = null, 
      headers = {'Content-Type': 'application/json', 'Authorization': 'OAuth y0__xDhp46KCBix9TYgwMrU5RI6D6AT0_pw5h6mSh8Ef8vWokUbTg'}) => {
        try {
            const res = await fetch(url, {method, body, headers});

            if (!res.ok) { 
                throw new Error(`Could not fetch ${url}, status: ${res?.status}`);
            }

            const data = await res.json();
    
            return data;
        } catch(e) {
            throw e;
        }
    }, [])

    return {request} 
}

export default useHttp;
