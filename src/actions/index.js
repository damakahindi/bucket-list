// export function LoginUser(item){
//   return {
//     type:'LOGIN_USER',
//     user: item.user
//   }
// }

export function LogoutUser(item){
  return {
    type:'LOGOUT_USER',
    user: item.user
  }
}

export function AddSection(item){
  return {
    type:'LOGIN_USER',
    user: item.section
  }
}

export function AddBucketList(item){
  return {
    type:'LOGIN_USER',
    user: item.bucketlist
  }
}
export const LoginUser = user => ({ type: "LOGIN_USER", user: user });