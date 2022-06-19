import request from '@/utils/request'

export default {

    //1 根据课程id获取章节和小节
    getAllChapterVideo(courseId) {
        return request({
            url: `/eduservice/chapter/getChapterVideo/${courseId}`,
            method: 'get'
        })
    },

    //2 添加章节
    addChapter(eduChapter) {
        return request({
            url: '/eduservice/chapter/addChapter',
            method: 'post',
            data: eduChapter
        })
    },

    //3 根据id查询章节
    getChapter(chapterId) {
        return request({
            url: `/eduservice/chapter/getChapterInfo/${chapterId}`,
            method: 'get'
        })
    },

    //4 修改章节
    updateChapter(eduChapter) {
        return request({
            url: '/eduservice/chapter/updateChapter',
            method: 'post',
            data: eduChapter
        })
    },

    //5 删除章节
    deleteChapter(chapterId) {
        return request({
            url: `/eduservice/chapter/${chapterId}`,
            method: 'delete'
        })
    }
    
}