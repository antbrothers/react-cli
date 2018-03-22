/*
 * @Author: jianxi_lin 
 * 日志模块
 * @Date: 2018-03-22 13:50:55 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-03-22 18:07:44
 */
var winston = require('winston');
var expressWinston = require('express-winston');
require('winston-daily-rotate-file');
let moment = require('moment');
var path = require('path');


// 日志打印位置
const LOGS_DIR = path.join(__dirname, '../logs');
// 公共配置选项
const LOGGER_COMMON_CONFIG = {
    meta: true,
    msg: "HTTP {{req.method}} {{req.url}}",
    expressFormat: true,
    colorize: true,
    ignoreRoute: function (req, res) { return false; }
};
var Logger = {
    /**
     * 在路由之前记录
     * @param {*} app 
     */
    initRequestLogger(app) {
        app.use(expressWinston.logger({
            transports: [
                // 控制台
                new winston.transports.Console({
                    json: true,
                    colorize: true
                }),
                // 文件
                new winston.transports.File({
                    level: 'info',                                   
                    filename: LOGS_DIR + '/access.log.txt'                   
                })                    
            ],
           LOGGER_COMMON_CONFIG
        }))
    },
    /**
     * 在路由之后由意义
     * 错误日志记录
     * @param {} app 
     */
    initErrorLogger(app) {
        app.use(expressWinston.logger({
            transports: [
                new winston.transports.Console({
                    json: true,
                    colorize: true
                }),
                // 文件
                new winston.transports.File({
                    level: 'error',
                    filename: LOGS_DIR + '/error.log.txt'                    
                })
            ],
            LOGGER_COMMON_CONFIG
        }))
    }
}
module.exports = Logger;