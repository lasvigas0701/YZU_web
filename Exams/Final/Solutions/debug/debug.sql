-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- 主機: localhost
-- 產生時間： 2023 年 01 月 11 日 19:49
-- 伺服器版本: 5.7.33-0ubuntu0.16.04.1
-- PHP 版本： 7.0.33-0ubuntu0.16.04.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `1111Web`
--

-- --------------------------------------------------------

--
-- 資料表結構 `debug`
--

CREATE TABLE `debug` (
  `都市` varchar(12) CHARACTER SET utf8 NOT NULL,
  `年度` int(12) NOT NULL,
  `總人口` int(12) NOT NULL,
  `博士畢業` int(12) NOT NULL,
  `博士肄業` int(12) NOT NULL,
  `碩士畢業` int(12) NOT NULL,
  `碩士肄業` int(12) NOT NULL,
  `大學畢業` int(12) NOT NULL,
  `大學肄業` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 資料表的匯出資料 `debug`
--

INSERT INTO `debug` (`都市`, `年度`, `總人口`, `博士畢業`, `博士肄業`, `碩士畢業`, `碩士肄業`, `大學畢業`, `大學肄業`) VALUES
('新北市', 110, 3535720, 14040, 7334, 195564, 50971, 821355, 232221),
('臺北市', 110, 2197953, 26037, 9135, 229099, 42430, 676002, 136053),
('桃園市', 110, 1946366, 7286, 4018, 105787, 29085, 453231, 142575),
('臺中市', 110, 2426893, 11949, 5775, 136130, 39619, 572958, 168463),
('臺南市', 110, 1643821, 7877, 4015, 89404, 26789, 369182, 103469),
('高雄市', 110, 2428473, 10693, 5655, 129048, 39613, 536432, 148439),
('新北市', 109, 3548668, 14036, 7159, 190627, 49131, 802090, 234883),
('臺北市', 109, 2257893, 26796, 9296, 233314, 41909, 686204, 141187),
('桃園市', 109, 1937043, 7259, 3946, 102150, 27894, 438089, 142305),
('臺中市', 109, 2425981, 11794, 5694, 132304, 37507, 556114, 169719),
('臺南市', 109, 1651433, 7906, 3781, 87349, 25161, 361480, 104652),
('高雄市', 109, 2442701, 10716, 5578, 126942, 37705, 526167, 149211),
('新北市', 108, 3532443, 13601, 7056, 181786, 47733, 772787, 235989),
('臺北市', 108, 2289541, 26641, 9273, 231146, 41941, 684535, 145431),
('桃園市', 108, 1914465, 7086, 3850, 97089, 26853, 418937, 140573),
('臺中市', 108, 2414687, 11473, 5593, 126584, 36459, 535165, 169940),
('臺南市', 108, 1653410, 7687, 3683, 83832, 24368, 351575, 105578),
('高雄市', 108, 2444771, 10442, 5474, 122380, 36591, 510567, 149611);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
