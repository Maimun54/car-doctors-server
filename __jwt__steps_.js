/*
*install jsonwebtoken
*jwt.sign(payload,secret,{expiresIn:'1hr'})
*token client
*/



/*
*how to store token in server side
1.memory -->ok type
2.local storage -->ok type (xss)
3. cookies: http only
*/
/*
* set cookies with http only for development secure:false
* cors
 app.use(cors({
  
  origin:['http://localhost:5173'],
  credentials:true
  
}))
3.client side axios 
generate a token by using jwt.sign
create api set to cookie http only ,secure ,sameSite
from client side : axios withCredentials true 
cors setup origin 
*/