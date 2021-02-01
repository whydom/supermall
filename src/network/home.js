// 对request再进行一层封装
import{request} from 'network/request'

export function getmultidata() {
  return request({
    url: '/home/multidata'
  })
}