import Mock from 'mockjs'
import CONST from '@/assets/consts'
export default {
    getMenu: (config) => {
        console.log(config);
        const { user_name, password } = JSON.parse(config.body)
        console.log("body", JSON.parse(config.body))
            // 先判断用户是否存在
            // 判断账号和密码是否对应
        console.log("username", user_name)
        console.log("password", password)
        if (user_name === 'admin' && password === 'admin') {
            return {
                code: CONST.RESPONSE_CODE.ACCEPTED,
                data: {
                    status: true,
                    menu: [{
                            path: '/',
                            name: 'home',
                            label: '首页',
                            icon: 's-home',
                            url: 'Home/index'
                        },
                        {
                            path: '/manage',
                            name: 'manage',
                            label: '课程管理',
                            icon: 'notebook-2',
                            url: 'Manage/index'
                        },
                        {
                            path: '/examine',
                            name: 'examine',
                            label: '新课程审核',
                            icon: 'edit',
                            url: 'Examine/index'
                        },
                        {
                            path: '/enrollmentRelease',
                            name: 'enrollmentRelease',
                            label: '选课时间发布',
                            icon: 'document-checked',
                            url: 'EnrollmentRelease/enrollmentRelease'
                        }
                    ],
                    token: Mock.Random.guid(),
                    message: '获取成功'
                }
            }
        } else if (user_name === 'teacher' && password === 'teacher') {
            return {
                code: CONST.RESPONSE_CODE.ACCEPTED,
                data: {
                    status: true,
                    menu: [{
                            path: '/',
                            name: 'home',
                            label: '首页',
                            icon: 's-home',
                            url: 'Home/index'
                        },
                        {
                            path: '/release',
                            name: 'release',
                            label: '成绩发布',
                            icon: 'document-checked',
                            url: 'Release/index'
                        },
                        {
                            path: '/application',
                            name: 'application',
                            label: '开课申请',
                            icon: 'notebook-1',
                            url: 'Application/index'
                        }
                    ],
                    token: Mock.Random.guid(),
                    message: '获取成功'
                }
            }
        } else if (user_name === 'student' && password === 'student') {
            return {
                code: CONST.RESPONSE_CODE.ACCEPTED,
                data: {
                    status: true,
                    menu: [{
                            path: '/',
                            name: 'home',
                            label: '首页',
                            icon: 's-home',
                            url: 'Home/index'
                        },
                        {
                            path: '/score',
                            name: 'score',
                            label: '成绩发布',
                            icon: 'document-checked',
                            url: 'Score/index'
                        },
                        {
                            path: '/select',
                            name: 'select',
                            label: '选课',
                            icon: 'reading',
                            url: 'Select/index'
                        }
                    ],
                    token: Mock.Random.guid(),
                    message: '获取成功'
                }
            }
        } else {
            return {
                code: CONST.RESPONSE_CODE.ACCEPTED,
                data: {
                    status: false,
                    message: '密码错误'
                }
            }
        }

    }
}