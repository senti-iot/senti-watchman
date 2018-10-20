# Problem Codes

The `problem` property on responses is filled with the best
guess on where the problem lies.  You can use a switch to
check the problem.  The values are exposed as `CONSTANTS`
hanging on your built API.

```
Constant        VALUE               Status Code   Explanation
----------------------------------------------------------------------------------------
NONE             null               200-299       No problems.
CLIENT_ERROR     'CLIENT_ERROR'     400-499       Any non-specific 400 series error.
SERVER_ERROR     'SERVER_ERROR'     500-599       Any 500 series error.
TIMEOUT_ERROR    'TIMEOUT_ERROR'    ---           Server didn't respond in time.
CONNECTION_ERROR 'CONNECTION_ERROR' ---           Server not available, bad dns.
NETWORK_ERROR    'NETWORK_ERROR'    ---           Network not available.
CANCEL_ERROR     'CANCEL_ERROR'     ---           Request has been cancelled. Only possible if `cancelToken` is provided in config, see axios `Cancellation`.
```

```js

const apiErrorHandler = (errorcode) => {
		switch (errorcode) {
		case 'NONE': return null
		case 'CLIENT_ERROR': return 'CLIENT_ERROR' 
		case 'SERVER_ERROR': return 'SERVER_ERROR' 
		case 'TIMEOUT_ERROR': return 'TIMEOUT_ERROR'
		case 'CONNECTION_ERROR': return 'CONNECTION_ERROR'
		case 'NETWORK_ERROR': return 'NETWORK_ERROR'
		case 'CANCEL_ERROR': return 'CANCEL_ERROR'
		default: return null
		break
	}
}

if (response.ok && response.status == 200) {
    //displaying data to screen
  } else {
	//display alert failed to call API
	
  }
```