/*
Navicat MySQL Data Transfer

Source Server         : 222
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2018-05-20 12:30:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `pic`
-- ----------------------------
DROP TABLE IF EXISTS `pic`;
CREATE TABLE `pic` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `url` varchar(200) CHARACTER SET utf8 NOT NULL,
  `title` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `price` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `new price` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of pic
-- ----------------------------
INSERT INTO `pic` VALUES ('1', 'https://oss.nubia.com/resources/images/nubia-logo-inverse-x2-cn.png', null, null, null);
INSERT INTO `pic` VALUES ('2', 'http://oss.static.nubia.cn/blockimage/151312794238.jpg', null, null, null);
INSERT INTO `pic` VALUES ('3', 'http://oss.static.nubia.cn/blockimage/151312794238.jpg', null, null, null);
INSERT INTO `pic` VALUES ('4', 'http://oss.static.nubia.cn/blockimage/151312794238.jpg', null, null, null);
INSERT INTO `pic` VALUES ('5', 'http://oss.static.nubia.cn/blockimage/151062078388.jpg', null, null, null);
INSERT INTO `pic` VALUES ('6', 'http://oss.static.nubia.cn/blockimage/151062079194.jpg', null, null, null);
INSERT INTO `pic` VALUES ('7', 'http://oss.static.nubia.cn/blockimage/15106207985.jpg', null, null, null);
INSERT INTO `pic` VALUES ('8', 'http://oss.static.nubia.cn/blockimage/151055869460.jpg', null, null, null);
INSERT INTO `pic` VALUES ('9', 'http://oss.static.nubia.cn/blockimage/151814611074.jpg', null, null, null);
INSERT INTO `pic` VALUES ('10', 'http://oss.static.nubia.cn/blockimage/15117611441.jpg', null, null, null);
INSERT INTO `pic` VALUES ('11', 'http://oss.static.nubia.cn/blockimage/151176140231.jpg', null, null, null);
INSERT INTO `pic` VALUES ('12', 'http://oss.static.nubia.cn/blockimage/151176100782.jpg', null, null, null);
INSERT INTO `pic` VALUES ('13', 'http://oss.static.nubia.cn/blockimage/151055932689.jpg', null, null, null);
INSERT INTO `pic` VALUES ('14', 'http://oss.static.nubia.cn/blockimage/151263637992.jpg', null, null, null);
INSERT INTO `pic` VALUES ('15', 'http://oss.static.nubia.cn/blockimage/150466099148.jpg', null, null, null);
INSERT INTO `pic` VALUES ('16', 'http://oss.static.nubia.cn/blockimage/149622931785.jpg', null, null, null);
INSERT INTO `pic` VALUES ('17', 'http://oss.static.nubia.cn/blockimage/150779321254.jpg', null, null, null);
INSERT INTO `pic` VALUES ('18', 'http://oss.static.nubia.cn/blockimage/149673411484.jpg', null, null, null);
INSERT INTO `pic` VALUES ('19', 'http://oss.static.nubia.cn/blockimage/15063077369.jpg', null, null, null);
INSERT INTO `pic` VALUES ('20', 'http://oss.static.nubia.cn/blockimage/149673466848.jpg', null, null, null);
INSERT INTO `pic` VALUES ('21', 'http://oss.static.nubia.cn/blockimage/15063077369.jpg', null, null, null);
INSERT INTO `pic` VALUES ('22', 'http://oss.static.nubia.cn/blockimage/149673451134.jpg', null, null, null);
INSERT INTO `pic` VALUES ('23', 'http://oss.static.nubia.cn/blockimage/150450759557.jpg', null, null, null);
INSERT INTO `pic` VALUES ('24', 'http://oss.static.nubia.cn/blockimage/151963062455.jpg', null, null, null);
INSERT INTO `pic` VALUES ('25', 'http://oss.static.nubia.cn/blockimage/151203459321.jpg', null, null, null);
INSERT INTO `pic` VALUES ('26', 'http://oss.static.nubia.cn/blockimage/150848149454.jpg', null, null, null);
INSERT INTO `pic` VALUES ('27', 'http://oss.static.nubia.cn/blockimage/151297558721.jpg', null, null, null);
INSERT INTO `pic` VALUES ('28', 'http://oss.static.nubia.cn/blockimage/150881099192.jpg', null, null, null);
INSERT INTO `pic` VALUES ('29', 'http://oss.static.nubia.cn/blockimage/150881106046.jpg', null, null, null);
INSERT INTO `pic` VALUES ('30', 'http://oss.static.nubia.cn/blockimage/14991564579.jpg', null, null, null);
INSERT INTO `pic` VALUES ('31', 'http://oss.static.nubia.cn/blockimage/149915648018.jpg', null, null, null);
INSERT INTO `pic` VALUES ('32', 'https://account.nubia.com/res1/images/govIcon.png', null, null, null);
INSERT INTO `pic` VALUES ('33', 'https://oss.static.nubia.cn/shopmenu/150779731849.jpg?x-oss-process=image/resize,w_92,h_92', null, null, null);
INSERT INTO `pic` VALUES ('34', 'https://oss.static.nubia.cn/shopmenu/150779735188.jpg?x-oss-process=image/resize,w_92,h_92', null, null, null);
INSERT INTO `pic` VALUES ('35', 'https://oss.static.nubia.cn/shopmenu/150779738267.jpg?x-oss-process=image/resize,w_92,h_92', null, null, null);
INSERT INTO `pic` VALUES ('36', 'https://oss.static.nubia.cn/pic/150777823783.jpg', null, null, null);
INSERT INTO `pic` VALUES ('37', 'https://oss.static.nubia.cn/pic/150777823783.jpg', null, null, null);
INSERT INTO `pic` VALUES ('38', 'https://oss.static.nubia.cn/pic/150777823747.jpg', null, null, null);
INSERT INTO `pic` VALUES ('39', 'https://oss.static.nubia.cn/pic/150762271630.jpg', 'Z17S全面屏', '3999.00', null);
INSERT INTO `pic` VALUES ('40', 'https://oss.static.nubia.cn/pic/150771646276.jpg', 'Z17miniS防震保护套', '39.00', null);
INSERT INTO `pic` VALUES ('41', 'https://oss.static.nubia.cn/pic/150778879114.jpg', '努比亚降噪耳机', '299.00', null);
INSERT INTO `pic` VALUES ('42', 'https://oss.static.nubia.cn/pic/150414625895.jpg', '努比亚运动蓝牙耳机', '129.00', null);
INSERT INTO `pic` VALUES ('43', 'https://oss.static.nubia.cn/pic/150103807291.jpg', '努比亚蓝牙耳机', '79.00', null);

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `uid` tinyint(4) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(32) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'sdsdsdsds', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `user` VALUES ('2', '123123123', '10a69ff2464ad7675f1182a04597f32b');
INSERT INTO `user` VALUES ('4', '55555555', 'f638f4354ff089323d1a5f78fd8f63ca');
INSERT INTO `user` VALUES ('5', 'l123', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `user` VALUES ('6', 'llll123456', '2034a6b388138031b6b744af5605b0d8');
INSERT INTO `user` VALUES ('7', 'tttt123456', 'c63c505f85b64a17f704f7d21c460d0b');
INSERT INTO `user` VALUES ('8', 'yyyy123456', 'ef727a3600658ed462e5388c1fd92bd2');
INSERT INTO `user` VALUES ('9', 'zzzz123456', '6356069d74ec2a8458d59db227360836');
INSERT INTO `user` VALUES ('10', 'bbbb1111', '229a729b82ce06972795ed71c00f1dcb');
