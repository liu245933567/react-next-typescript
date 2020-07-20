import fetch from 'isomorphic-unfetch';

class SelfFetch {
  // 让每个promise请求都trycatch
  async baseMethod(fn) {
    if (fn) {
      try {
        const res = await fn;
        const data = await res.json();
        if (data) {
          return data;
        }
      } catch (error) {
        return {
          isOk: false,
          code: 200,
          message: '出错了',
          result: null
        };
      }
    }
  }

  async get(url) {
    const token = window.localStorage.getItem('token') || '';
    return await this.baseMethod(
      fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`, // 带上token的地方
          'Content-Type': 'application/json'
        }
      })
    );
  }

  async post(url, options = {}) {
    const token = '';
    const res = await this.baseMethod(
      fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods':
            'GET, POST, PATCH, DELETE, PUT, OPTIONS',
          'Access-Control-Allow-Headers':
            'Content-Type, Authorization, X-Requested-With, Access-Control-Allow-Origin, access-control-allow-credentials'
        },
        method: 'POST',
        body: JSON.stringify(options)
      })
    );
    return res;
  }

  async put(url, options) {
    const token = window.localStorage.getItem('token') || '';
    const res = await this.baseMethod(
      fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        method: 'Put',
        body: JSON.stringify(options)
      })
    );
    return res;
  }
}

export default new SelfFetch();
