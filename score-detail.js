// ==UserScript==
// @name         杭电信工教务成绩分析
// @namespace    https://chiyukiruon.com
// @version      1.1.0
// @description  用于分析杭电信工教务的详细成绩并展示
// @author       ChiyukiRuon
// @source       https://chiyukiruon.com
// @license      GNU General Public License v3
// @updateURL    https://raw.githubusercontent.com/ChiyukiRuon/hziee-score-detail-js/main/score-detail.js
// @downloadURL  https://raw.githubusercontent.com/ChiyukiRuon/hziee-score-detail-js/main/score-detail.js
// @supportURL   https://github.com/ChiyukiRuon/hziee-score-detail-js/issues
// @match        http://10.130.5.235:6379/*
// @match        http://10.130.5.236/*
// @match        http://10.130.5.229:6379/*
// @icon         data:image/png;base64,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
// @grant        GM_addStyle
// @grant        GM_setClipboard
// @grant        GM_notification
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict'

    // 检查浏览器是否支持通知
    if (!("Notification" in window)) {
        console.info("此浏览器不支持通知")
    } else {
        Notification.requestPermission().then((permission) => {
            if (permission === 'default') {
                console.info('未设置通知权限')
            }
        });
    }

    // 注册全局样式
    let css = `table {border-collapse: collapse;width: 100%;} table, th, td {border-bottom: 1px solid rgb(236, 238, 244);} table tr:nth-child(even) {background-color: rgb(250, 250, 250);} table tr:nth-child(odd) {background-color: rgb(255, 255, 255);} .main-table:hover {background-color: rgb(245, 247, 250)} .table-text {margin-left: 10px} .btn-group {background-color: #FFFFFF; color: #303133; border: 1px solid #DCDFE6; border-radius: 5px; padding: 5px 10px; margin: 5px 10px; transition-duration: 0.4s} .btn-group:hover {color: #47A2FF; border: 1px solid #47A2FF; cursor: pointer; transition-duration: 0.4s}`
    GM_addStyle(css)

    // 版权及版本信息
    console.log("\n   _____ _     _             _    _ \n" +
        "  / ____| |   (_)           | |  (_)\n" +
        " | |    | |__  _ _   _ _   _| | ___ \n" +
        " | |    | '_ \\| | | | | | | | |/ / |\n" +
        " | |____| | | | | |_| | |_| |   <| |\n" +
        "  \\_____|_| |_|_|\\__, |\\__,_|_|\\_\\_|\n" +
        "                  __/ |             \n" +
        "                 |___/              \n" +
        "杭电信工教务成绩分析-v1.1.0\n" +
        "Copyright©ChiyukiRuon\n" +
        "https://chiyukiruon.com")

    // 隐藏原始表格
    const originTable = document.getElementById('tbXsxx')
    const originData = document.getElementById('DataGrid1')
    if (originTable) {
        originTable.style.display = 'none'
    }

    if (originData) {
        originData.style.display = 'none'
    }

    /**
     * 切换原始表格和详细成绩表格
     *
     * @return void
     * @author ChiyukiRuon
     * */
    function switchTable() {
        const scoreDetail = document.getElementById('score-detail')
        const noDataString = document.getElementById('no-data')

        if (scoreDetail) scoreDetail.style.display = scoreDetail.style.display === 'none'?'':'none'
        if (noDataString) noDataString.style.display = noDataString.style.display === 'none'?'':'none'

        originTable.style.display = originTable.style.display === 'none'?'':'none'
        originData.style.display = originData.style.display === 'none'?'':'none'
    }

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
        let tableText = list.length === 0?`<div id="no-data" style="color: #E6A23C; font-size: medium; font-weight: bold">暂无数据</div>`:''
        for (let i = 0;i < list.length;i++) {
            let assessmentScore = ''
            for(let j = 0;j < list[i].assessmentScore.length;j++) {
                assessmentScore += `${list[i].assessmentScore[j]}&nbsp;`
            }

            if (list[i].isPass) {
                tableText += `<tr class="main-table" style="color: rgb(96, 98, 102); height: 40px"><td style="font-weight: bold;"><div class="table-text">${list[i].courseName}</div></td><td style="color: rgb(126, 192, 80)"><div class="table-text">${list[i].finalScore}</div></td><td><div class="table-text">${list[i].performanceScore}</div></td><td><div class="table-text">${assessmentScore}</div></td><td><div class="table-text">${list[i].credits}</div></td><td><div class="table-text">${list[i].college}</div></td></tr>`
            }else {
                tableText += `<tr class="main-table" style="color: rgb(96, 98, 102); height: 40px"><td style="font-weight: bold;"><div class="table-text">${list[i].courseName}</div></td><td style="color: rgb(228, 116, 112)"><div class="table-text">${list[i].finalScore}</div></td><td><div class="table-text">${list[i].performanceScore}</div></td><td><div class="table-text">${assessmentScore}</div></td><td><div class="table-text">${list[i].credits}</div></td><td><div class="table-text">${list[i].college}</div></td></tr>`
            }
        }
        return tableText.replace(/undefined/g, ' ')
    }

    let normalString = base64ToString(document.getElementById('__VIEWSTATE').value)
    let resultList = siftString(normalString)

    let targetElement = document.querySelector('#tbXsxx')

    if (targetElement) {
        const newElement = document.createElement('div')
        newElement.innerHTML = `<table id="score-detail" style="width: 100%; font-size: medium; text-align: left;"><tr style="color: rgb(145, 147, 152); height: 40px"><th><div class="table-text">科目</div></th><th><div class="table-text">最终成绩</div></th><th><div class="table-text">平时成绩</div></th><th><div class="table-text">考核成绩</div></th><th><div class="table-text">学分</div></th><th><div class="table-text">开课学院</div></th></tr>${createTableValue(resultList)}</table>`
        newElement.style.width = '100%'

        targetElement.parentNode.insertBefore(newElement, targetElement)

        // 插入切换原始表格和详细成绩表格和复制__VIEWSTATE的按钮
        // 定义按钮容器及样式
        const btnContainer = document.createElement('div')
        btnContainer.style.display = 'flex'
        btnContainer.style.justifyContent = 'flex-end'

        // 定义切换表格按钮
        const changeBtn = document.createElement('div')
        changeBtn.innerText = '切换表格'
        changeBtn.className = 'btn-group'

        // 定义复制VIEWSTATE按钮
        const copyViewState = document.createElement('div')
        copyViewState.innerText = '将 __VIEWSTATE 复制到剪切板'
        copyViewState.className = 'btn-group'

        // 注册按钮容器以及按钮
        btnContainer.appendChild(changeBtn)
        btnContainer.appendChild(copyViewState)
        newElement.parentNode.insertBefore(btnContainer, newElement)

        // 注册按钮点击事件
        changeBtn.addEventListener('click', switchTable)
        copyViewState.addEventListener('click', function (){
            const viewstate = document.getElementById('__VIEWSTATE')
            if (viewstate) {
                GM_setClipboard(viewstate.value)
                GM_notification({
                    title: '杭电信工教务成绩分析',
                    text: '__VIEWSTATE 已复制到剪切板',
                    timeout: 10000
                })
            }else {
                GM_notification({
                    title: '杭电信工教务成绩分析',
                    text: '__VIEWSTATE 复制失败。无法获取 __VIEWSTATE',
                    timeout: 10000
                })
            }
        })
    }
})();