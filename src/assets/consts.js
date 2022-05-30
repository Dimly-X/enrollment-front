export default {
    name: 'CONST',
    RESPONSE_CODE: {
        EXCEPTION: 2,
        UNAUTHORIZED: 1,
        ACCEPTED: 0
    },
    RESPONSE_STATUS: {
        POSITIVE: true,
        NEGATIVE: false
    },
    USER_ROLE: {
        STUDENT: 0,
        TEACHER: 1,
        ADMIN: 2
    },
    STRING: {
        ERROR: '未知错误',
        UNAUTHORIZED: '没有权限'
    },
    menuList: [
        [{
            path: '/',
            name: 'home',
            label: '首页',
            icon: 's-home',
            url: 'Anyone/home'
        },
            {
                path: '/score',
                name: 'score',
                label: '我的成绩',
                icon: 'document-checked',
                url: 'Student/score'
            },
            {
                path: '/select',
                name: 'select',
                label: '选课',
                icon: 'reading',
                url: 'Student/select'
            }
        ],
        [{
            path: '/',
            name: 'home',
            label: '首页',
            icon: 's-home',
            url: 'Anyone/home'
        },
            {
                path: '/release',
                name: 'release',
                label: '成绩发布',
                icon: 'document-checked',
                url: 'Teacher/release'
            },
            {
                path: '/application',
                name: 'application',
                label: '开课申请',
                icon: 'notebook-1',
                url: 'Teacher/application'
            }
        ],
        [{
            path: '/',
            name: 'home',
            label: '首页',
            icon: 's-home',
            url: 'Anyone/home'
        },
            {
                path: '/manage',
                name: 'manage',
                label: '课程管理',
                icon: 'notebook-2',
                url: 'Admin/manage'
            },
            {
                path: '/examine',
                name: 'examine',
                label: '新课程审核',
                icon: 'edit',
                url: 'Admin/examine'
            },
            {
                path: '/enrollmentRelease',
                name: 'enrollmentRelease',
                label: '选课时间发布',
                icon: 'document-checked',
                url: 'Admin/enrollmentRelease'
            }
        ]
    ],
    categoryList: ['专业必修', '专业任意选修', '学科基础课', '分布式课程', '体育类', '思政类', '英语类'],
    departmentList: ['软件工程学院', '法学院', '马克思主义学院', '经济学院', '社会发展学院', '外语学院', '国际汉语文化学院', '心理与认知科学学院'],
    statusList: ['待处理', '通过', '拒绝'],
    roleList: ['学生', '教师', '教务'],
    dayList: ['周一','周二','周三','周四','周五','周六','周日'],
    getTime(id){
        return ((id % 10) + 1) + ''
    },
    getDay(id){
        console.log('getday', id/10)
        return this.dayList[parseInt(id / 10)];
    }
}