-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2023-01-18 14:17:59
-- 伺服器版本： 10.4.24-MariaDB
-- PHP 版本： 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `collegeres`
--

-- --------------------------------------------------------

--
-- 資料表結構 `score`
--

CREATE TABLE `score` (
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `idnumber` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `choose` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `opinion` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `score`
--

INSERT INTO `score` (`name`, `idnumber`, `phone`, `choose`, `rating`, `opinion`) VALUES
('王大名', '1091564', '0912345678', '興仁食堂', '5', '世界好吃'),
('yzu', '1104777', '0937659764', '天河書屋', '3', '發餐券再去吃就好'),
('桐谷和人', '1148763', '0948763187', '冰窖水果部', '3', '摸頭還要哭'),
('啦啦啦', '1110000', '0900000000', '自助餐', '3', '偏貴'),
('123', '1111111', '0999999999', '臻品茶', '5', '老闆好帥'),
('王大明', '1095491', '0987654321', 'A華加湯滷味', '4', '北拜ㄛ😀'),
('測試emoji', '1111111', '0900123456', '自助餐', '3', '貴😭'),
('寶寶', '1081125', '0987524452', '興仁食堂', '4', '我愛香菇雞肉蓋飯'),
('ya', '1111401', '0911111111', '仙桃總鋪', '5', '肉絲炒飯好吃'),
('', '', '', '', '', ''),
('小美', '1110258', '0933225796', '呷飽', '3', '餛飩有時微酸'),
('小帥', '1111402', '0987554628', '卡利亞里(GAY BAR)', '3', '普通義大利麵'),
('大壯', '1111562', '0912345586', '玉食屋', '3', '吃起來就像滷味旁邊那一家的味道'),
('阿賈克斯', '1111202', '0965233574', '冰窖水果部', '4', '便宜!但布丁燒......'),
('國崩', '1092556', '0985622015', '2師兄', '1', '過程煎熬'),
('123', '1110000', '0900000000', '天河書屋', '4', '其實我沒吃過'),
('王小明', '1113377', '0912345678', '興仁食堂', '5', '月底天堂'),
('元智', '1111121', '0999999999', '冰窖水果部', '3', '可可好喝'),
('元智', '1111121', '0999999999', '冰窖水果部', '3', '果汁偷加水');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
