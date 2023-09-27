import home from '@view/home/index.vue'
import { RouteRecordRaw } from 'vue-router'
// import notFound from '@view/notFound'
// import drugsQuery from '@view/drugsQuery'
// import readCard from '@view/readCard'
// import selectInfo from '@view/selectInfo'
// import diagnosisQuery from '@view/diagnosisQuery'
// import notPatientInfo from '@view/notPatientInfo'
// import selectGhWay from '@view/selectGhWay'
// import selectDepartment from '@view/selectDepartment'
// import selectDoctor from '@view/selectDoctor'
// import selectTime from '@view/selectTime'
// import selectDate from '@view/selectDate'
// import selectFyxx from '@view/selectFyxx'
// import registerPay from '@view/registerPay'
// import result from '@view/result'
// import jianka from '@view/jianka'
export default [
  {
    path: '',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: home
  }/*, {
    path: '/registerPay',
    name: 'registerPay',
    component: registerPay
  }, {
    path: '/readCard',
    name: 'readCard',
    component: readCard
  }, {
    path: '/diagnosisQuery',
    name: 'diagnosisQuery',
    component: diagnosisQuery
  }, {
    path: '/selectInfo',
    name: 'selectInfo',
    component: selectInfo
  }, {
    path: '/selectFyxx',
    name: 'selectFyxx',
    component: selectFyxx
  }, {
    path: '/selectDate',
    name: 'selectDate',
    component: selectDate
  }, {
    path: '/selectTime',
    name: 'selectTime',
    component: selectTime
  }, {
    path: '/notPatientInfo',
    name: 'notPatientInfo',
    component: notPatientInfo
  }, {
    path: '/selectGhWay',
    name: 'selectGhWay',
    component: selectGhWay
  }, {
    path: '/selectDepartment',
    name: 'selectDepartment',
    component: selectDepartment
  }, {
    path: '/selectDoctor',
    name: 'selectDoctor',
    component: selectDoctor
  }, {
    path: '/drugsQuery',
    name: 'drugsQuery',
    component: drugsQuery
  }, {
    path: '/result',
    name: 'result',
    component: result
  }, {
    path: '/jianka',
    name: 'jianka',
    component: jianka
  }, {
    path: '*',
    component: notFound
  }*/
] as RouteRecordRaw[]
