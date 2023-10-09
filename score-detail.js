// ==UserScript==
// @name         杭电信工教务详细成绩分析
// @namespace    https://chiyukiruon.com
// @version      0.1.0
// @description  try to take over the world!
// @author       ChiyukiRuon
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 版权及版本信息
    console.log("\n   _____ _     _             _    _ \n" +
        "  / ____| |   (_)           | |  (_)\n" +
        " | |    | |__  _ _   _ _   _| | ___ \n" +
        " | |    | '_ \\| | | | | | | | |/ / |\n" +
        " | |____| | | | | |_| | |_| |   <| |\n" +
        "  \\_____|_| |_|_|\\__, |\\__,_|_|\\_\\_|\n" +
        "                  __/ |             \n" +
        "                 |___/              \n" +
        `详细成绩分析插件-v0.1.0` + "\n" +
        "Copyright©ChiyukiRuon" + "\n" +
        "https://chiyukiruon.com")

    function isCredits(num) {
        const regex = /^(\d|\d\.\d|\.\d|\d\.)$/
        return num.match(regex) !== null && num !== 0
    }

    function isFinalScore(list, index) {
        const keywords = ['不及格', '不合格', '合格', '及格', '良好', '中等', '优秀',]

        const nextIndex = index + 1
        const currentElement = list[index]
        const nextElement = list[nextIndex]

        if (!nextElement) {
            if (/^\d{2}$/.test(currentElement)) {
                return true
            }

            return keywords.includes(currentElement)
        }

        return !!(currentElement !== '是' && (nextElement === '是' || /(学院|学部)/.test(nextElement)))
    }

    function isPass(score) {
        if (/^\d{2}$/.test(score)) {
            return Number(score) >= 60
        }else {
            const keywords = ['合格', '及格', '良好', '中等', '优秀',]
            return keywords.includes(score)
        }
    }

    function passNum(list) {
        let num = 0
        for (let i in list) {
            if (list[i].isPass) {
                num++
            }
        }

        return num
    }

    function base64ToString(base64String) {
        let normalString = ''
        if (base64String === '') {
            return
        }
        try {
            normalString = new TextDecoder().decode(Uint8Array.from(atob(base64String), (c) => c.charCodeAt(0)))
        } catch (e) {
            return
        }

        return normalString
    }

    function siftString(string) {
        const regex = /[\u4e00-\u9fa5a-zA-Z0-9\-()（）.+\s]+(?=dd)/g;
        const result = string.match(regex).map(str => str.replace(/dd$/, ''));

        splitCourse(result)

        return splitCourse(result)
    }

    function splitCourse(courseList) {
        const regex = /([\d-]+)-[a-zA-Z0-9-]+-\d+/;
        const result = [];
        let currentSection = [];

        for (let i = 0; i < courseList.length; i++) {
            const item = courseList[i];
            const match = item.match(regex);

            if (match) {
                if (currentSection.length > 0) {
                    result.push(currentSection);
                    currentSection = [];
                }
            }

            currentSection.push(item);
        }

        if (currentSection.length > 0) {
            result.push(currentSection);
        }

        return formatResultData(result);
    }

    function formatResultData(courseList) {
        const resultList = []
        for (let i = 1;i < courseList.length;i++) {
            const item = {}
            const assessmentScore = []
            for (let j = 0;j < courseList[i].length;j++) {
                let courseListItem = courseList[i]
                if (j === 0) {
                    item.courseId = courseListItem[j]
                }
                if (j === 4) {
                    item.courseName = courseListItem[j].trimStart().replace(/^\d/g, "")
                }
                if (isCredits(courseListItem[j]) && j > 4) {
                    item.credits = courseListItem[j].trimStart()
                }
                if (j > 6 && courseListItem[j] !== 'd' && !isCredits(courseListItem[j])) {
                    if (isFinalScore(courseListItem, j)) {
                        item.finalScore = courseListItem[j].trimStart()
                        item.isPass = isPass(courseListItem[j])
                    }else if (isCredits(courseListItem[j-1])) {
                        item.performanceScore = courseListItem[j].trimStart()
                    }else {
                        if (courseListItem[j] === '是') {
                            item.isRenovate = courseListItem[j] === '是'
                        }else if (courseListItem[j].match(/(学院|学部)/)) {
                            item.college = courseListItem[j].trimStart()
                        }else {
                            assessmentScore.push(courseListItem[j].trimStart())
                        }
                    }
                }
            }
            item.assessmentScore = assessmentScore
            resultList.push(item)
        }

        return resultList
    }

    /**
     * 创建表格
     *
     * @param {Array} list
     * @return {String} 文本类型的HTML
     * @author ChiyukiRuon
     * */
    function createTableValue(list) {
        var tableText = ''
        for (var i = 0;i < list.length;i++) {
            var assessmentScore = ''
            for(var j = 0;j < list[i].assessmentScore.length;j++) {
                assessmentScore += `${list[i].assessmentScore[j]}&nbsp;`
            }
            tableText += `<tr><td>${list[i].courseName}</td><td>${list[i].finalScore}</td><td>${list[i].performanceScore}</td><td>${assessmentScore}</td><td>${list[i].credits}</td><td>${list[i].college}</td></tr>`
        }
        return tableText
    }

    var normalString = base64ToString(document.getElementById('__VIEWSTATE').value)
    var resultList = siftString(normalString)

    var targetElement = document.querySelector('#tbXsxx')

    if (targetElement) {
        var newElement = document.createElement('div')
        newElement.innerHTML = `<table style="width: 100%;"><tr><th>科目</th><th>最终成绩</th><th>平时成绩</th><th>考核成绩</th><th>学分</th><th>开课学院</th></tr>${createTableValue(resultList)}</table>`
        newElement.style.width = '100%'

        targetElement.parentNode.insertBefore(newElement, targetElement)
    }
})();