# 杭电信工详细成绩分析脚本

用于在教务系统中分析详细的期末成绩，包括平时分，期末考试卷面分，总成绩。  
觉得好用的话不如在Github给我点个Star（

## 最新功能 | New features
* 绩点计算（**计算结果仅供参考**）
  * 去除当前学期未通过的学科以及“公共选修课程”后计算
  * 计算公式：`当前学期的(课程得分*课程学分)求和/总学分/20`
* 防止VPN客户端自动退出
  * 每隔30s发送一次请求防止VPN客户端因为长期无操作自动退出登录（默认关闭）

## 主要功能 | Main functions
1. 分析课程的平时成绩、考试卷面分/大作业得分、最终成绩
2. ~~更美观的表格（~~
3. 计算当前学期的绩点
4. 防止VPN客户端自动退出

## 免责声明 | Disclaimer
* 该脚本不传输和储存任何个人信息
* 本项目**不是**杭州电子科技大学信息工程学院官方的项目，**不代表**杭州电子科技大学信息工程学院官方的任何立场和态度
* 最终的考试成绩以及绩点以**教务系统为准**，本项目仅供参考

> 友情链接：[杭州电子科技大学信息工程学院](https://www.hziee.edu.cn/)  
> 原理及实现思路：[正方教务管理系统详细成绩获取的实例](https://chiyukiruon.com/2023/08/15/hziee-score-detail/)